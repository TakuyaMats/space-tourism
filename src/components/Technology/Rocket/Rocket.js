import React from "react";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

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
        <Container>
            <Typography>THE TERMINOLOGY...</Typography>
            <Typography>{capitalize(data)[0]}</Typography>
            <Typography>{data[0].description}</Typography>
        </Container>
    )
}

export default Rocket;