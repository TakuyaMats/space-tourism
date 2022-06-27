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
                        variant: 'img-info-parent'
                    },
                    style: {
                        margin: 'auto',
                        display: 'flex',
                        flexWrap: 'wrap',
                        padding: '0',
                        // margin: '0',
                        // minWidth: '5em',
                        maxWidth: '90em',
                        // marginLeft: '30em'
                        // flexWrap: 'wrap',
                        [breakpoints.only('iphoneSE')]: {
                           display: 'flex'
                        },
                    }
                },
                {
                    props: {
                        variant: 'image'
                    },
                    style: {

                        display: 'flex',
                        margin: 'auto',
                        left: '10em',
                        // postion: 'absolute',
                        // marginLeft: '14.375em',
                        // width: '27.8em',
                        // width: '10em',
                        // minWidth: '10em',
                        maxWidth: '27.8em',
                        // maxheight: '27.8em',
                        // height: '27.8em',
                        // --------------------------------

                        [breakpoints.only('surfacePro7')]: {
                            padding: '0',
                            // width: '23em',
                            // height: '19.5em',
                            left: '.5em',
                            // margin: 'auto',
                        },
                        [breakpoints.only('iPadAir')]: {
                            // padding: '0',
                            display: 'flex',
                            // width: '10em',
                            height: '26em',
                            // margin: 'auto',
                            marginBottom: '.7em'
                        },
                        [breakpoints.only('iPadMini')]: {
                            display: 'flex',
                            // padding: '0',
                            width: '19em',
                            height: '18em',
                            // margin: 'auto',
                            marginBottom: '1.5rem',
                            // position: 'relative'
                        },
                        [breakpoints.only('iphoneSE')]: {
                            margin: 'auto',
                            justifyContent: 'center',
                            // position: 'absolute',
                            // padding: '0',
                            height: '12em',
                            // marginBottom: '1.4em',
                            // width: '10.7em',
                            // top: '8em',
                            // left: '6.5em',
                        },
                        [breakpoints.only('iphoneXR')]: {
                            justifyContent: 'center',
                            margin: 'auto',
                            // position: 'absolute',
                            height: '13em',
                            padding: '0',
                            // width: '10.7em',
                            // top: '8.5em',
                            // left: '6.438em',
                            // right: '7.5em',
                        },
                        [breakpoints.only('iphone12Pro')]: {
                            justifyContent: 'center',
                            margin: 'auto',
                            // position: 'absolute',
                            padding: '0',
                            height:'13em',
                            // width: '10em',
                            // top: '8em',
                            // left: '5.2em',
                            // right: '6.2em',
                        },
                        [breakpoints.only('samsungGalaxyS8')]: {
                            justifyContent: 'center',
                            margin: 'auto',
                            // position: 'absolute',
                            // padding: '0',
                            height: '13em'
                            // width: '12em',
                            // top: '8em',
                            // left: '5.2em',
                            // right: '6.2em',
                        },
                        [breakpoints.only('samsungGalaxyS20')]: {
                            justifyContent: 'center',
                            margin: 'auto',
                            // position: 'absolute',
                            padding: '0',
                            height: '14em',
                            // top: '8.5em',
                            // left: '6.5em',
                            // right: '6.2em',
                        },
                        [breakpoints.only('pixel5')]: {
                            justifyContent: 'center',
                            margin: 'auto',
                            height: '12em',
                            // position: 'absolute',
                            padding: '0',
                            // width: '12em',
                            // top: '8em',
                            // left: '5.2em',
                            // right: '6.2em',
                        },
                    }
                },
                {
                    props: {
                        variant: 'info'
                    },
                    style: {
                        // display: 'block',
                        display: 'flex',
                        // margin: 'auto',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        width: '33em',
                        // position: 'relative',
                        // marginLeft: '38em',
                        // left: '11em',
                        // bottom: '30em',
                        // height: '30em',
                        [breakpoints.only('surfacePro7')]: {
                            margin: 'auto',
                            padding: '0',
                            // position: 'absolute',
                            width: '45em',
                            textAlign: 'center',
                            left: '6.1em',
                            top: '57em'
                        },
                        [breakpoints.only('iPadAir')]: {
                            margin: 'auto',
                            padding: '0',
                            // display: 'flex',
                            position: 'static',
                            width: '40em',
                            textAlign: 'center',
                        },
                        [breakpoints.only('iPadMini')]: {
                            margin: 'auto',
                            padding: '0',
                            // position: 'static',
                            width: '40em',
                            textAlign: 'center',

                            // marginLeft: '4em'

                        },
                        [breakpoints.only('iphoneSE')]: {
                            justifyContent: 'center',
                            // position: 'absolute',
                            margin: '0',
                            padding: '0',
                            height: '28em',
                            // width: '40em',
                            // top: '26.5em',
                            // bottom: '0em',
                            textAlign: 'center',
                            // left: '.5em',
                        },
                        [breakpoints.only('iphoneXR')]: {
                            justifyContent: 'center',
                            // position: 'absolute',
                            margin: 'auto',
                            padding: '0',
                            top: '10.75em',
                            // bottom: '0em',
                            textAlign: 'center',
                            // left: '.5em',
                        },
                        [breakpoints.only('iphone12Pro')]: {
                            // position: 'absolute',
                            margin: 'auto',
                            padding: '0',
                            // top: '11.3em',
                            // bottom: '0em',
                            textAlign: 'center',
                            // left: '-.25em'
                        },
                        [breakpoints.only('samsungGalaxyS8')]: {
                            justifyContent: 'center',
                            // position: 'absolute',
                            margin: 'auto',
                            padding: '0',
                            // top: '25em',
                            // bottom: '0em',
                            textAlign: 'center',
                            // left: '-1.35em'
                        },
                        [breakpoints.only('samsungGalaxyS20')]: {
                            justifyContent: 'center',
                            // position: 'absolute',
                            margin: 'auto',
                            padding: '0',
                            // top: '11.3em',
                            // bottom: '0em',
                            textAlign: 'center',

                            // left: '.3em'

                        },
                        [breakpoints.only('pixel5')]: {
                            justifyContent: 'center',
                            // position: 'absolute',
                            margin: 'auto',
                            padding: '0',
                            // top: '11.3em',
                            // bottom: '0em',
                            textAlign: 'center',
                            // left: '-.25em'
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
                        [breakpoints.only('surfacePro7')]: {
                            marginTop: '-1.25em'
                        },
                        [breakpoints.only('iPadMini')]: {
                            // marginTop: '-1em'
                        },
                        [breakpoints.only('iphoneSE')]: {
                            justifyContent: 'center',
                            marginTop: '1em',
                            // width: '61%',
                            // paddingTop: '.5em',
                            marginLeft: '.5em',
                        },
                        [breakpoints.only('iphoneXR')]: {
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: '2em',
                            paddingTop: '2em',
                            // marginLeft: '.5em',
                            // width: '70%',
                        },
                        [breakpoints.only('iphone12Pro')]: {
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: '2em',
                            paddingTop: '2em',
                            // marginLeft: '.5em',
                            width: '70%',
                        },
                        [breakpoints.only('samsungGalaxyS8')]: {
                            marginTop: '1em',
                            // width: '61%',
                            // paddingTop: '.5em',
                            // marginLeft: '2em',
                        },
                        [breakpoints.only('samsungGalaxyS20')]: {
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: '2em',
                            // paddingTop: '2em',
                            // marginLeft: '.5em',
                            width: '70%',
                        },
                        [breakpoints.only('pixel5')]: {
                            display: 'flex',
                            flexDirection: 'column',
                            // marginTop: '2em',
                            // paddingTop: '2em',
                            // marginLeft: '.5em',
                            // width: '70%',
                        },
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
                        [breakpoints.only('iphoneXR')]: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: '1.5em'
                        },
                        [breakpoints.only('iphone12Pro')]: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: '1.1em'
                        },
                        [breakpoints.only('samsungGalaxyS8')]: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        },
                        [breakpoints.only('samsungGalaxyS20')]: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: '1.1em'
                        },
                        [breakpoints.only('pixel5')]: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: '1.1em'
                        },
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
                        paddingLeft: 0,
                        [breakpoints.only('iphoneXR')]: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        },
                        [breakpoints.only('iphone12Pro')]: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        },
                        [breakpoints.only('samsungGalaxyS8')]: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        },
                        [breakpoints.only('samsungGalaxyS20')]: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        },
                        [breakpoints.only('pixel5')]: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        },
                    }
                },
                {
                    props: {
                        variant: 'destTabs'
                    },
                    style: {
                        overflow: 'auto',
                        [breakpoints.only('surfacePro7')]: {
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: '2em',
                            width: '30em',
                            fontSize: '1em'
                        },
                        [breakpoints.only('iPadAir')]: {
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '1em',
                            marginBottom: '2em'
                        },
                        [breakpoints.only('iPadMini')]: {
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: '1em',
                        },
                        [breakpoints.only('iphoneSE')]: {
                            display: 'flex',
                            justifyContent: 'center',
                            width: '21em',
                            marginLeft: '.8em',
                        },
                        [breakpoints.only('iphoneXR')]: {
                            // marginTop: '3em',
                            display: 'flex',
                            justifyContent: 'center',
                            width: '25em',
                            // marginLeft: '.1em',
                        },
                        [breakpoints.only('iphone12Pro')]: {
                            marginTop: '3.2em',
                            display: 'flex',
                            justifyContent: 'center',
                            width: '25em',
                            marginLeft: '.1em',
                        },
                        [breakpoints.only('samsungGalaxyS8')]: {
                            // marginTop: '3.2em',
                            display: 'flex',
                            justifyContent: 'center',
                            width: '22em',
                            // marginLeft: '.1em',
                        },
                        [breakpoints.only('samsungGalaxyS20')]: {
                            // marginTop: '3.2em',
                            display: 'flex',
                            justifyContent: 'center',
                            // width: '25em',
                            marginLeft: '.1em',
                        },
                        [breakpoints.only('pixel5')]: {
                            marginTop: '3.2em',
                            display: 'flex',
                            justifyContent: 'center',
                            // width: '25em',
                            // marginLeft: '.1em',
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
                        // display: 'block',
                        display: 'flex',
                        // justifyContent: 'center',
                        fontFamily: 'Bellefair',
                        fontSize: '6.25em',
                        fontWeight: '400',
                        color: 'rgba(255, 255, 255, 1)',
                        [breakpoints.only('surfacePro7')]: {
                            fontSize: '6em',
                            justifyContent: 'center',
                        },
                        [breakpoints.only('iPadAir')]: {
                            fontSize: '5.5em',

                            justifyContent: 'center',
                            marginTop: '-.3em'

                        },
                        [breakpoints.only('iPadMini')]: {
                            fontSize: '5.5em',
                            justifyContent: 'center',

                        },
                        [breakpoints.only('iphoneSE')]: {
                            justifyContent: 'center',
                            fontSize: '3em',
                            lineHeight: '.8em',
                            // width: '6.5em',
                        },
                        [breakpoints.only('iphoneXR')]: {
                            justifyContent: 'center',
                            marginTop: '.2em',
                            fontSize: '3.5em',
                            lineHeight: '.8em',
                            // width: '6.3em',
                        },
                        [breakpoints.only('iphone12Pro')]: {
                            justifyContent: 'center',
                            marginTop: '.2em',
                            fontSize: '3.5em',
                            lineHeight: '.8em',
                            width: '6.3em',
                        },
                        [breakpoints.only('samsungGalaxyS8')]: {
                            justifyContent: 'center',
                            marginTop: '.2em',
                            fontSize: '3.5em',
                            lineHeight: '.8em',
                            // width: '6.3em',
                        },
                        [breakpoints.only('samsungGalaxyS20')]: {
                            justifyContent: 'center',
                            marginTop: '.2em',
                            fontSize: '3.5em',
                            lineHeight: '.8em',
                            // width: '6.3em',
                        },
                        [breakpoints.only('pixel5')]: {
                            justifyContent: 'center',
                            marginTop: '.2em',
                            fontSize: '3.5em',
                            lineHeight: '.8em',
                            width: '6.3em',
                        },
                    }
                },
                {
                    props: {
                        variant: 'desc'
                    },
                    style: {

                        display: 'flex', //display: block

                        justifyContent: 'center',
                        fontFamily: 'Barlow',
                        fontSize: '1.12em',
                        fontWeight: '400',
                        color: 'rgba(208, 214, 249, 1)',
                        lineHeight: '178%',
                        marginTop: '14px',
                        marginBottom: '3.375em',
                        [breakpoints.only('surfacePro7')]: {
                            fontSize: '1.5em',
                            display: 'flex',
                            textAlign: 'center',
                            marginBottom: '3.5em',
                        },
                        [breakpoints.only('iPadAir')]: {
                            display: 'flex',
                            textAlign: 'center',
                            marginBottom: '3.5em',
                        },
                        [breakpoints.only('iPadMini')]: {
                            display: 'flex',
                            textAlign: 'center',
                            marginBottom: '3.5em',
                        },
                        [breakpoints.only('iphoneSE')]: {
                            fontSize: '.938em',
                            marginBottom: '1em',
                            // width: '20.4em',
                            lineHeight: '167%',
                        },
                        [breakpoints.only('iphoneXR')]: {
                            display: 'flex',
                            marginTop: '1em',
                            // textAlign: 'center',
                            // marginLeft: '1em',
                            fontSize: '.938em',
                            marginBottom: '1em',
                            // width: '21.4em',
                            lineHeight: '167%',
                        },
                        [breakpoints.only('iphone12Pro')]: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            // marginTop: '1em',
                            // marginLeft: '1em',
                            fontSize: '.938em',
                            // marginBottom: '1em',
                            // width: '21.4em',
                            lineHeight: '167%',
                        },
                        [breakpoints.only('samsungGalaxyS8')]: {
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '1em',
                            // marginLeft: '1em',
                            fontSize: '.938em',
                            marginBottom: '1em',
                            // width: '21.4em',
                            // lineHeight: '167%',
                        },
                        [breakpoints.only('samsungGalaxyS20')]: {
                            justifyContent: 'center',
                            marginTop: '1em',
                            // marginLeft: '1em',
                            fontSize: '.95em',
                            marginBottom: '1em',
                            // width: '21.4em',
                            lineHeight: '167%',
                        },
                        [breakpoints.only('pixel5')]: {
                            marginTop: '1em',
                            marginLeft: '1em',
                            fontSize: '.938em',
                            marginBottom: '1em',
                            width: '21.4em',
                            lineHeight: '167%',
                        },
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
                        textTransform: 'uppercase',
                        [breakpoints.only('surfacePro7')]: {
                            display: 'flex',
                            justifyContent: 'center',
                            fontSize: '2em',
                            marginTop: '1em',
                        },
                        [breakpoints.only('iphoneSE')]: {
                            display: 'flex',
                            justifyContent: 'center',
                            margin: 'auto',
                            fontSize: '1.5em',
                        },
                        [breakpoints.only('iphoneXR')]: {
                            display: 'flex',
                            justifyContent: 'center',
                            margin: 'auto',
                            fontSize: '1.75em',
                            fontWeight: '400'
                        },
                        [breakpoints.only('iphone12Pro')]: {
                            display: 'flex',
                            justifyContent: 'center',
                            margin: 'auto',
                            fontSize: '1.75em',
                            fontWeight: '400'
                        },
                        [breakpoints.only('samsungGalaxyS8')]: {
                            display: 'flex',
                            justifyContent: 'center',
                            margin: 'auto',
                            fontSize: '1.5em',
                            fontWeight: '400'
                        },
                        [breakpoints.only('samsungGalaxyS20')]: {
                            display: 'flex',
                            justifyContent: 'center',
                            margin: 'auto',
                            fontSize: '1.75em',
                            fontWeight: '400'
                        },
                        [breakpoints.only('pixel5')]: {
                            display: 'flex',
                            justifyContent: 'center',
                            margin: 'auto',
                            fontSize: '1.75em',
                            fontWeight: '400'
                        },
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
                        lineHeight: '2em',
                        textTransform: 'uppercase',
                        [breakpoints.only('surfacePro7')]: {
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '1em',
                            fontSize: '2em',
                        },
                        [breakpoints.only('iphoneSE')]: {
                            display: 'flex',
                            justifyContent: 'center',
                            margin: 'auto',
                            fontSize: '1.5em',
                        },
                        [breakpoints.only('iphoneXR')]: {
                            display: 'flex',
                            justifyContent: 'center',
                            margin: 'auto',
                            fontSize: '1.75em',
                        },
                        [breakpoints.only('iphone12Pro')]: {
                            display: 'flex',
                            justifyContent: 'center',
                            margin: 'auto',
                            fontSize: '1.75em',
                        },
                        [breakpoints.only('samsungGalaxyS8')]: {
                            display: 'flex',
                            justifyContent: 'center',
                            margin: 'auto',
                            fontSize: '1.5em',
                        },
                        [breakpoints.only('samsungGalaxyS20')]: {
                            display: 'flex',
                            justifyContent: 'center',
                            margin: 'auto',
                            fontSize: '1.75em',
                        },
                        [breakpoints.only('pixel5')]: {
                            display: 'flex',
                            justifyContent: 'center',
                            margin: 'auto',
                            fontSize: '1.75em',
                        },
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
                        [breakpoints.only('surfacePro7')]: {
                            marginTop: '1.5em',
                            marginLeft: '5.2em',
                            fontSize: '1.35em'
                        },
                        [breakpoints.only('iPadAir')]: {
                            marginLeft: '6.4em',
                        },
                        [breakpoints.only('iPadMini')]: {
                            marginLeft: '8em',
                        },
                        [breakpoints.only('iphoneSE')]: {
                            display: 'flex',
                            justifyContent: 'center',
                            margin: 'auto',
                            fontSize: '.875em',
                        },
                        [breakpoints.only('iphoneXR')]: {
                            width: '8em',
                            display: 'flex',
                            justifyContent: 'center',
                            margin: 'auto',
                            fontSize: '.875em',
                            letterSpacing: '.148em',
                        },
                        [breakpoints.only('iphone12Pro')]: {
                            width: '8em',
                            display: 'flex',
                            justifyContent: 'center',
                            margin: 'auto',
                            fontSize: '.875em',
                            letterSpacing: '.148em',
                        },
                        [breakpoints.only('samsungGalaxyS8')]: {
                            width: '8em',
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '1em',
                            fontSize: '.875em',
                            letterSpacing: '.148em',
                            
                        },
                        [breakpoints.only('samsungGalaxyS20')]: {
                            width: '8em',
                            display: 'flex',
                            justifyContent: 'center',
                            margin: 'auto',
                            fontSize: '.875em',
                            letterSpacing: '.148em',
                        },
                        [breakpoints.only('pixel5')]: {
                            width: '8em',
                            display: 'flex',
                            justifyContent: 'center',
                            margin: 'auto',
                            fontSize: '.875em',
                            letterSpacing: '.148em',
                        },
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
                        display: 'flex',
                        fontSize: '1em',
                        fontFamily: 'Barlow Condensed',
                        fontWeight: '400',
                        height: '1.1em',
                        lineHeight: '1.1em',
                        letterSpacing: '.169em',
                        [breakpoints.only('surfacePro7')]: {
                            fontSize: '1em',
                        },
                        [breakpoints.only('iphoneSE')]: {
                            justifyContent: 'center',
                            fontSize: '.875em',
                        },
                        [breakpoints.only('iphone12Pro')]: {
                            justifyContent: 'center',
                            fontSize: '.875em',
                        },
                        [breakpoints.only('samsungGalaxyS8')]: {
                            fontSize: '.875em',
                        },
                        [breakpoints.only('samsungGalaxyS20')]: {
                            fontSize: '.875em',
                        },
                        [breakpoints.only('pixel5')]: {
                            fontSize: '.875em',
                        },
                    },
                },
            },
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    "&.MuiTab-root": {
                        [breakpoints.only('iPadMini')]: {
                            minWidth: '6em',
                        },
                        [breakpoints.only('surfacePro7')]: {
                            minWidth: '7em',
                        },
                        [breakpoints.only('iphoneSE')]: {
                            minWidth: '2em',
                            maxWidth: '4em',
                        },
                        [breakpoints.only('iphoneXR')]: {
                            minWidth: '5em',
                        },
                        [breakpoints.only('iphone12Pro')]: {
                            minWidth: '5em',
                        },
                        [breakpoints.only('samsungGalaxyS8')]: {
                            minWidth: '4em',
                        },
                        [breakpoints.only('samsungGalaxyS20')]: {
                            minWidth: '5em',
                        },
                        [breakpoints.only('pixel5')]: {
                            minWidth: '5em',
                        },
                    }
                }
            }
        }
    },
})
export default theme;