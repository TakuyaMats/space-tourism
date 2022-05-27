import React from 'react';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

function Home() {
    return (
        <Box className="">
            <h1>Hi from Home</h1>
            {/* links to in NAVBAR COMPONENT, then NAVBAR COMPONENT to HOME */}
            {/* <Link to="/">Home</Link>
            <Link to="/destination"> Destination </Link>
            <Link to="/crew"> Crew </Link>
            <Link to="/technology"> Technology </Link> */}
        </Box>
    )
}

export default Home;