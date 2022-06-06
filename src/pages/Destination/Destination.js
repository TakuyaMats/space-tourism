import React from "react";
import PlanetInfo from '../../components/Destination/PlanetInfo/PlanetInfo';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';
import { data } from '../../assets/dataJSON';

import NavBar from '../../components/Navbar/Navbar';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



function Destination() {
    const { Destinations } = data;
    return (
        <ThemeProvider theme={theme}>
            <Paper variant="body1" square>
                <NavBar />
                <Container sx={{ borderStyle: 'groove', borderColor: 'blue' }}>
                    <Typography>
                        PICK YOUR DESTINATION
                    </Typography>
                </Container>
                <Container sx={{ borderStyle: 'groove', borderColor: 'red', display: 'flex', justifyContent: 'space-around' }}>
                    {/* <Box sx={{ borderStyle: 'groove', borderColor: 'yellow', display: 'flex' }}>
                        <Typography sx={{ width: '445px', height: '445px' }}>
                            Planet IMG
                        </Typography>
                    </Box> */}
                    <PlanetInfo data={Destinations} />
                </Container> 
            </Paper>
        </ThemeProvider>
    )
}

export default Destination;