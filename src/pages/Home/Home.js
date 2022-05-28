import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import NavBar from '../../components/Navbar/Navbar'
import backgroundImage from '../../assets/home/background-home-desktop.jpg';

function Home() {

    return (
        <Paper sx={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh', position: 'absolute' }}>
            <Container sx={{ position: 'relative', width: '450px', height: '382px', left: '165px', top: '387px', marginLeft: '0' }}>
                <h5 style={{ color: '#D0D6F9', marginBottom: '0', right: '5%' }}>SO, YOU WANT TO TRAVEL TO</h5>
                <h1 style={{ color: '#FFFFFF', lineHeight: '172px', fontStyle: 'normal', marginTop: '24px', marginBottom: '24px' }}>SPACE</h1>
                <p style={{ mixBlendMode: 'normal' }}>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </Container>
        </Paper>
    )
}

export default Home;