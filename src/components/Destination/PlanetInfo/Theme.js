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
                        marginLeft: '14.375em',
                        width: '27.8em',
                        height: '27.8em',
                        [breakpoints.only('iPadAir')]: {
                            padding: '0',
                            width: '20em',
                            height: '19.5em',
                            margin: 'auto',
                            marginBottom: '3.313rem'
                           
                        },
                    }
                },
                {
                    props: {
                        variant: 'info'
                    },
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        width: '33em',
                        position: 'relative',
                        marginLeft: '38em',
                        left: '11em',
                        bottom: '29em',
                        height: '30em',
                        [breakpoints.only('iPadAir')]: {
                            padding: '0',
                            position: 'static',
                            width: '40em',
                            marginTop: '3.313em',
                            margin: 'auto',
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
                        paddingTop: '1.5em',
                        borderLeft: 'none',
                        borderTopWidth: '.1em',
                        borderTopStyle: 'solid',
                        borderTopColor: 'rgba(56, 59, 75, 1)',
                        marginTop: '3.313em',
                        [breakpoints.only('iPadAir')]: {
                           
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
                },
                {
                    props: {
                        variant: 'destTabs'
                    },
                    style: {
                        [breakpoints.only('iPadAir')]: {
                           display: 'flex',
                           justifyContent: 'center',
                           marginBottom: '2em'
                           
                        },
                    }
                },

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
                        color: 'rgba(255, 255, 255, 1)',
                        [breakpoints.only('iPadAir')]: {
                            fontSize: '5.5em',
                            
                        }
                    }
                },
                {
                    props: {
                        variant: 'desc'
                    },
                    style: {
                        display: 'block', //display: block
                        justifyContent: 'center',
                        fontFamily: 'Barlow',
                        fontSize: '1.12em',
                        fontWeight: '400',
                        color: 'rgba(208, 214, 249, 1)',
                        lineHeight: '178%',
                        marginTop: '14px',
                        marginBottom: '3.375em',
                        [breakpoints.only('iPadAir')]: {
                            display: 'flex',
                            textAlign: 'center',
                            marginBottom: '3.5em',
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
                        color: 'rgba(255, 255, 255, 1)',
                        lineHeight: '2em',
                        [breakpoints.only('iPadAir')]: {
                            
                        
                        }
                        
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
                        color: 'rgba(255, 255, 255, 1)',
                        lineHeight: '2em'
                    }
                },
                {
                    props: {
                        variant: 'dist-time'
                    },
                    style: {
                        display: 'flex',
                        fontFamily: 'Barlow Condensed',
                        width: '6.06em',
                        fontSize: '.875rem',
                        fontWeight: '400',
                        color: 'rgba(208, 214, 249, 1)',
                        lineHeight: '1.4em',
                        [breakpoints.only('iPadAir')]: {
                          marginLeft: '6.4em',
                        }
                    }
                },
            ],
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
                        letterSpacing: '.169em',
                        // [breakpoints.only('iPadAir')]: {
                       

                        // }
                    },
                }
            },
        },
    },
})
export default theme;