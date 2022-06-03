import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import NavBar from '../../components/Navbar/Navbar';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import theme from './Theme';

function Destination() {
    return (
        <ThemeProvider theme={theme}>
            <Paper variant="body1" square>
                <NavBar />
                <Container>
                    <Typography>
                        PICK YOUR DESTINATION
                    </Typography>
                </Container>
                <Container>
                    <Typography>
                        MOON
                    </Typography>
                </Container>
            </Paper>
        </ThemeProvider>
    )
}

export default Destination;