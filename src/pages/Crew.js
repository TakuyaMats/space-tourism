import React from "react";
import { styled } from "@mui/system";
import NavBar from "../components/Navbar/Navbar";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Item from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import backgroundImage from "../assets/crew/background-crew-desktop.jpg";
import crewmateImage from "../assets/crew/image-douglas-hurley.png";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import CrewMember from "../components/Crew/Crew-Member/CrewMember";
import { crew } from "../assets/data";

function Crew() {
  return (
    <Paper
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        position: "fixed",
      }}
    >
      {/* Grid pretending to be the Navbar */}

      {/* CrewMember component */}
      {/* <CrewMember crewmate={crew} /> */}
      <Container>
        <NavBar />
        <CrewMember crew={crew} />
      </Container>
    </Paper>
  );
}

export default Crew;
