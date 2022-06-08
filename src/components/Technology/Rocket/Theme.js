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
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center',
                    [breakpoints.down('desktop')]: {
                        flexDirection: 'row',
                    },
                    [breakpoints.only('iPadAir')]: {
                        justifyContent: 'center',
                        marginTop: '130px',
                        marginLeft: '45px'
                    },
                }
            },
        },
        MuiTab: {
            variants: [
                {
                    props: {
                        variant: 'tab'
                    },
                    style: {
                        fontFamily: 'Bellefair',
                        fontSize: '24px',
                        color: '#0B0D17', 
                        marginBottom: '32px', 
                        backgroundColor: '#FFFFFF', 
                        borderRadius: '50%', 
                        width: '80px', 
                        height: '80px', 
                        mixBlendMode: 'difference',
                        [breakpoints.only('iPadAir')]: {
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
                    }
                }
            ]
        }
    },
})

theme.typography.h1 = {
    fontFamily: 'Bellefair',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '56px',
    lineHeight: '64px',
    color: '#FFFFFF',
    // width: '470px',
    marginBottom: '11px',
    mixBlendMode: 'difference',
    [breakpoints.only('iPadAir')]: {
        fontSize: '40px',
        // width: '420px'
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
    mixBlendMode: 'difference'
}

theme.typography.p = {
    fontFamily: 'Barlow',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '32px',
    color: '#D0D6F9',
    mixBlendMode: 'difference',
}


export default theme;