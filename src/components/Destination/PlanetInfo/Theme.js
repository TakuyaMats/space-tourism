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
                        variant: 'imgInfo'
                    },
                    style: {
                        display: 'flex',
                        justifyContent: 'center',
                        // justifyContent: 'flex-end',
                        // margin: '0',
                        [breakpoints.down('desktop')]: {
                            borderStyle: 'dotted',
                            // display: 'flex',
                            // justifyContent: 'center',
                        },
                    }
                },
                {
                    props: {
                        variant: 'image'
                    },
                    style: {
                        // display: 'inline-block',
                        // justifyContent: 'center',
                        // postion: 'relative',
                        marginRight: '9.6em',
                        marginLeft: '14.3em',
                        // marginBottom: '7em',
                        marginTop: 'auto',
                        width: '27.8em',
                        height: '27.8em',
                    }
                },
                {
                    props: {
                        variant: 'info'
                    },
                    style: {
                        // display: 'block',
                        // justifyContent: 'flex-end',
                        // marginBottom: 'auto',
                        // borderStyle: 'groove', 
                        // borderColor: 'white', 
                        // borderWidth: '2px', 
                        // width: '27.8em', 
                        // height: '29.5em',
                       
                    }
                },
                {
                    props: {
                        variant: 'tabsContainer'
                    },
                    style: {

                        
                    }
                },
            ],
        },
        // MuiBox: {
        //     variants: [
        //         {
        //             props: {
        //                 variant: 'info'
        //             },
        //             style: {
        //                 marginBottom: 'auto',
        //                 // borderStyle: 'groove', 
        //                 // borderColor: 'white', 
        //                 // borderWidth: '2px', 
        //                 width: '27.8em', 
        //                 height: '29.5em',
        //                 [breakpoints.down('lg')]: {
        //                     borderStyle: 'dotted'
        //                 },
        //             }
        //         },
        //     ]
        // },
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'name'
                    },
                    style: {
                        display: 'block',
                        fontFamily: 'Bellefair',
                        fontSize: '6.25em',
                        fontWeight: '400',
                        color: '#FFFFFF'
                    }
                },
                {
                    props: {
                        variant: 'desc'
                    },
                    style: {
                        display: 'block',
                        fontFamily: 'Barlow',
                        fontSize: '1.12em',
                        fontWeight: '400',
                        color: '#FFFFFF',
                        lineHeight: '1.4em'
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
                        color: '#FFFFFF',
                        lineHeight: '2em'
                    }
                },
                {
                    props: {
                        variant: 'travel'
                    },
                    style: {
                        marginLeft: '4.9em',
                        fontFamily: 'Barlow',
                        fontSize: '1.75em',
                        fontWeight: '400',
                        color: '#FFFFFF',
                        lineHeight: '2em'
                    }
                }
            ]
        }
    },
})
export default theme;