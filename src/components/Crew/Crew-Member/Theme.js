import { createTheme } from '@mui/material/styles';
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';


const customBreakpointValues = {
    values: {
        xs: 0,
        galaxyFold: 280,
        samsungGalaxyS8: 360,
        iphoneSE: 375,
        iphone12Pro: 390,
        pixel5: 392,
        samsungGalaxyS20: 412,
        iphoneXR: 414,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
        mobile: 420,
        tablet: 821,
        smTablet: 700,
        desktop: 1200,
        // xl: 1680,
    },
}

const breakpoints = createBreakpoints({ ...customBreakpointValues })

const theme = createTheme({
    typography: {
        subHeading: {
            fontSize: '1.8em',
            fontFamily: 'Bellefair',
            color: ' #979797',
            [breakpoints.down('mobile')]: {
                textAlign: 'center',
                fontSize: '1em'
            },
        },

    },
    breakpoints: {
        ...customBreakpointValues,
    },
    components: {
        MuiGrid: {
            variants: [
                {
                    props: {
                        variant: 'crew'
                    },
                    style: {
                        width: 'auto',
                        height: "90vh",
                        marginLeft: "5rem",
                        [breakpoints.down('tablet')]: {
                            height: "80vh",
                            display: 'grid',
                            gridTemplateRows: '40% 61%',
                            marginLeft: 0,
                        },
                        [breakpoints.down('mobile')]: {
                            marginLeft: 0,
                            height: "35vh",
                            display: 'flex'
                        },
                    }
                },
                {
                    props: {
                        variant: 'crewmate-info'
                    },
                    style: {
                        display: 'block',
                        marginTop: '5%',
                        gridTemplateRows: '5% 15% 25% 10%',
                        [breakpoints.down('tablet')]: {
                            display: 'block',
                            marginTop: '0',
                            textAlign: 'center',
                            height: '0'
                        },
                        [breakpoints.down('mobile')]: {
                            order: '2',
                            display: 'flex',
                            flexDirection: 'column'
                        },
                    }
                },
                {
                    props: {
                        variant: 'crewmate-description'
                    },
                    style: {
                        marginBottom: "10%",
                        marginLeft: "0",
                        marginRight: "0",
                        [breakpoints.down('tablet')]: {
                            textAlign: 'center',
                            marginLeft: "10%",
                            marginRight: "10%",
                            marginBottom: "5%",
                        },
                        [breakpoints.down('mobile')]: {
                            textAlign: 'center',
                            marginLeft: "0%",
                            marginRight: "0%",
                            marginBottom: "0%",
                            order: '4'
                        },
                    }
                },
                {
                    props: {
                        variant: 'slides'
                    },
                    style: {
                        [breakpoints.down('tablet')]: {
                            textAlign: 'center',
                            marginLeft: "40%",
                            marginRight: "40%",
                            marginTop: "5%",
                            marginBottom: "5%",
                            maxWidth: "100%",
                        },
                        [breakpoints.down('mobile')]: {
                            order: '1',
                            marginLeft: "0%",
                            marginRight: "0%",
                            marginTop: "10%",
                            marginBottom: "10%",
                        },
                    }
                },
                {
                    props: {
                        variant: 'crewmate-picture'
                    },
                    style: {
                        height: "inherit",
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        [breakpoints.down('tablet')]: {
                            backgroundPosition: 'center',
                            height: 'auto'
                        },
                        [breakpoints.down('mobile')]: {
                            order: '1',
                            height: '40vh',
                            borderBottom: '1px double #D0D6F9'
                        },
                    }
                },
                {
                    props: {
                        variant: 'crewmate-role'
                    },
                    style: {
                        [breakpoints.down('mobile')]: {
                            order: '2'
                        },
                    }
                },
                {
                    props: {
                        variant: 'crewmate-name'
                    },
                    style: {
                        [breakpoints.down('mobile')]: {
                            order: '3'
                        },
                    }
                },
            ]
        },
        MuiBox: {
            variants: [
                {
                    props: {
                        variant: 'image'
                    },
                    style: {
                        height: "inherit",
                        [breakpoints.down('tablet')]: {
                            textAlign: 'left'
                        },
                    }
                },
            ]
        },
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: '02'
                    },
                    style: {
                        color: 'rgba(225, 225, 225, 1)',
                        opacity: '0.3',
                        fontFamily: 'Barlow Condensed',
                        fontWeight: 700,
                        fontStyle: 'normal',
                        letterSpacing: '.294em',
                        fontSize: '1.75em',
                        marginLeft: "5rem",
                        [breakpoints.down('tablet')]: {
                            marginLeft: 0,
                            fontSize: '1.25em',
                        },
                        [breakpoints.down('mobile')]: {
                            marginLeft: 0,
                            fontSize: '1em',
                            letterSpacing: '.169em',
                        },
                    }
                },
                {
                    props: {
                        variant: 'meetYourCrew'
                    },
                    style: {
                        color: '#FFFFFF',
                        fontFamily: 'Barlow Condensed',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        letterSpacing: '.294em',
                        fontSize: '1.75em',
                        textTransform: 'uppercase',
                        marginLeft: '1.7rem',
                        [breakpoints.down('tablet')]: {
                            fontSize: '1.25em',
                            marginLeft: '1.188em'
                        },
                        [breakpoints.down('mobile')]: {
                            fontSize: '1.2em',
                            marginLeft: '1.25em',
                            letterSpacing: '.169em',
                        },
                    }
                }
            ]
        },


    }
})

theme.typography.h3 = {
    marginTop: '0.5em',
    marginBottom: ' 0.5em',
    [breakpoints.down('tablet')]: {
        fontSize: '46px'
    },
    [breakpoints.down('mobile')]: {
        textAlign: 'center',
        fontSize: '1.6em'
    },
}
theme.typography.h5 = {
    color: '#FFFFFF',
    fontFamily: 'Barlow Condensed',
    fontWeight: '400',
    fontStyle: 'normal',
    letterSpacing: '.294em',
    margin: "1em 1em 2em 0em",
    [breakpoints.down('tablet')]: {
        marginLeft: "1em"
    },
    [breakpoints.down('mobile')]: {
        textAlign: 'center',
        fontSize: '1.2em'
    },
}
theme.typography.paragraph = {
    fontSize: '1.125em',
    fontFamily: 'Barlow, sans-serif',
    lineHeight: '32px',
    color: '#D0D6F9',
    mixBlendMode: 'difference',
    [breakpoints.down('tablet')]: {
        textAlign: 'center',
        fontSize: '1em'
    },
    [breakpoints.down('mobile')]: {
        lineHeight: 1,
        textAlign: 'center',
        fontSize: '0.8em'
    },
    [breakpoints.only('iphoneSE')]: {
        lineHeight: 1,
        textAlign: 'center',
        fontSize: '0.8em'
    },
    [breakpoints.only('iphoneXR')]: {
        lineHeight: 3,
        textAlign: 'center',
        fontSize: '0.8em'
    },
    [breakpoints.only('iphone12Pro')]: {
        lineHeight: 2,
        textAlign: 'center',
        fontSize: '0.8em'
    },
    [breakpoints.only('pixel5')]: {
        lineHeight: 2.5,
        textAlign: 'center',
        fontSize: '0.8em'
    },
    [breakpoints.only('samsungGalaxyS8')]: {
        lineHeight: 1.8,
        textAlign: 'center',
        fontSize: '0.8em'
    },
    [breakpoints.only('samsungGalaxyS20')]: {
        lineHeight: 3,
        textAlign: 'center',
        fontSize: '0.8em'
    },
}

export default theme;