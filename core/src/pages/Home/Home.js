import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import NewsList from '../../components/News/NewsList';

function Home() {
  return (
      <>
        <CssBaseline />

        <Container maxWidth={false} disableGutters={true}>
            <Box sx={{ bgcolor: 'var(--color-1)', height: 'fit-content', minHeight: '100vh'}}>
              <NewsList/>
            </Box>
          
        </Container>
      </>
  )
}

export default Home;