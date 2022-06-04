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
                        top: '325px',
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
    width: '470px',
    marginBottom: '11px',
    mixBlendMode: 'difference'
    // [breakpoints.down('desktop')]: {
    //     display: 'flex',
    //     justifyContent: 'center',
    // },
    // [breakpoints.only('iphoneXR')]: {
    //     fontSize: '80px',
    //     lineHeight: '100px'
    // },
    // [breakpoints.only('iphoneSE')]: {
    //     fontSize: '80px',
    //     lineHeight: '100px'
    // },
    // [breakpoints.only('iphone12Pro')]: {
    //     fontSize: '80px',
    //     lineHeight: '100px'
    // },
    // [breakpoints.only('pixel5')]: {
    //     fontSize: '80px',
    //     lineHeight: '100px'
    // },
    // [breakpoints.only('samsungGalaxyS8')]: {
    //     fontSize: '80px',
    //     lineHeight: '100px'
    // },
    // [breakpoints.only('samsungGalaxyS20')]: {
    //     fontSize: '80px',
    //     lineHeight: '100px'
    // },
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
    // height: '19px',
    // [breakpoints.down('desktop')]: {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     textAlign: 'center',
    //     fontSize: '20px',
    // },
    // [breakpoints.only('surfacePro7')]: {
    //     fontSize: '20px',
    // },
    // [breakpoints.down('iphoneXR')]: {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     fontSize: '16px',
    //     letterSpacing: '2.7px',
    //     lineHeight: '19px'
    // },
}

theme.typography.p = {
    fontFamily: 'Barlow',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '32px',
    color: '#D0D6F9',
    mixBlendMode: 'difference'
    // [breakpoints.down('desktop')]: {
    //     fontFamily: 'Barlow',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     textAlign: 'center',
    //     fontSize: '16px',
    //     color: '#D0D6F9',
    //     lineHeight: '28px',
    // [breakpoints.down('iphoneXR')]: {
    //     fontSize: '15px',
    //     lineHeight: '25px'
    // },
    // [breakpoints.only('iphoneSE')]: {
    //     fontSize: '15px',
    //     lineHeight: '25px',
    //     // width: '327px'
    // },
    // },
}


export default theme;