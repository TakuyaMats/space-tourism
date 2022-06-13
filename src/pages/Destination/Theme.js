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
                        [breakpoints.down('desktop')]: {
                            backgroundImage: `url(${tabletBackgroundImage})`,
                        },
                    }
                },
            ],
        },
        MuiContainer: {
            // styleOverrides: {
            //     ".MuiContainer-root": {
            //         position: 'absolute',
            //         width: '23.87em',
            //         height: '2.12rem',
            //         margin: '10.4em',
            //         marginBottom: '10em'
            //     }
            // },
            variants: [
                {
                    props: {
                        variant: 'title'
                    },
                    style: {
                        height: '2.12rem',
                        marginTop: '4.7em',
                        marginLeft: '10.4em',
                        marginBottom: '7em',
                        width: '33em',
                        marginRight: 'auto',
                        [breakpoints.only('iPadAir')]: {
                            marginTop: '2em',
                            marginLeft: '2.406em',
                            marginRight: '28.5em',
                            marginBottom: '3em', // moves IMG towards bottom of screen
                            width: '23em', 
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
                        color: 'rgba(225, 225, 225, 1)',
                        opacity: '0.3',
                        fontFamily: 'Barlow Condensed',
                        fontWeight: 700,
                        fontStyle: 'normal',
                        letterSpacing: '.294em',
                        fontSize: '1.75em',
                        [breakpoints.only('iPadAir')]: {
                            fontSize: '1.25em',
                        },

                    }
                },
                {
                    props: {
                        variant: 'pickDest'
                    },
                    style: {
                        color: '#FFFFFF',
                        fontFamily: 'Barlow Condensed',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        letterSpacing: '.294em',
                        fontSize: '1.75em',
                        textTransform: 'uppercase',
                        marginLeft: '1.7rem',
                        [breakpoints.only('iPadAir')]: {
                            fontSize: '1.25em',
                            marginLeft: '1.188em'
                        },

                    }
                }
            ]
        }
    },

})

export default theme;