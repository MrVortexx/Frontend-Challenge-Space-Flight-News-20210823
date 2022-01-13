import React, {useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import { styled } from '@material-ui/core/styles';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Link from '@mui/material/Link';

import {NewsCard, NewsImageStyles} from './styles';
import dateService from '../../services/DateService';
import browserService from '../../services/BrowserService';

const LoadMoreBtn = styled(Button)({
    backgroundColor: 'var(--color-1)',
    color:  'var(--border-color-input)', 
  
    height: '45px',
    width: '130px',
    margin: '100px 0',
    fontWeight: '600',
    '&:hover': {
      backgroundColor: 'var(--color-2)',
      color:  '#fff', 
      boxShadow: 'none',
    },
});
const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#1E2022',
    color: '#fff'
  };

export default function News({data, isInverted = false}) {
    const [showMore, setShowMore] = useState(false);
    const close = () => setShowMore(false);
    const open = () => setShowMore(true);
    
 
    return (
        <NewsCard isInverted={isInverted}>  

            <Card className="card" >
                <NewsImageStyles>
                    <img src={data.imageUrl} alt="" sx={{width: '250px', maxWidth: '200px'}}/>
                </NewsImageStyles>

                <CardContent >
                    <Typography variant="h5" component="div">
                        {data.title}
                    </Typography>
                    <Typography sx={{ fontSize: 14, textAlign: `${isInverted? 'end': ''}` }} color="#fff" gutterBottom>
                        {dateService.formatDate(data.publishedAt)}
                    </Typography>
                    <Typography variant="body2">
                       {data.summary}
                    </Typography>
                </CardContent>
                <CardActions>
                    <LoadMoreBtn size="small" onClick={open} >Veja mais</LoadMoreBtn>
                </CardActions>
            </Card>

            
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={showMore}
                onClose={close}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                    in: true
                }}>

                <Fade in={showMore}>
                    <Box sx={modalStyle}>
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Box>
                                <NewsImageStyles>
                                    <img src={data.imageUrl} alt="" sx={{width: '250px', maxWidth: '200px'}}/>
                                </NewsImageStyles>
                            </Box>
                            <Box >
                                <Typography variant="h5" component="div">
                                {data.title}
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="#fff" gutterBottom>
                                    {dateService.formatDate(data.publishedAt)}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="body2">
                                    {data.summary}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: 15, marginTop: '50px' }} >
                                    Ultima atualizacao:  
                                </Typography>
                                <Typography sx={{ marginLeft: '40px' }}>
                                        {  dateService.formatDate(data.updatedAt)}
                                    </Typography>
                                <Typography sx={{ fontSize: 13, marginTop: '10px' }} >
                                    Fonte:  
                                  
                                </Typography>
                                <Link href='#' onClick={() => {browserService.openSite(browserService.getSiteHostname(data.url))}} sx={{ marginLeft: '40px' }} >
                                        {browserService.getSiteHostname(data.url)}
                                    </Link>
                            </Box>

                        </Box>
                    
                        <Box>
                            <LoadMoreBtn size="small" onClick={() => {browserService.openSite(data.url)}} >Ir para o site</LoadMoreBtn>

                        </Box>
                    </Box>
                  
                </Fade>


            </Modal>

        </NewsCard>
    )
}
