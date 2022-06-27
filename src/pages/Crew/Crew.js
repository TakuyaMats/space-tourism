import React from "react";
import NavBar from "../../components/Navbar/Navbar";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
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
