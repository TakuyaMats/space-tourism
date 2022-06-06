import React from "react";
import { useState } from 'react';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Typography from '@mui/material/Typography';
// import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


function PlanetInfo({ data }) {
    console.log(data)
    const [value, setValue] = useState('moon');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    
    const handleClick = (event) => {
        console.log('click !')
    }

    

    let capitalize = (data) => {
        let arrName = [];
        
        data.forEach(info => {
            let capital = info.name.toUpperCase();
            arrName.push(capital)
        })
        return arrName;
    }

    return (
        <Box sx={{ borderStyle: 'groove', borderColor: 'white', borderWidth: '2px', width: '445px', height: '472px', marginLeft: '70px'}}>
            <Box >
                <img />
            </Box>
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
                    console.log(index)
                    return(
                        <TabPanel key={index} value={planet.name}>
                            <Typography variant="h1">
                                {planet.name}
                            </Typography>
                            <Typography variant='p'>
                            {planet.description}
                            </Typography>
                        </TabPanel>
                    )
                })}
                {/* <TabPanel value="moon"><h3>hello</h3></TabPanel> */}
                {/* <TabPanel value="mars">Item Two</TabPanel>
                <TabPanel value="europa">Item Three</TabPanel> */}
            </TabContext>
        </Box>
    )
}

export default PlanetInfo;