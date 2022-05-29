import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import Typography from '@mui/material/Typography';
import NavBar from '../../components/Navbar/Navbar'
import backgroundImage from '../../assets/home/background-home-desktop.jpg';
import './Home.css';

function Home() {

    return (
        <Paper sx={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minWidth: '100%', minHeight: '100%', position: 'fixed' }}>
            <Container sx={{ position: 'relative', width: '450px', height: '382px', left: '165px', top: '387px', marginLeft: '0' }}>
                <h5 style={{ color: '#D0D6F9', marginBottom: '0', right: '5%' }}>SO, YOU WANT TO TRAVEL TO</h5>
                <h1 style={{ color: '#FFFFFF', lineHeight: '172px', fontStyle: 'normal', marginTop: '24px', marginBottom: '24px' }}>SPACE</h1>
                <p style={{ mixBlendMode: 'normal' }}>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </Container>
            <ButtonUnstyled className="explore-btn" style={{ position: 'relative', width: '274px', height: '274px', borderRadius: '50%', left: '1001px', top: '125px', bottom: '131px', right: '165px', }}><h4 style={{ color: '#0B0D17', fontWeight: '400', lineHeight: '36.67px', letterSpacing: '2px' }}>EXPLORE</h4></ButtonUnstyled>
        </Paper>
    )
}

export default Home;