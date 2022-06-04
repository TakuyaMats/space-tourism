import React from "react";

import PlanetInfo from '../../components/Destination/Tabs/Tabs';

import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';

import NavBar from '../../components/Navbar/Navbar';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



function Destination() {
    return (
        <ThemeProvider theme={theme}>
            <Paper variant="body1" square>
                <NavBar />
                <Container sx={{ borderStyle: 'groove', borderColor: 'blue' }}>
                    <Typography>
                        PICK YOUR DESTINATION
                    </Typography>
                </Container>
                <PlanetInfo styles={{}} />
                <Container sx={{ borderStyle: 'groove', borderColor: 'red' }}>
                    <Typography>
                        Planet IMG
                    </Typography>
                </Container>
            </Paper>
        </ThemeProvider>
    )
}

export default Destination;