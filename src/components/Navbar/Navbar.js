import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Menu from "@mui/icons-material/Menu";
import MenuItem from '@mui/material/MenuItem';
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import NavLogo from '../../assets/shared/logo.svg'

// install material ui icons for imports below
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';


function NavBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position='static' sx={{ marginTop: '40px' }}>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Icon sx={{ display: { xs: 'flex', md: 'flex'}, ml: 2 }} >
                        <img src={NavLogo} />
                    </Icon>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        {/* <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton> */}
                        <Menu
                            id="menu-appbar"
                            // anchorEl={anchorElNav}
                            // anchorOrigin={{
                            //     vertical: 'bottom',
                            //     horizontal: 'left',
                            // }}
                            // keepMounted
                            // transformOrigin={{
                            //     vertical: 'top',
                            //     horizontal: 'left',
                            // }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}><Link to="/">00 Home</Link></MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}><Link to="/destination">01 Destination</Link></MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}><Link to="/crew">02 Crew</Link></MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}><Link to="/technology">03 Technology</Link></MenuItem>
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                        <Button component={Link} to="/" sx={{ my: 2, color: 'white', display: 'block' }} >00 Home</Button>
                        <Button component={Link} to="/destination" sx={{ my: 2, color: 'white', display: 'block' }}>01 Destination</Button>
                        <Button component={Link} to="/crew" sx={{ my: 2, color: 'white', display: 'block' }}>02 Crew</Button>
                        <Button component={Link} to="/technology" sx={{ my: 2, color: 'white', display: 'block' }}>03 Technology</Button>

                        {/* <Link onClick={handleCloseNavMenu} to="/">00 Home</Link>
                        <Link onClick={handleCloseNavMenu} to="/destination">01 Destination</Link>
                        <Link onClick={handleCloseNavMenu} to="/crew">02 Crew</Link>
                        <Link onClick={handleCloseNavMenu} to="/technology">03 Technology</Link> */}

                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )
};

export default NavBar;