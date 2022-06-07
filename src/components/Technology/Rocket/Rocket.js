import React, { useState } from "react";
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TabContext from '@mui/lab/TabContext';
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
        let terminologyImage = ''
        switch (selectedTerminology) {
            case 'Launch vehicle':
                terminologyImage = launchVehiclePortrait
                break;
            case 'Spaceport':
                terminologyImage = spaceportPortrait
                break;
            case 'Space capsule':
                terminologyImage = spaceCapsulePortrait
                break;
            default:
                terminologyImage = launchVehiclePortrait
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
                                    <Tab sx={{ color: '#0B0D17', marginBottom: '32px', backgroundColor: '#FFFFFF', borderRadius: '50%', width: '80px', height: '80px', mixBlendMode: 'difference' }} value='Launch vehicle' onClick={handleClick} label="1" />
                                    <Tab sx={{ color: '#0B0D17', marginBottom: '32px', backgroundColor: '#FFFFFF', borderRadius: '50%', width: '80px', height: '80px', mixBlendMode: 'difference'}} value='Spaceport' onClick={handleClick} label="2" />
                                    <Tab sx={{ color: '#0B0D17', backgroundColor: '#FFFFFF', borderRadius: '50%', width: '80px', height: '80px', mixBlendMode: 'difference'}} value='Space capsule' onClick={handleClick} label="3" />
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
                                        <img style={{ position: 'absolute', width: '515px', height: '527px', left: '600px', bottom: '-90px' }} src={terminologyPicture()} alt={launch.name}/>
                                    </Container>
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