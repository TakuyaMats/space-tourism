import React from "react";
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


function PlanetInfo() {
    const [value, setValue] = useState('moon');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

   const handleClick = (event) => {
       console.log('click !')
   }
    return (
        <Box sx={{ borderStyle: 'groove', borderColor: 'white', borderWidth: '2px' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="white"
                aria-label="secondary tabs example"
                sx={{ color: 'white' }}
            >
                <Tab sx={{ color: 'white' }} value='moon' onClick={handleClick} label="Moon" />
                <Tab sx={{ color: 'white' }} value='mars' label="Mars" />
                <Tab value='europa' label="Europa" />
                <Tab value='titan' label="Titan" />
            </Tabs>
        </Box>
    )
}

export default PlanetInfo;