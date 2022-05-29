import React from "react";
import NavBar from "../components/Navbar/Navbar";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Item from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import backgroundImage from "../assets/crew/background-crew-desktop.jpg";
import crewmateImage from "../assets/crew/image-douglas-hurley.png";

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
      }}
    >
      {/* Grid pretending to be the Navbar */}
      <Grid
        container
        sx={{
          height: "20vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h5>NAVBAR</h5>
      </Grid>
      <Container>
        <Grid container sx={{ height: "80vh" }}>
          <Grid item xs={6}>
            <Box sx={{ marginTop: "0px" }}>
              <h5>02 MEET YOUR CREW</h5>
            </Box>

            <div className="sub-heading">COMMANDER</div>
            <h3>DOUGLAS HURLEY</h3>

            <Grid item xs={8}>
              <p>
                Douglas Gerald Hurley is an American engineer, former Marine
                Corps pilot and former NASA astronaut. He launched into space
                for the third time as commander of Crew Dragon Demo-2.
              </p>
            </Grid>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              backgroundImage: `url(${crewmateImage})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              objectFit: "contain",
            }}
          ></Grid>
        </Grid>
      </Container>
    </Paper>
  );
}

export default Crew;
