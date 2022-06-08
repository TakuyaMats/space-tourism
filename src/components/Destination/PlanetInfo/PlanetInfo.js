import React from "react";
import { useState } from 'react';

import moonImg from '../../../assets/destination/image-moon.webp'
import europaImg from '../../../assets/destination/image-europa.webp'
import marsImg from '../../../assets/destination/image-mars.webp'
import titanImg from '../../../assets/destination/image-titan.webp'

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


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
        <Box sx={{ display: 'inline-flex', justifyContent: 'space-between'}}>
            <Box sx={{margin: '10rem'}}>
                <img src={planetWebp()} alt='Destination' />
            </Box>
            <Box sx={{ borderStyle: 'groove', borderColor: 'white', borderWidth: '2px', width: '445px', height: '472px', marginLeft: '70px' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                        // aria-label="secondary tabs example"
                        >
                            <Tab sx={{ color: 'white' }} value='Moon' onClick={handleClick} label="Moon" />
                            <Tab sx={{ color: 'white' }} value='Mars' onClick={handleClick} label="Mars" />
                            <Tab sx={{ color: 'white' }} value='Europa' onClick={handleClick} label="Europa" />
                            <Tab sx={{ color: 'white' }} value='Titan' onClick={handleClick} label="Titan" />
                        </TabList>
                    </Box>
                    {data.map((planet, index) => {
                        let capName = planet.name.toUpperCase()
                        return (
                            <TabPanel
                                key={index}
                                value={planet.name}
                            >
                                <Typography
                                    variant="h1"
                                >
                                    {capName}
                                </Typography>
                                <Typography
                                    variant='p'
                                >
                                    {planet.description}
                                </Typography>
                                <Typography
                                    variant='subsubheading2'
                                >
                                    {planet.distance}
                                </Typography>
                                <Typography
                                    variant='subheading2'
                                >
                                    {planet.travel}
                                </Typography>
                            </TabPanel>
                        )
                    })}
                </TabContext>
            </Box>
        </Box>
    )
}

export default PlanetInfo;