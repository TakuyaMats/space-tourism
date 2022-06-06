import { createTheme } from '@mui/material/styles';
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';
import desktopBackgroundImage from '../../assets/crew/background-crew-desktop.jpg';
import tabletBackgroundImage from '../../assets/crew/background-crew-tablet.jpg';

const customBreakpointValues = {
    values: {
        xs: 0,
        // mobile
        // galaxyFold: 280,
        // samsungGalaxyS8: 360,
        // iphoneSE: 375,
        // iphone12Pro: 390,
        // pixel5: 392,
        // samsungGalaxyA51: 412,
        // samsungGalaxyS20: 412,
        // iphoneXR: 414,

        // tablet
        // surfaceDuo: 540,
        // iPadMini: 768,
        // iPadAir: 820,
        // surfacePro7: 912,
        tablet: 768,
        desktop: 1200,
        // xl: 1680,
    },
}

const breakpoints = createBreakpoints({ ...customBreakpointValues })

const theme = createTheme({
    breakpoints: {
        ...customBreakpointValues,
    },
    components: {
        MuiPaper: {
            variants: [{
                props: {
                    variant: 'body1'
                },
                style: {
                    backgroundImage: `url(${desktopBackgroundImage})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100vw",
                    height: "100vh",
                    position: "fixed",
                    [breakpoints.down('tablet')]: {
                        backgroundImage: `url(${tabletBackgroundImage})`
                    }
                }
            }
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
                        maxWidth: '1440px',
                        width: '100%',
                        marginLeft: 'auto',
                        boxSizing: 'border-box',
                        marginRight: 'auto',
                        display: 'block',
                        paddingLeft: '24px',
                        paddingRight: '24px',
                        [breakpoints.down('desktop')]: {
                            maxWidth: '900px'
                        }
                    },

                }
            ]
        }

    }
})

export default theme;