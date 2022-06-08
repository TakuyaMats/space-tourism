import React, { useState } from "react";
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TabContext from '@mui/lab/TabContext';
import Paper from '@mui/material/Paper';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import theme from './Theme';
import launchVehiclePortrait from '../../../assets/technology/image-launch-vehicle-portrait.jpg';
import launchVehicleLandscape from '../../../assets/technology/image-launch-vehicle-landscape.jpg';
import spaceportPortrait from '../../../assets/technology/image-spaceport-portrait.jpg';
import spaceportLandscape from '../../../assets/technology/image-spaceport-landscape.jpg';
import spaceCapsulePortrait from '../../../assets/technology/image-space-capsule-portrait.jpg';
import spaceCapsuleLandscape from '../../../assets/technology/image-space-capsule-landscape.jpg';
import './Rocket.css';


function Rocket({ data }) {
    const [value, setValue] = useState('Launch vehicle');
    const [selectedTerminology, setSelectedTerminology] = useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTerminology(newValue);
        setValue(newValue);
    }

    const handleClick = (e) => {
        e.preventDefault();
    }

    function terminologyPicture() {
        let terminologyImage = '';
        if (window.innerWidth > '1140') {
            switch (selectedTerminology) {
                case 'Launch vehicle':
                    terminologyImage = launchVehiclePortrait;
                    break;
                case 'Spaceport':
                    terminologyImage = spaceportPortrait;
                    break;
                case 'Space capsule':
                    terminologyImage = spaceCapsulePortrait;
                    break;
                default:
                    terminologyImage = launchVehiclePortrait;
            }
        } else {
            switch (selectedTerminology) {
                case 'Launch vehicle':
                    terminologyImage = launchVehicleLandscape;
                    break;
                case 'Spaceport':
                    terminologyImage = spaceportLandscape;
                    break;
                case 'Space capsule':
                    terminologyImage = spaceCapsuleLandscape;
                    break;
                default:
                    terminologyImage = launchVehicleLandscape;
            }
    }
    return terminologyImage
}

    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Box>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                sx={{ position: 'absolute', left: '165px', top: '383px' }}
                            >
                                <Tabs variant="tabs">
                                    <Tab variant="tab" value='Launch vehicle' onClick={handleClick} label="1" />
                                    <Tab variant="tab" value='Spaceport' onClick={handleClick} label="2" />
                                    <Tab variant="tab" value='Space capsule' onClick={handleClick} label="3" />
                                </Tabs>
                            </TabList>
                        </Box>
                        {data.map((launch, index) => {
                            let capName = launch.name.toUpperCase()
                            return (
                                <TabPanel key={index} value={launch.name}>
                                    <Container variant="container">
                                        <Typography variant="h5">THE TERMINOLOGY...</Typography>
                                        <Typography variant="h1">{capName}</Typography>
                                        <Typography variant="p">{launch.description}</Typography>
                                    </Container>
                                </TabPanel>
                            )
                    })}
                    {data.map((launch, index) => {
                            return (
                                <TabPanel key={index} value={launch.name}>
                                    <Paper variant="image" sx={{ backgroundImage: `url(${terminologyPicture()})` }} />
                                </TabPanel>
                            )
                    })}
                    </TabContext>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default Rocket;