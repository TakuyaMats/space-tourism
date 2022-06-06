import { createTheme } from '@mui/material/styles';
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';

const customBreakpointValues = {
    values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
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
        tablet: 821,
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
        MuiGrid: {
            variants: [
                {
                    props: {
                        variant: 'crew'
                    },
                    style: {
                        height: "90vh",
                        [breakpoints.down('tablet')]: {

                        },
                    }

                },
                {
                    props: {
                        variant: 'crewmate-info'
                    },
                    style: {
                        [breakpoints.down('tablet')]: {
                            textAlign: 'center'
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
                            maxWidth: "100%",

                        },
                    }

                },
                {
                    props: {
                        variant: 'crewmate-picture'
                    },
                    style: {
                        height: "inherit",
                        [breakpoints.down('tablet')]: {
                            textAlign: 'center',

                        },
                    }

                },
            ]
        },
        MuiBox: {
            variants: [
                {
                    props: {
                        variant: 'title'
                    },
                    style: {
                        marginTop: "0px",
                        [breakpoints.down('tablet')]: {
                            textAlign: 'left'
                        },
                    }
                }
            ]
        }

    }
})

theme.typography.h3 = {
    marginTop: '0.5em',
    marginBottom: ' 0.5em',
    [breakpoints.down('tablet')]: {
        fontSize: '46px'
    },
}
theme.typography.h5 = {
    marginBottom: "4.5em",

    [breakpoints.down('tablet')]: {
        marginBottom: '2.5em',
        textAlign: 'left'
    },
}
theme.typography.paragraph = {
    fontSize: '16px',
    fontFamily: 'Barlow, sans-serif',
    lineHeight: '32px',
    color: '#D0D6F9',
    [breakpoints.down('tablet')]: {
        textAlign: 'center'
    },
}

export default theme;