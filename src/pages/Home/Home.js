import React from 'react';
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
// import NavBar from '../../components/Navbar/Navbar'
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';
import desktopBackgroundImage from '../../assets/home/background-home-desktop.jpg';
import tabletBackgroundImage from '../../assets/home/background-home-tablet.jpg';
import './Home.css';

const customBreakpointValues = {
    values: {
        xs: 0,
        sm: 375,
        md: 768,
        lg: 1440,
        xl: 1680,
    },
}

const breakpoints = createBreakpoints({ ...customBreakpointValues })

const theme = createTheme({
    breakpoints: {
        ...customBreakpointValues,
    },
    components: {
        MuiPaper: {
            variants: [
                {
                    props: {
                        variant: 'body1'
                    },
                    style: {
                        backgroundImage: `url(${desktopBackgroundImage})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        minWidth: '100%',
                        minHeight: '100%',
                        position: 'fixed',
                        [breakpoints.down('lg')]: {
                            backgroundImage: `url(${tabletBackgroundImage})`,
                        },
                    }
                }
            ],
        },
    },
})

function Home() {
    return (
        <ThemeProvider theme={theme}>
            <Paper variant="body1">
                <Container sx={{ position: 'relative', width: '450px', height: '382px', left: '165px', top: '387px', marginLeft: '0' }}>
                    <h5 style={{ color: '#D0D6F9', marginBottom: '0', right: '5%' }}>SO, YOU WANT TO TRAVEL TO</h5>
                    {/* <h5 className={classes.h5}>SO, YOU WANT TO TRAVEL TO</h5> */}
                    <h1 style={{ color: '#FFFFFF', lineHeight: '172px', fontStyle: 'normal', marginTop: '24px', marginBottom: '24px' }}>SPACE</h1>
                    <p style={{ mixBlendMode: 'normal' }}>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </Container>
                <div className="btn-container">
                    <ButtonUnstyled className="explore-btn" style={{ position: 'relative', width: '274px', height: '274px', borderRadius: '50%', left: '1001px', top: '125px', bottom: '131px', right: '165px', backgroundColor: '#FFFFFF', borderStyle: 'none' }}><Link to="/destination" style={{ textDecoration: 'none' }}><h4 style={{ color: '#0B0D17', fontWeight: '400', lineHeight: '36.67px', letterSpacing: '2px' }}>EXPLORE</h4></Link></ButtonUnstyled>
                    <div className="btn-hover"></div>
                </div>
            </Paper>
        </ThemeProvider>
    )
}

export default Home;