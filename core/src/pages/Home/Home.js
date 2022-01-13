import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useSearchParams } from "react-router-dom";
import NewsList from '../../components/News/NewsList';


function Home() {
  const [searchParams, ] = useSearchParams();

  return (
      <>
        <CssBaseline />

        <Container maxWidth={false} disableGutters={true}>
            <Box sx={{ bgcolor: 'var(--color-1)', height: 'fit-content', minHeight: '100vh'}}>
              <NewsList searchParams={searchParams}/>
            </Box>
          
        </Container>
      </>
  )
}

export default Home;