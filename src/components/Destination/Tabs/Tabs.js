import React from "react";
import { useState } from 'react';

// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';

// import Tabs from '@mui/material/Tabs';
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
        <Box sx={{ borderStyle: 'groove', borderColor: 'white', borderWidth: '2px', width: '445px', height: '472px', marginLeft: '70px' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                    // aria-label="secondary tabs example"
                    >
                        <Tab sx={{ color: 'white' }} value='moon' onClick={handleClick} label="Moon" />
                        <Tab sx={{ color: 'white' }} value='mars' label="Mars" />
                        <Tab sx={{ color: 'white' }} value='europa' label="Europa" />
                        <Tab sx={{ color: 'white' }} value='titan' label="Titan" />
                    </TabList>
                </Box>
                <TabPanel value="moon">Item One</TabPanel>
                <TabPanel value="mars">Item Two</TabPanel>
                <TabPanel value="europa">Item Three</TabPanel>
            </TabContext>
        </Box>
    )
}

export default PlanetInfo;