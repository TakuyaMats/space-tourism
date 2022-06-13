import { createTheme } from '@mui/material/styles';
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';
import { grey } from '@mui/material/colors';

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
// const primary = grey[50];

const theme = createTheme({
    breakpoints: {
        ...customBreakpointValues,
    },
    palette: {
        primary: {
            main: grey[50],
        },
    },
    components: {
        MuiContainer: {
            variants: [
                {
                    props: {
                        variant: 'image'
                    },
                    style: {
                        postion: 'absolute',
                        marginRight: '47.8em',
                        marginLeft: '14.3em',
                        width: '27.8em',
                        height: '27.8em',
                        [breakpoints.only('iPadAir')]: {
                            // position: 'absolute',
                            padding: '0',
                            width: '18.75em',
                            height: '18.75em',
                            marginLeft: '12.6em',
                            marginRight: '14.6em',
                            marginBottom: '3.31em'
                        },
                    }
                },
                {
                    props: {
                        variant: 'info'
                    },
                    style: {
                        width: '33em',
                        position: 'relative',
                        marginLeft: '38em',
                        left: '20em',
                        bottom: '29em',
                        height: '30em',
                        [breakpoints.only('iPadAir')]: {
                            position: 'static',
                            padding: '0',
                            flexDirection: 'column',
                            marginTop: '11em',
                            marginLeft: '13em',
                            display: 'flex',
                            textAlign: 'center',
                            
                        },
                    }
                },
                {
                    props: {
                        variant: 'subInfo'
                    },
                    style: {
                        display: 'flex',
                        flexDirection: 'row',
                        paddingRight: 0,
                        paddingLeft: 0,
                        [breakpoints.only('iPadAir')]: {
                            display: 'flex',
                            textAlign: 'center',
                        }

                    }
                },
                {
                    props: {
                        variant: 'subDistance'
                    },
                    style: {
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        paddingRight: 0,
                        paddingLeft: 0,
                        [breakpoints.only('iPadAir')]: {
                            display: 'flex',
                            textAlign: 'center',
                        }
                    }
                },
                {
                    props: {
                        variant: 'subTime'
                    },
                    style: {
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        paddingRight: 0,
                        paddingLeft: 0
                    }
                }
            ],
        },
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'name'
                    },
                    style: {
                        display: 'block',
                        fontFamily: 'Bellefair',
                        fontSize: '6.25em',
                        fontWeight: '400',
                        color: '#FFFFFF'
                    }
                },
                {
                    props: {
                        variant: 'desc'
                    },
                    style: {
                        display: 'block',
                        fontFamily: 'Barlow',
                        fontSize: '1.12em',
                        fontWeight: '400',
                        color: '#FFFFFF',
                        lineHeight: '1.4em',
                        marginTop: '14px',
                        marginBottom: '54px',
                        [breakpoints.only('iPadAir')]: {
                            display: 'flex',
                            textAlign: 'center',
                        }
                    }
                },
                {
                    props: {
                        variant: 'distance'
                    },
                    style: {
                        fontFamily: 'Bellefair',
                        fontSize: '1.75em',
                        fontWeight: '400',
                        color: '#FFFFFF',
                        lineHeight: '2em',
                        // [breakpoints.only('iPadAir')]: {
                        //     display: 'flex',
                        //     textAlign: 'center',
                        // }
                        
                    }
                },
                {
                    props: {
                        variant: 'travel'
                    },
                    style: {
                        fontFamily: 'Bellefair',
                        fontSize: '1.75em',
                        fontWeight: '400',
                        color: '#FFFFFF',
                        lineHeight: '2em',
                        // [breakpoints.only('iPadAir')]: {
                        //     display: 'flex',
                        //     textAlign: 'center',
                        // }
                    }
                },
                {
                    props: {
                        variant: 'avgDist'
                    },
                    style: {
                        display: 'flex',
                        fontFamily: 'Barlow Condensed',
                        width: '6.06em',
                        fontSize: '.875em',
                        fontWeight: '400',
                        color: 'rgba(208, 214, 249, 1)',
                        lineHeight: '1.4em',
                        [breakpoints.only('iPadAir')]: {
                            display: 'flex',
                            textAlign: 'center',
                        }
                    }
                },
                {
                    props: {
                        variant: 'estTime'
                    },
                    style: {
                        display: 'flex',
                        fontFamily: 'Barlow Condensed',
                        fontSize: '1.12em',
                        width: '6.06em',
                        fontWeight: '400',
                        color: 'rgba(208, 214, 249, 1)',
                        lineHeight: '1.4em',
                        [breakpoints.only('iPadAir')]: {
                            display: 'flex',
                            textAlign: 'center',
                        }
                    }
                },
            ]
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    "&.MuiTab-root": {
                        '&:hover': {
                            color: 'gray',
                        },
                        fontSize: '1em',
                        fontFamily: 'Barlow Condensed',
                        fontWeight: '400',
                        height: '1.1em',
                        lineHeight: '1.1em',
                        letterSpacing: '.169em'
                    },
                }
            },
        },
    },
})
export default theme;