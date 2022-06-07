import { createTheme } from '@mui/material/styles';
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';
import desktopBackgroundImage from '../../assets/technology/background-technology-desktop.jpg';
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
                        fontSize: '28px'
                    }
                },
                {
                    props: {
                        variant: '03'
                    },
                    style: {
                        position: 'absolute',
                        color: 'white',
                        width: '305px',
                        height: '34px',
                        top: '212px',
                        left: '166.5px',
                        // right: '90.16%',
                        fontSize: '28px',
                        letterSpacing: '4.725px',
                        opacity: '0.25',
                    }
                },
                {
                    props: {
                        variant: 'title'
                    },
                    style: {
                        position: 'absolute',
                        color: '#FFFFFF',
                        height: '34px',
                        top: '212px',
                        left: '17.7%',
                        right: '2.3%',
                        fontSize: '28px',
                        letterSpacing: '4.725px',
                        lineHeight: '34px'
                    }
                },
            ],
        },
    }
})

export default theme;