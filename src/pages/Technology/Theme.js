import { createTheme } from '@mui/material/styles';
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';
import desktopBackgroundImage from '../../assets/technology/background-technology-desktop.jpg';
import tabletBackgroundImage from '../../assets/technology/background-technology-tablet.jpg';
import mobileBackgroundImage from '../../assets/technology/background-technology-mobile.jpg';

const customBreakpointValues = {
    values: {
        xs: 0,
        // mobile
        galaxyFold: 280,
        samsungGalaxyS8: 360,
        iphoneSE: 375,
        iphone12Pro: 390,
        pixel5: 392,
        // not getting the exact media query point 412
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
        MuiPaper: {
            variants: [
                {
                    props: {
                        variant: 'body'
                    },
                    style: {
                        backgroundImage: `url(${desktopBackgroundImage})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        minWidth: '100%',
                        minHeight: '100%',
                        position: 'fixed',
                        overflow: 'auto',
                        [breakpoints.down('desktop')]: {
                            backgroundImage: `url(${tabletBackgroundImage})`,
                        },
                        [breakpoints.down('surfaceDuo')]: {
                            backgroundImage: `url(${mobileBackgroundImage})`,
                        },
                    }
                },
            ],
        },
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'title-container'
                    },
                    style: {
                        position: 'absolute',
                        color: 'white',
                        width: '305px',
                        minWidth: '305px',
                        height: '34px',
                        top: '212px',
                        left: '166.5px',
                        fontSize: '28px',
                    }
                },
                {
                    props: {
                        variant: '03'
                    },
                    style: {
                        position: 'absolute',
                        fontFamily: 'Barlow Condensed',
                        color: 'white',
                        width: '305px',
                        height: '34px',
                        top: '212px',
                        left: '166.5px',
                        // right: '90.16%',
                        fontSize: '28px',
                        letterSpacing: '4.725px',
                        opacity: '0.25',
                        [breakpoints.only('iPadAir')]: {
                            top: '136px',
                            fontSize: '20px',
                            left: '38px'
                        },
                        [breakpoints.only('iPadMini')]: {
                            top: '136px',
                            fontSize: '20px',
                            left: '38px'
                        },
                        [breakpoints.only('surfacePro7')]: {
                            top: '130px',
                            fontSize: '30px',
                            left: '38px',
                        },
                        [breakpoints.only('iphoneSE')]: {
                            top: '88px',
                            left: '100px',
                            fontSize: '16px',
                            letterSpacing: '2.7px',
                            lineHeight: '19px',
                            fontWeight: '700'
                        },
                        [breakpoints.only('iphoneXR')]: {
                            top: '88px',
                            left: '100px',
                            fontSize: '20px',
                            letterSpacing: '2.7px',
                            lineHeight: '19px',
                            fontWeight: '700'
                        },
                        [breakpoints.only('iphone12Pro')]: {
                            top: '88px',
                            left: '107px',
                            fontSize: '16px',
                            letterSpacing: '2.7px',
                            lineHeight: '19px',
                            fontWeight: '700'
                        },
                        [breakpoints.only('pixel5')]: {
                            top: '88px',
                            left: '97px',
                            fontSize: '20px',
                            letterSpacing: '2.7px',
                            lineHeight: '19px',
                            fontWeight: '700'
                        },
                        [breakpoints.only('samsungGalaxyS8')]: {
                            top: '88px',
                            left: '77px',
                            fontSize: '20px',
                            letterSpacing: '2.7px',
                            lineHeight: '19px',
                            fontWeight: '700'
                        },
                    }
                },
                {
                    props: {
                        variant: 'title'
                    },
                    style: {
                        position: 'absolute',
                        fontFamily: 'Barlow Condensed',
                        color: '#FFFFFF',
                        height: '34px',
                        top: '212px',
                        left: '17.7%',
                        right: '2.3%',
                        fontSize: '28px',
                        letterSpacing: '4.725px',
                        lineHeight: '34px',
                        [breakpoints.only('iPadAir')]: {
                            top: '136px',
                            fontSize: '20px',
                            left: '76px',
                            letterSpacing: '3.375px',
                            lineHeight: '24px',
                        },
                        [breakpoints.only('iPadMini')]: {
                            top: '136px',
                            fontSize: '20px',
                            left: '76px',
                            letterSpacing: '3.375px',
                            lineHeight: '24px',
                        },
                        [breakpoints.only('surfacePro7')]: {
                            top: '136px',
                            fontSize: '30px',
                            left: '86px',
                            letterSpacing: '3.375px',
                            lineHeight: '24px',
                        },
                        [breakpoints.only('iphoneSE')]: {
                            top: '88px',
                            left: '133px',
                            height: '19px',
                            fontSize: '16px',
                            letterSpacing: '2.7px',
                            lineHeight: '19px',
                            fontWeight: '400'
                        },
                        [breakpoints.only('iphoneXR')]: {
                            top: '88px',
                            left: '133px',
                            height: '19px',
                            fontSize: '20px',
                            letterSpacing: '2.7px',
                            lineHeight: '19px',
                            fontWeight: '400'
                        },
                        [breakpoints.only('iphone12Pro')]: {
                            top: '88px',
                            left: '140px',
                            height: '19px',
                            fontSize: '16px',
                            letterSpacing: '2.7px',
                            lineHeight: '19px',
                            fontWeight: '400'
                        },
                        [breakpoints.only('pixel5')]: {
                            top: '88px',
                            left: '130px',
                            height: '19px',
                            fontSize: '20px',
                            letterSpacing: '2.7px',
                            lineHeight: '19px',
                            fontWeight: '400'
                        },
                        [breakpoints.only('samsungGalaxyS8')]: {
                            top: '88px',
                            left: '110px',
                            height: '19px',
                            fontSize: '20px',
                            letterSpacing: '2.7px',
                            lineHeight: '19px',
                            fontWeight: '400'
                        },
                    }
                },
            ],
        },
    }
})

export default theme;