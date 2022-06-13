import React from "react";
import PlanetInfo from '../../components/Destination/PlanetInfo/PlanetInfo';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';
import { data } from '../../assets/dataJSON';

import NavBar from '../../components/Navbar/Navbar';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import Box from "@mui/material/Box";


function Destination() {
    const { Destinations } = data;
    return (
        <ThemeProvider theme={theme}>
            <Paper variant="body1" square>
                <NavBar />
                {/* variant="title" */}
                {/* sx={{display: 'flex', height: '2.12rem', marginTop: '4.7em', marginLeft: '10.4em',  marginBottom: '7em' }}  */}
                <Container variant='title'>
                    <Typography variant="01">
                        01
                    </Typography>
                    <Typography variant="pickDest">
                        Pick Your Destination
                    </Typography>
                </Container>
                <PlanetInfo data={Destinations} />
            </Paper>
        </ThemeProvider>
    )
}

export default Destination;