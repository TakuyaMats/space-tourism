import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
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
import theme from './Theme';
import './Navbar.css'

function NavBar() {
    const [open, setOpen] = useState(false)

    return (
        <ThemeProvider theme={theme}>
            <AppBar variant='body'>
                <Container>
                    <Toolbar variant='toolbar' disableGutters>
                        <Icon variant='icon' >
                            <img src={NavLogo} alt='star'/>
                        </Icon>
                        <Container sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', alignItems: 'center', height: '100%' }}>
                            <div className="navbarBttnDiv">
                                <Button component={Link} to="/" variant="navbutton">
                                    00 Home
                                </Button>
                            </div>
                            <div className="navbarBttnDiv">
                                <Button component={Link} to="/destination" variant="navbutton">
                                    01 Destination
                                </Button>
                            </div>
                            <div className="navbarBttnDiv">
                                <Button component={Link} to="/crew" variant="navbutton">
                                    02 Crew
                                </Button>
                            </div>
                            <div className="navbarBttnDiv">
                                <Button component={Link} to="/technology" variant="navbutton">
                                    03 Technology
                                </Button>
                            </div>
                        </Container>
                        <Container sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
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
                >
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                        <IconButton sx={{ color: 'white' }} onClick={() => setOpen(false)}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <List >
                        <ListItem>
                            <Button component={Link} to="/" variant='listbutton'>
                                00 Home
                            </Button>
                        </ListItem>
                        <ListItem>
                            <Button component={Link} to="/destination" variant='listbutton'>
                                01 Destination
                            </Button>
                        </ListItem>
                        <ListItem>
                            <Button component={Link} to="/crew" variant='listbutton'>
                                02 Crew
                            </Button>
                        </ListItem>
                        <ListItem>
                            <Button component={Link} to="/technology" variant='listbutton'>
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