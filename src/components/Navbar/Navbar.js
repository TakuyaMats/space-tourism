import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';

import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import NavLogo from '../../assets/shared/logo.svg'
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import CloseIcon from '@mui/icons-material/Close';

import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import { grey } from "@mui/material/colors";


const customBreakpointValues = {
    values: {
        xs: 0,
        sm: 375,
        md: 768,
        lg: 1440,
        xl: 1680,
    },
}

const breakpoints = createBreakpoints({ ...customBreakpointValues })

const theme = createTheme({
    breakpoints: {
        ...customBreakpointValues,
    },
    components: {
        MuiAppBar: {
            variants: [
                {
                    props: {
                        variant: 'body'
                    },
                    style: {
                        position: 'static',
                        backdropFilter: "blur(5px)",
                        backgroundColor: "transparent",
                        marginTop: 40,
                        [breakpoints.down('lg')]: {
                            minWidth: 100
                        },
                        [breakpoints.down('md')]: {

                            minWidth: 100
                        }
                    }
                }
            ]
        },
        MuiToolbar: {
            variants: [
                {
                    props: {
                        variant: 'toolbar'
                    },
                    style: {
                        height: '96px'
                    }
                }
            ]
        },
        MuiIcon: {
            variants: [
                {
                    props: {
                        variant: 'icon'
                    },
                    style: {
                        display: 'flex',
                        marginLeft: 55,
                        marginRight: 'auto',
                    }
                }
            ]
        },
        MuiButton: {
            variants: [
                {
                    props: {
                        variant: 'button'
                    },
                    style: {
                        color: 'white',
                        fontFamily: 'Barlow Condensed Regular',
                        fontSize: '16px',
                        wordSpacing: 2.7,
                        marginTop: 2,
                        display: 'flex',
                    }
                }
            ]
        },
        MuiButton: {
            variants: [
                {
                    props: {
                        variant: 'listbutton'
                    },
                    style: {
                        color: 'white',
                        fontFamily: 'Barlow Condensed Regular',
                        fontSize: '16px',
                        wordSpacing: 2.7,
                        marginTop: 2,
                        display: 'flex',
                    }
                }
            ]
        },

        MuiSvgIcon: {
            variants: [
                {
                    props: {
                        variant: 'burger-icon'
                    },
                    style: {
                        color: 'white'
                    }
                }
            ]
        },
        MuiButtonBase: {
            variants: [
                {
                    props: {
                        variant: 'close-icon'
                    },
                    style: { 
                        color: 'white'
                    }
                }
            ]
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    "&.MuiPaper-root": {
                        backgroundColor: 'transparent',
                        backdropFilter: "blur(3px)"
                    }
                }
            },
            variants: [
                {
                    props: {
                        variant: 'drawer'
                    },
                    style: {
                        backdropFilter: "blur(4px)",
                    }
                }
            ]
        }


    }
})





function NavBar() {

    const [open, setOpen] = useState(false)

    return (
        <ThemeProvider theme={theme}>
            <AppBar variant='body' >
                <Container>
                    <Toolbar variant='toolbar' disableGutters>
                        {/* SPACE ICON */}
                        <Icon variant='icon' >
                            <img src={NavLogo} />
                        </Icon>
                        {/* NAVBAR LINKS */}

                        <Container sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                            <Button
                                component={Link}
                                to="/"
                                variant="button"
                                className="on-hover"
                            >
                                00 Home
                            </Button>
                            <Button
                                component={Link}
                                to="/destination"
                                variant="button"
                                className="on-hover"
                            >
                                01 Destination
                            </Button>
                            <Button
                                component={Link}
                                to="/crew"
                                variant="button"
                                className="on-hover"
                            >
                                02 Crew
                            </Button>
                            <Button
                                component={Link}
                                to="/technology"
                                variant="button"
                                className="on-hover"
                            >
                                03 Technology
                            </Button>
                        </Container>

                        {/*  HAMBURGER MENU */}

                        <Container sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>

                            {/* hamburger menu button icon */}
                            <IconButton onClick={() => setOpen(true)}>
                                <MenuIcon variant='burger-icon' />
                            </IconButton>
                        </Container>
                    </Toolbar>
                </Container>

                <SwipeableDrawer
                    anchor='right'
                    open={open}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                    variant='drawer'
                >
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px'}}>
                        <IconButton sx={{ color: 'white' }} onClick={() => setOpen(false)}>
                            <CloseIcon/>
                        </IconButton>
                    </div>
                    <List >
                        <ListItem>
                            <Button
                                component={Link}
                                to="/"
                                variant='listbutton'
                            >
                                00 Home
                            </Button>
                        </ListItem>
                        <ListItem>
                            <Button
                                component={Link}
                                to="/destination"
                                variant='listbutton'
                            >
                                01 Destination
                            </Button>
                        </ListItem>
                        <ListItem>
                            <Button
                                component={Link}
                                to="/crew"
                                variant='listbutton'
                            >
                                02 Crew
                            </Button>
                        </ListItem>
                        <ListItem>
                            <Button
                                component={Link}
                                to="/technology"
                                variant='listbutton'
                            >
                                03 Technology
                            </Button>
                        </ListItem>
                    </List>
                </SwipeableDrawer>
            </AppBar>
        </ThemeProvider>
    )
};

export default NavBar;