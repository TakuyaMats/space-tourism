import { createTheme } from '@mui/material/styles';
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';
import desktopBackgroundImage from '../../assets/destination/background-destination-desktop.jpg';
import tabletBackgroundImage from '../../assets/destination/background-destination-tablet.jpg';

const customBreakpointValues = {
    values: {
        xs: 0,
        // mobile
        galaxyFold: 280,
        samsungGalaxyS8: 360,
        iphoneSE: 375,
        iphone12Pro: 390,
        pixel5: 392,
        samsungGalaxyA51: 412,
        samsungGalaxyS20: 412,
        iphoneXR: 414,

        // tablet
        surfaceDuo: 540,
        iPadMini: 768,
        iPadAir: 820,
        surfacePro7: 912,
        // tablet: 913,
        desktop: 1140,
        laptop: 1440,
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
                        maxWidth: '100vw',
                        minHeight: '100vh',
                        // marginTop: '1em',
                        // position: 'fixed',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        // alignContent: 'center',
                        overflow: 'scroll',
                        [breakpoints.down('desktop')]: {
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
                        variant: 'title'
                    },
                    style: {
                        display: 'flex',
                        height: '2.12rem',
                        flexDirection:'row',
                        flexWrap: 'none',
                        marginTop: '4em',
                        marginLeft: '10.4em',
                        marginBottom: '4em',
                        width: '33em',
                        // marginRight: 'auto',
                        // [breakpoints.down('laptop')]: {
                        //     height: '2.12rem',
                        //     marginTop: '1.5em',
                        //     marginLeft: '10em',
                        //     marginBottom: '4.5em',
                        //     width: '33em',
                        //     marginRight: 'auto',
                        // },
                        [breakpoints.only('surfacePro7')]: {
                            marginTop: '2.5em',
                            marginLeft: '3em',
                            marginBottom: '3.5em',
                            width: '31em',
                        },
                        [breakpoints.only('iPadAir')]: {
                            marginTop: '2em',
                            marginLeft: '2.406em',
                            marginBottom: '2.5em',
                            // width: 'em',
                        },
                        [breakpoints.only('iPadMini')]: {
                            marginTop: '2em',
                            marginLeft: '2.406em',
                            marginBottom: '1.5em',
                            // width: '23em',
                        },
                        [breakpoints.only('iphoneSE')]: {
                            justifyContent: 'center',
                            marginTop: '1.5em',
                            marginBottom: '1em',
                            marginLeft: '2.5em',
                            width: '16em',
                        },
                        [breakpoints.only('iphoneXR')]: {
                            justifyContent: 'center',
                            marginTop: '1.5em',
                            marginLeft: '4.5rem',
                            marginBottom: '1em',
                            width: '17em'
                        },
                        [breakpoints.only('iphone12Pro')]: {
                            marginTop: '1.5em',
                            marginLeft: '4.3rem',
                            marginBottom: '1em',
                            width: '19em',
                        },
                        [breakpoints.only('samsungGalaxyS8')]: {
                            marginTop: '1.5em',
                            marginLeft: '3.5rem',
                            marginBottom: '1em',
                            width: '17em',
                        },
                        [breakpoints.only('samsungGalaxyS20')]: {
                            // justifyContent: 'center',
                            marginTop: '2em',
                            marginLeft: '5.2rem',
                            marginBottom: '.1em',
                            width: '16em',
                        },
                        [breakpoints.only('pixel5')]: {
                            marginTop: '1.5em',
                            marginBottom: '1em',
                            marginLeft: '4.3em',
                            width: '16em',
                        },
                    }
                }
            ]
        },
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: '01'
                    },
                    style: {
                        display: 'flex',
                        color: 'rgba(225, 225, 225, 1)',
                        opacity: '0.3',
                        fontFamily: 'Barlow Condensed',
                        fontWeight: 700,
                        fontStyle: 'normal',
                        letterSpacing: '.294em',
                        fontSize: '1.75em',
                        [breakpoints.only('surfacePro7')]: {
                            fontSize: '1.5em',
                        },
                        [breakpoints.only('iPadAir')]: {
                            fontSize: '1.25em',
                        },
                        [breakpoints.only('iPadMini')]: {
                            fontSize: '1.25em',
                        },
                        [breakpoints.only('iphoneSE')]: {
                            fontSize: '1em',
                            letterSpacing: '.169em',
                        },
                        [breakpoints.only('iphoneXR')]: {
                            fontSize: '1em',
                            letterSpacing: '.169em',
                        },
                        [breakpoints.only('iphone12Pro')]: {
                            fontSize: '1em',
                            letterSpacing: '.169em',
                        },
                        [breakpoints.only('samsungGalaxyS8')]: {
                            fontSize: '1em',
                            letterSpacing: '.169em',
                        },
                        [breakpoints.only('samsungGalaxyS20')]: {
                            fontSize: '1em',
                            letterSpacing: '.169em',
                        },
                        [breakpoints.only('pixel5')]: {
                            fontSize: '1em',
                            letterSpacing: '.169em',
                        },
                    }
                },
                {
                    props: {
                        variant: 'pickDest'
                    },
                    style: {
                        // display: 'flex',
                        color: '#FFFFFF',
                        fontFamily: 'Barlow Condensed',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        letterSpacing: '.294em',
                        fontSize: '1.75em',
                        textTransform: 'uppercase',
                        marginLeft: '1.7rem',
                        [breakpoints.only('surfacePro7')]: {
                            fontSize: '1.5em',
                            marginLeft: '1.188em'
                        },
                        [breakpoints.only('iPadAir')]: {
                            fontSize: '1.25em',
                            marginLeft: '1.188em'
                        },
                        [breakpoints.only('iPadMini')]: {
                            fontSize: '1.25em',
                            marginLeft: '1.188em'
                        },
                        [breakpoints.only('iphoneSE')]: {
                            fontSize: '1em',
                            marginLeft: '1.25em',
                            letterSpacing: '.169em',
                        },
                        [breakpoints.only('iphoneXR')]: {
                            fontSize: '1em',
                            marginLeft: '1.25em',
                            letterSpacing: '.169em',
                        },
                        [breakpoints.only('iphone12Pro')]: {
                            fontSize: '1em',
                            marginLeft: '1.25em',
                            letterSpacing: '.169em',
                        },
                        [breakpoints.only('samsungGalaxyS8')]: {
                            fontSize: '1em',
                            marginLeft: '1.25em',
                            letterSpacing: '.169em',
                        },
                        [breakpoints.only('samsungGalaxyS20')]: {
                            fontSize: '1em',
                            marginLeft: '1.25em',
                            letterSpacing: '.169em',
                        },
                        [breakpoints.only('pixel5')]: {
                            fontSize: '1em',
                            marginLeft: '1.25em',
                            letterSpacing: '.169em',
                        },
                    }
                }
            ]
        }
    },

})

export default theme;