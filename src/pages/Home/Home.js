import React from 'react';
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';
import desktopBackgroundImage from '../../assets/home/background-home-desktop.jpg';
import tabletBackgroundImage from '../../assets/home/background-home-tablet.jpg';
// import NavBar from '../../components/Navbar/Navbar'
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
                        width: '464px',
                        height: '382px',
                        left: '165px',
                        top: '387px',
                        marginLeft: '0',
                        [breakpoints.down('lg')]: {
                            top: '202px'
                        },
                        [breakpoints.down('md')]: {
                            display: 'flex',
                            flexWrap: 'wrap',
                            width: '285px',
                            height: '276px',
                            top: '112px',
                            left: '49px',
                        },
                    }
                }
            ]
        },
        MuiButton: {
            variants: [
                {
                    props: {
                        variant: 'exploreBtn'
                    },
                    style: {
                        position: 'relative',
                        width: '274px',
                        height: '274px', 
                        borderRadius: '50%', 
                        left: '1001px', 
                        top: '88px', 
                        bottom: '131px', 
                        right: '165px', 
                        backgroundColor: '#FFFFFF', 
                        borderStyle: 'none',
                        fontSize: '32px',
                        fontFamily: 'Bellefair',
                        color: '#0B0D17', 
                        fontWeight: '400', 
                        lineHeight: '36.67px', 
                        letterSpacing: '2px',
                        // zIndex: '2',
                        [breakpoints.down('lg')]: {
                            left: '263px', 
                            top: '292px',
                        },
                        [breakpoints.down('md')]: {
                            width: '150px',
                            height: '150px',
                            top: '200px',
                            left: '113px',
                            fontSize: '20px',
                            lineHeight: '22.92px', 
                            letterSpacing: '1.25px',
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
    [breakpoints.down('md')]: {
        fontSize: '80px',
        lineHeight: '100px'
    },
}

theme.typography.h5 = {
    // right: '5%',
    [breakpoints.down('lg')]: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '20px',
    },
    [breakpoints.down('md')]: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '16px',
        letterSpacing: '2.7px',
        lineHeight: '19px'
    },
}

theme.typography.p = {
    fontSize: '18px',
    fontFamily: 'Barlow',
    mixBlendMode: 'normal',
    color: '#D0D6F9',
    [breakpoints.down('lg')]: {
        fontFamily: 'Barlow',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: '16px',
        color: '#D0D6F9',
        lineHeight: '28px',
    [breakpoints.down('md')]: {
        fontSize: '15px',
        lineHeight: '25px'
    },
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
                <Box className="btn-container">
                    <Button component={Link} to="/destination" variant="exploreBtn" className="explore-btn">EXPLORE</Button>
                    <Box className="btn-hover"></Box>
                </Box>
            </Paper>
        </ThemeProvider>
    )
}

export default Home;