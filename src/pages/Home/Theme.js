import { createTheme } from '@mui/material/styles';
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';
import desktopBackgroundImage from '../../assets/home/background-home-desktop.jpg';
import tabletBackgroundImage from '../../assets/home/background-home-tablet.jpg';

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
                        [breakpoints.down('desktop')]: {
                            top: '202px'
                        },
                        [breakpoints.only('surfacePro7')]: {
                            textAlign: 'center',
                            width: '464px',
                            height: '276px',
                            top: '295px',
                            left: '228px',
                        },
                        [breakpoints.only('iPadAir')]: {
                            textAlign: 'center',
                            width: '464px',
                            left: '178px',
                        },
                        [breakpoints.only('iphoneXR')]: {
                            textAlign: 'center',
                            width: '350px',
                            height: '276px',
                            top: '112px',
                            left: '32px',
                        },
                        [breakpoints.only('iphoneSE')]: {
                            textAlign: 'center',
                            width: '327px',
                            height: '276px',
                            top: '53px',
                            left: '24px',
                        },
                        [breakpoints.only('iphone12Pro')]: {
                            textAlign: 'center',
                            width: '327px',
                            height: '276px',
                            top: '100px',
                            left: '31px',
                        },
                        [breakpoints.only('pixel5')]: {
                            textAlign: 'center',
                            width: '327px',
                            height: '276px',
                            top: '100px',
                            left: '33px',
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
                        [breakpoints.down('desktop')]: {
                            left: '263px', 
                            top: '292px',
                        },
                        [breakpoints.only('surfacePro7')]: {
                            width: '274px',
                            height: '274px',
                            top: '540px',
                            left: '320px',
                        },
                        [breakpoints.only('iPadAir')]: {
                            left: '273px',
                        },
                        [breakpoints.only('iphoneXR')]: {
                            width: '150px',
                            height: '150px',
                            // top: '200px',
                            left: '132px',
                            fontSize: '20px',
                            lineHeight: '22.92px', 
                            letterSpacing: '1.25px',
                        },
                        [breakpoints.only('iphoneSE')]: {
                            width: '150px',
                            height: '150px',
                            left: '112px',
                            top: '110px',
                            fontSize: '20px',
                            lineHeight: '22.92px', 
                            letterSpacing: '1.25px',
                        },
                        [breakpoints.only('iphone12Pro')]: {
                            width: '150px',
                            height: '150px',
                            left: '120px',
                            top: '250px',
                            fontSize: '20px',
                            lineHeight: '22.92px', 
                            letterSpacing: '1.25px',
                        },
                        [breakpoints.only('pixel5')]: {
                            width: '150px',
                            height: '150px',
                            left: '121px',
                            top: '250px',
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
    [breakpoints.down('desktop')]: {
        display: 'flex',
        justifyContent: 'center',
    },
    [breakpoints.only('iphoneXR')]: {
        fontSize: '80px',
        lineHeight: '100px'
    },
    [breakpoints.only('iphoneSE')]: {
        fontSize: '80px',
        lineHeight: '100px'
    },
    [breakpoints.only('iphone12Pro')]: {
        fontSize: '80px',
        lineHeight: '100px'
    },
    [breakpoints.only('pixel5')]: {
        fontSize: '80px',
        lineHeight: '100px'
    },
}

theme.typography.h5 = {
    // right: '5%',
    [breakpoints.down('desktop')]: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: '20px',
    },
    [breakpoints.only('surfacePro7')]: {
        fontSize: '20px',
    },
    [breakpoints.down('iphoneXR')]: {
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
    [breakpoints.down('desktop')]: {
        fontFamily: 'Barlow',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: '16px',
        color: '#D0D6F9',
        lineHeight: '28px',
    [breakpoints.down('iphoneXR')]: {
        fontSize: '15px',
        lineHeight: '25px'
    },
    [breakpoints.only('iphoneSE')]: {
        fontSize: '15px',
        lineHeight: '25px',
        // width: '327px'
    },
    },
}


export default theme;