import { createTheme } from '@mui/material/styles';
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';

// const customBreakpointValues = {
//     values: {
//         xs: 0,
//         // mobile
//         galaxyFold: 280,
//         samsungGalaxyS8: 360,
//         iphoneSE: 375,
//         iphone12Pro: 390,
//         pixel5: 392,
//         samsungGalaxyA51: 412,
//         samsungGalaxyS20: 412,
//         iphoneXR: 414,

//         // tablet
//         surfaceDuo: 540,
//         iPadMini: 768,
//         iPadAir: 820,
//         surfacePro7: 912,
//         // tablet: 913,
//         desktop: 1140,
//         xl: 1680,
//     },
// }

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
        MuiAppBar: {
            variants: [
                {
                    props: {
                        variant: 'body'
                    },
                    style: {
                        position: 'static',
                        marginTop: '1rem',
                        [breakpoints.down('lg')]: {
                            minWidth: 100,
                        
                        },
                        [breakpoints.down('md')]: {
                            marginTop: 24,
                            minWidth: 100
                        }
                    }
                }
            ]
        },
        MuiToolbar: {
            variants: [
                {
                    props: {
                        variant: 'toolbar'
                    },
                    style: {
                        height: '96px',
                        [breakpoints.down('md')]: {
                            height: '40px'
                        }
                    }
                }
            ]
        },
        MuiIcon: {
            variants: [
                {
                    props: {
                        variant: 'icon'
                    },
                    style: {
                        display: 'flex',
                        marginLeft: 55,
                        marginRight: 'auto',
                    [breakpoints.down('md')]: {
                        marginLeft: 0,
                        width: '40px',
                        height: '40px'
                    }
                }
            }
            ]
        },
        MuiButton: {
            variants: [
                {
                    props: {
                        variant: 'navbutton'
                    },
                    style: {
                        color: 'white',
                        fontFamily: 'Barlow Condensed',
                        fontSize: '16px',
                        wordSpacing: 2.7,
                        padding: '2rem',
                        display: 'flex',
                    }
                },
                {
                    props: {
                        variant: 'listbutton'
                    },
                    style: {
                        color: 'white',
                        fontFamily: 'Barlow Condensed',
                        fontSize: '16px',
                        wordSpacing: 2.7,
                        display: 'flex',
                    }
                }
            ]
        },
        MuiSvgIcon: {
            variants: [
                {
                    props: {
                        variant: 'burger-icon'
                    },
                    style: {
                        color: 'white',
                        [breakpoints.down('md')]: {
                            width: '35px',
                            height: '40px',
                            marginLeft: '227px'
                        }
                    }
                }
            ]
        },
        MuiButtonBase: {
            variants: [
                {
                    props: {
                        variant: 'close-icon'
                    },
                    style: {
                        color: 'white'
                    }
                }
            ]
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    "&.MuiPaper-root": {
                        backgroundColor: 'transparent',
                        backdropFilter: "blur(2px)",
                    }
                }
            }
        },
    }
})


export default theme;