import React from 'react';
import { Link } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NavBar from '../../components/Navbar/Navbar';
import theme from './Theme';
import './Home.css';


function Home() {
    return (
        <ThemeProvider theme={theme}>
                <Paper variant="body1">
                <NavBar />
                    <Container variant="container1">
                        <Typography variant="h5">SO, YOU WANT TO TRAVEL TO</Typography>
                        <Typography variant="h1">SPACE</Typography>
                        <Typography variant="p">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</Typography>
                    </Container>
                    <Box className="btn-container">
                        <Button component={Link} to="/destination" variant="exploreBtn" className="explore-btn">EXPLORE</Button>
                    </Box>
                </Paper>
        </ThemeProvider>
    )
}

export default Home;