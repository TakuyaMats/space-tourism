import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import NavBar from '../../components/Navbar/Navbar'
import backgroundImage from '../../assets/home/background-home-desktop.jpg';

function Home() {

    return (
        <Grid sx={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',width: '100vw', height: '100vh' }}>
            <Container sx={{ position: 'absolute', width: '450px', height: '382px', left: '165px', top: '387px'}}>
                <Typography sx={{ fontFamily: 'Barlow Condensed', fontStyle: 'normal', color: '#D0D6F9', fontSize: '28px', fontWeight: '400', lineHeight: '33.6px', letterSpacing: '4.725px' }}>SO, YOU WANT TO TRAVEL TO</Typography>
            </Container>
        </Grid>
    )
}

export default Home;