import React from 'react';
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import Typography from '@mui/material/Typography';
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
                },
            ],
        },
        MuiContainer: {
            variants: [
                {
                    props: {
                        variant: 'container1'
                    },
                    style: {
                        position: 'relative',
                        width: '450px',
                        height: '382px',
                        left: '165px',
                        top: '387px',
                        marginLeft: '0',
                        [breakpoints.down('lg')]: {
                            top: '202px'
                        },
                    }
                }
            ]
        },
    },
})

theme.typography.h1 = {
    lineHeight: '172px',
    fontStyle: 'normal',
    marginTop: '24px',
    marginBottom: '24px', 
    [breakpoints.down('lg')]: {
        display: 'flex',
        justifyContent: 'center',
    },
}

theme.typography.h5 = {
    right: '5%',
    [breakpoints.down('lg')]: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '20px',
    },
}

theme.typography.p = {
    fontSize: '18px',
    fontFamily: 'Barlow Condensed, sans-serif',
    mixBlendMode: 'normal',
    [breakpoints.down('lg')]: {
        fontFamily: 'Barlow',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: '16px',
        color: '#D0D6F9',
        lineHeight: '28px',
    },
}

function Home() {
    return (
        <ThemeProvider theme={theme}>
            <Paper variant="body1">
                <Container variant="container1">
                    <Typography variant="h5">SO, YOU WANT TO TRAVEL TO</Typography>
                    <Typography variant="h1">SPACE</Typography>
                    <Typography variant="p">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</Typography>
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