import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

// import Box from "@mui/material/Box";
// import Menu from "@mui/icons-material/Menu";
// import MenuItem from '@mui/material/MenuItem';
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import NavLogo from '../../assets/shared/logo.svg'
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import CloseIcon from '@mui/icons-material/Close';
// install material ui icons for imports below
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';



function NavBar() {
    const [open, setOpen] = useState(false)


    return (
        <AppBar position='static' sx={{ marginTop: 4 }}>
            <Container maxWidth='lg'>
                <Toolbar disableGutters>

                    {/* SPACE ICON */}

                    <Icon sx={{ display: { xs: 'flex', md: 'flex' }, ml: 2, marginRight: 'auto' }} >
                        <img src={NavLogo} />
                    </Icon>

                    {/* NAVBAR LINKS */}

                    <Container sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                        <Button component={Link} to="/" sx={{ my: 2, color: 'white', display: 'block' }} >00 Home</Button>
                        <Button component={Link} to="/destination" sx={{ my: 2, color: 'white', display: 'block' }}>01 Destination</Button>
                        <Button component={Link} to="/crew" sx={{ my: 2, color: 'white', display: 'block' }}>02 Crew</Button>
                        <Button component={Link} to="/technology" sx={{ my: 2, color: 'white', display: 'block' }}>03 Technology</Button>
                    </Container>


                    {/*  HAMBURGER MENU */}


                    <Container sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>

                        {/* hamburger menu button icon */}
                        <IconButton onClick={() => setOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                        {/* */}
                    </Container>
                </Toolbar>
            </Container>

            <SwipeableDrawer
                anchor='right'
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)} >
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton onClick={() => setOpen(false)}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <List>
                    <ListItem>
                        <Button component={Link} to="/">
                            00 Home
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Button component={Link} to="/destination" >
                            01 Destination
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Button component={Link} to="/crew" >
                            02 Crew
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Button component={Link} to="/technology">
                            03 Technology
                        </Button>
                    </ListItem>
                </List>
            </SwipeableDrawer>
        </AppBar>
    )
};

export default NavBar;