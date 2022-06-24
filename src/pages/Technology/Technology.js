import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import NavBar from '../../components/Navbar/Navbar';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import theme from './Theme';
import { data } from '../../assets/dataJSON';
import Rocket from '../../components/Technology/Rocket/Rocket';

function Technology() {
    const { Technology } = data;

    return (
        <ThemeProvider theme={theme}>
            <Box 
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap'
                }}
            >
            <Paper variant="body">
                <NavBar/>
                <Container variant="title-container">
                    <Typography variant="03">03</Typography>
                    <Typography variant="title">SPACE LAUNCH 101</Typography>
                </Container>
                <Rocket data={Technology}/>
            </Paper>
            </Box>
        </ThemeProvider>
    )
}

export default Technology;