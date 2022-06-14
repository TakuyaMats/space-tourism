import { createTheme } from '@mui/material/styles';
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';

const customBreakpointValues = {
    values: {
        xs: 0,
        // mobile
        galaxyFold: 280,
        samsungGalaxyS8: 360,
        iphoneSE: 375,
        iphone12Pro: 390,
        pixel5: 392,
        samsungGalaxyS20: 413,
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
                        [breakpoints.only('iPadMini')]: {
                            textDecoration: 'none',
                            justifyContent: 'center',
                            left: '230px',
                            top: '570px',
                        },
                        [breakpoints.only('surfacePro7')]: {
                            textDecoration: 'none',
                            justifyContent: 'center',
                            left: '300px',
                            top: '620px',
                        },
                        [breakpoints.only('iphoneSE')]: {
                            left: '100px',
                            top: '343px',
                        },
                        [breakpoints.only('iphoneXR')]: {
                            left: '120px',
                            top: '355px',
                        },
                        [breakpoints.only('iphone12Pro')]: {
                            left: '105px',
                            top: '355px',
                        },
                        [breakpoints.only('pixel5')]: {
                            left: '105px',
                            top: '355px',
                        },
                        [breakpoints.only('samsungGalaxyS8')]: {
                            left: '90px',
                            top: '355px',
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
                        [breakpoints.only('iPadMini')]: {
                            marginRight: '16px'
                        },
                        [breakpoints.only('surfacePro7')]: {
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
                        [breakpoints.only('iphoneXR')]: {
                            fontSize: '16px',
                            letterSpacing: '1px',
                            minWidth: 0,
                            minHeight: 0,
                            width: '50px',
                            height: '50px', 
                            left: '-4px',
                            marginRight: '16px'
                        },
                        [breakpoints.only('iphone12Pro')]: {
                            fontSize: '16px',
                            letterSpacing: '1px',
                            minWidth: 0,
                            minHeight: 0,
                            width: '50px',
                            height: '50px', 
                            marginRight: '16px'
                        },
                        [breakpoints.only('pixel5')]: {
                            fontSize: '16px',
                            letterSpacing: '1px',
                            minWidth: 0,
                            minHeight: 0,
                            width: '50px',
                            height: '50px', 
                            marginRight: '16px'
                        },
                        [breakpoints.only('samsungGalaxyS8')]: {
                            fontSize: '16px',
                            letterSpacing: '1px',
                            minWidth: 0,
                            minHeight: 0,
                            width: '50px',
                            height: '50px', 
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
                        width: '510px',
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
                        [breakpoints.only('iPadMini')]: {
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'center',
                            width: '490px',
                            height: '237px',
                            top: '690px',
                            left: '139px',
                        },
                        [breakpoints.only('surfacePro7')]: {
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'center',
                            width: '510px',
                            height: '237px',
                            top: '800px',
                            left: '201px',
                        },
                        [breakpoints.only('iphoneSE')]: {
                            width: '327px',
                            height: '220px',
                            textAlign: 'center',
                            top: '409px',
                            left: '24px',
                        },
                        [breakpoints.only('iphoneXR')]: {
                            width: '327px',
                            height: '220px',
                            textAlign: 'center',
                            top: '450px',
                            left: '43px',
                        },
                        [breakpoints.only('iphone12Pro')]: {
                            width: '327px',
                            height: '220px',
                            textAlign: 'center',
                            top: '450px',
                            left: '31px',
                        },
                        [breakpoints.only('pixel5')]: {
                            width: '327px',
                            height: '220px',
                            textAlign: 'center',
                            top: '450px',
                            left: '31px',
                        },
                        [breakpoints.only('samsungGalaxyS8')]: {
                            width: '327px',
                            height: '220px',
                            textAlign: 'center',
                            top: '450px',
                            left: '16px',
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
                            objectFit: 'cover',
                            width: '100%',
                            height: '310px',
                            left: '0',
                            bottom: '0px',
                            top: '220px'
                        },
                        [breakpoints.only('surfacePro7')]: {
                            top: '220px',
                            objectFit: 'cover',
                            height: '320px',
                            width: '100%',
                        },
                        [breakpoints.only('iphoneSE')]: {
                            top: '139px',
                            height: '170px',
                            width: '100vw',
                        },
                        [breakpoints.only('iphoneXR')]: {
                            top: '139px',
                            height: '170px',
                            width: '100vw',
                        },
                        [breakpoints.only('iphone12Pro')]: {
                            top: '139px',
                            height: '170px',
                            width: '100vw',
                        },
                        [breakpoints.only('pixel5')]: {
                            top: '139px',
                            height: '170px',
                            width: '100vw',
                        },
                        [breakpoints.only('samsungGalaxyS8')]: {
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
    [breakpoints.only('iPadMini')]: {
        fontSize: '40px',
    },
    [breakpoints.only('surfacePro7')]: {
        fontSize: '44px',
    },
    [breakpoints.only('iphoneSE')]: {
        fontSize: '24px',
        lineHeight: '28px',
    },
    [breakpoints.only('iphoneXR')]: {
        fontSize: '28px',
        lineHeight: '28px',
    },
    [breakpoints.only('iphone12Pro')]: {
        fontSize: '24px',
        lineHeight: '28px',
    },
    [breakpoints.only('pixel5')]: {
        fontSize: '24px',
        lineHeight: '28px',
    },
    [breakpoints.only('samsungGalaxyS8')]: {
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
    [breakpoints.only('surfacePro7')]: {
        fontSize: '20px',
        lineHeight: '24px',        
    },
    [breakpoints.only('iphoneSE')]: {
        fontSize: '14px',
        lineHeight: '17px',
        letterSpacing: '2.3625px',
    },
    [breakpoints.only('iphoneXR')]: {
        fontSize: '18px',
        lineHeight: '17px',
        letterSpacing: '2.3625px',
    },
    [breakpoints.only('iphone12Pro')]: {
        fontSize: '14px',
        lineHeight: '17px',
        letterSpacing: '2.3625px',
    },
    [breakpoints.only('pixel5')]: {
        fontSize: '14px',
        lineHeight: '17px',
        letterSpacing: '2.3625px',
    },
    [breakpoints.only('samsungGalaxyS8')]: {
        fontSize: '14px',
        lineHeight: '17px',
        letterSpacing: '2.3625px',
    },
}

theme.typography.p = {
    fontFamily: 'Barlow',
    fontStyle: 'normal',
    fontWeight: 400,
    width: '444px',
    fontSize: '18px',
    lineHeight: '32px',
    color: '#D0D6F9',
    mixBlendMode: 'difference',
    [breakpoints.only('surfacePro7')]: {
        fontSize: '20px',
        lineHeight: '40px',
    },
    [breakpoints.only('iphoneSE')]: {
        fontSize: '15px',
        lineHeight: '25px',
        fontWeight: 400,
    },
    [breakpoints.only('iphoneXR')]: {
        fontSize: '16px',
        lineHeight: '30px',
        fontWeight: 400,
    },
    [breakpoints.only('iphone12Pro')]: {
        fontSize: '15px',
        lineHeight: '30px',
        fontWeight: 400,
    },
    [breakpoints.only('pixel5')]: {
        fontSize: '15px',
        lineHeight: '30px',
        fontWeight: 400,
    },
    [breakpoints.only('samsungGalaxyS8')]: {
        fontSize: '15px',
        lineHeight: '30px',
        fontWeight: 400,
    },
}


export default theme;