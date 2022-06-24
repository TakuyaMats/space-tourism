import React from "react";
import { styled } from "@mui/system";
import NavBar from "../../components/Navbar/Navbar";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Item from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import backgroundImage from "../../assets/crew/background-crew-desktop.jpg";
import crewmateImage from "../../assets/crew/image-douglas-hurley.png";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import CrewMember from "../../components/Crew/Crew-Member/CrewMember";
import { data } from "../../assets/dataJSON";
import theme from './Theme';
import { ThemeProvider } from '@mui/material/styles';

function Crew() {
  return (

    <ThemeProvider theme={theme}>
      <Box 
        sx={{
            display: 'flex',
            flexWrap: 'wrap'
        }}
        >
      <Paper variant="body1" square
        sx={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <NavBar />
        <Container variant="container1">
          <CrewMember crew={data.Crew} />
        </Container>
      </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default Crew;
