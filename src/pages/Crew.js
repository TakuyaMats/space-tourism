import React from "react";
import NavBar from "../components/Navbar/Navbar";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import backgroundImage from "../assets/crew/background-crew-desktop.jpg";

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
      {/* <Container>
        <Grid>Info</Grid>
        <Grid>Image</Grid>
      </Container> */}
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <h3>CONTENT</h3>
          </Grid>
          <Grid item xs={6}>
            IMAGE
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}

export default Crew;
