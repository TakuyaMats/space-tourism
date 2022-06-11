import React from "react";
import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';
import moonImg from '../../../assets/destination/image-moon.webp'
import europaImg from '../../../assets/destination/image-europa.webp'
import marsImg from '../../../assets/destination/image-mars.webp'
import titanImg from '../../../assets/destination/image-titan.webp'

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import Container from '@mui/material/Container';


function PlanetInfo({ data }) {
    const [value, setValue] = useState('Moon');
    const [destinationImg, setDestination] = useState('Moon');

    const handleChange = (event, newValue) => {
        setDestination(newValue)
        setValue(newValue);
    }

    const handleClick = (event) => {
        console.log('click registered')
    }

    const planetWebp = () => {
        let planetImg = '';
        switch (destinationImg) {
            case 'Moon':
                planetImg = moonImg
                break;
            case 'Europa':
                planetImg = europaImg
                break;
            case 'Mars':
                planetImg = marsImg
                break;
            case 'Titan':
                planetImg = titanImg
                break;
            default:
            // do nothing
        }
        return planetImg;
    }



    return (
        <ThemeProvider theme={theme}>
      
            <Container variant='image'>
                <img src={planetWebp()} alt='Destination'/>
            </Container>
            <Container variant='info' className="aboveContext">
                <TabContext className='here' value={value}>
                    <Container>
                        <TabList 
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                        >
                            <Tab sx={{ color: 'white' }} value='Moon' onClick={handleClick} label="Moon" />
                            <Tab sx={{ color: 'white' }} value='Mars' onClick={handleClick} label="Mars" />
                            <Tab sx={{ color: 'white' }} value='Europa' onClick={handleClick} label="Europa" />
                            <Tab sx={{ color: 'white' }} value='Titan' onClick={handleClick} label="Titan" />
                        </TabList>
                    </Container>
                    {data.map((planet, index) => {
                        let capName = planet.name.toUpperCase()
                        return (
                            <TabPanel key={index} value={planet.name} >
                                <Typography variant='name'>
                                    {capName}
                                </Typography>
                                <Typography variant='desc'>
                                    {planet.description}
                                </Typography>
                                <Container variant='subInfo'>
                                    <Container variant='subDistance'>
                                        <Typography variant='avgDist'>
                                            AVG. Distance
                                        </Typography>
                                        <Typography variant='distance' noWrap>
                                            {planet.distance}
                                        </Typography>
                                    </Container>
                                    <Container variant='subTime'>
                                        <Typography variant='estTime'>
                                            Est. Time Travel
                                        </Typography>
                                        <Typography variant='travel' noWrap >
                                            {planet.travel}
                                        </Typography>
                                    </Container>
                                </Container>
                            </TabPanel>
                        )
                    })}
                </TabContext>
            </Container>
            {/* </Container> */}
        </ThemeProvider>
    )
}

export default PlanetInfo;