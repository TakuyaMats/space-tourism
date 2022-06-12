import { createTheme } from '@mui/material/styles';
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';
import launchVehicleLandscape from '../../../assets/technology/image-launch-vehicle-landscape.jpg';

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
        MuiTabs: {
            styleOverrides: {
                flexContainer: {
                        "&.MuiTabs-flexContainer": {
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center',
                        textDecoration: 'none',
                        position: 'fixed',
                        left: '165px',
                        top: '383px',
                        [breakpoints.down('desktop')]: {
                            flexDirection: 'row',
                        },
                        [breakpoints.only('iPadAir')]: {
                            textDecoration: 'none',
                            justifyContent: 'center',
                            left: '253px',
                            top: '620px',
                        },
                        [breakpoints.only('iphoneSE')]: {
                            left: '100px',
                            top: '343px',
                        },
                    },
                }
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    "&.MuiTab-root": {
                        border: '1px solid rgba(255,255,255, 0.2)',
                        '&:hover': {
                            background: '#FFFFFF',
                            color: '#0B0D17'
                        }
                    }
                },
            },
            variants: [
                {
                    props: {
                        variant: 'tab'
                    },
                    style: {
                        fontFamily: 'Bellefair',
                        fontSize: '32px',
                        color: 'white', 
                        marginBottom: '32px', 
                        borderColor: 'white',
                        borderRadius: '50%', 
                        width: '80px', 
                        height: '80px', 
                        mixBlendMode: 'difference',
                        textColorPrimary: 'none',
                        [breakpoints.only('iPadAir')]: {
                            marginRight: '16px'
                        },
                        [breakpoints.only('iphoneSE')]: {
                            fontSize: '16px',
                            letterSpacing: '1px',
                            minWidth: 0,
                            minHeight: 0,
                            width: '40px',
                            height: '40px', 
                            left: '12px',
                            marginRight: '16px'
                        },
                    }
                }
            ]
        },
        MuiContainer: {
            variants: [
                {
                    props: {
                        variant: 'container'
                    },
                    style: {
                        position: 'absolute',
                        width: '470px',
                        height: '382px',
                        left: '325px',
                        top: '383px',
                        [breakpoints.only('iPadAir')]: {
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'center',
                            width: '490px',
                            height: '237px',
                            top: '800px',
                            left: '160px',
                        },
                        [breakpoints.only('iphoneSE')]: {
                            width: '327px',
                            height: '220px',
                            textAlign: 'center',
                            top: '409px',
                            left: '24px',
                        },
                    }
                }
            ]
        },
        MuiPaper: {
            variants: [
                {
                    props: {
                        variant: 'image'
                    },
                    style: {
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        position: 'absolute',
                        width: '515px',
                        height: '527px',
                        left: '925px',
                        top: '272px',
                        [breakpoints.down('desktop')]: {
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            width: '100vw',
                            height: '310px',
                            left: '0',
                            bottom: '0px',
                            top: '220px'
                        },
                        [breakpoints.only('iphoneSE')]: {
                            top: '139px',
                            height: '170px',
                            width: '100vw',
                        },
                    }
                }
            ]
        },
    },
})

theme.typography.h1 = {
    fontFamily: 'Bellefair',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '56px',
    lineHeight: '64px',
    color: '#FFFFFF',
    marginBottom: '11px',
    mixBlendMode: 'difference',
    [breakpoints.only('iPadAir')]: {
        fontSize: '40px',
    },
    [breakpoints.only('iphoneSE')]: {
        fontSize: '24px',
        lineHeight: '28px',
    },
}

theme.typography.h5 = {
    fontFamily: 'Barlow Condensed',
    fontStyle: 'normal',
    fontSize: '16px',
    lineHeight: '19px',
    letterSpacing: '2.7px',
    marginBottom: '11px',
    color: '#D0D6F9',
    mixBlendMode: 'difference',
    [breakpoints.only('iphoneSE')]: {
        fontSize: '14px',
        lineHeight: '17px',
        letterSpacing: '2.3625px',
    },
}

theme.typography.p = {
    fontFamily: 'Barlow',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '32px',
    color: '#D0D6F9',
    mixBlendMode: 'difference',
    [breakpoints.only('iphoneSE')]: {
        fontSize: '15px',
        lineHeight: '25px',
        fontWeight: 400,
    },
}


export default theme;