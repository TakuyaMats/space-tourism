import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import theme from './Theme';

function Rocket({ data }) {

    let capitalize = (data) => {
        let arrName = [];

        data.forEach(info => {
            let capital = info.name.toUpperCase();
            arrName.push(capital)
        })
        return arrName;
    }

    return (
        <ThemeProvider theme={theme}>
            <Container variant="container">
                <Typography variant="h5">THE TERMINOLOGY...</Typography>
                <Typography variant="h1">{capitalize(data)[0]}</Typography>
                <Typography variant="p">{data[0].description}</Typography>
            </Container>
        </ThemeProvider>
    )
}

export default Rocket;