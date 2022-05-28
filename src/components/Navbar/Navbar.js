import React from "react";
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box';
// import NavLogo from '../../assets/shared/logo.svg'

function NavBar() {

    return (
        <div>
            <Box
                marginTop="40px"
                marginLeft="50px"
                width="830px"
                height="96px"
            >
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        // marginLeft: "507px"
                    }}
                >
                    <Link to="/">00 Home</Link>
                    <Link to="/destination">01 Destination </Link>
                    <Link to="/crew">02 Crew </Link>
                    <Link to="/technology">03 Technology </Link>
                </Stack>
            </Box>
        </div>
    )
};

export default NavBar;