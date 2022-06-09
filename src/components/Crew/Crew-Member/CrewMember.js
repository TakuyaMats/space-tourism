import React from "react";
import { styled, ThemeProvider } from "@mui/system";
import { keyframes } from "@mui/system";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";

import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import crewmateDouglas from "../../../assets/crew/image-douglas-hurley.png";
import crewmateMark from "../../../assets/crew/image-mark-shuttleworth.png";
import crewmateVictor from "../../../assets/crew/image-victor-glover.png";
import crewmateAnsari from "../../../assets/crew/image-anousheh-ansari.png";

import Fade from "@mui/material/Fade";
import theme from './Theme'


//Merge the media queries in here and Theme.js (MuiGrid slides)
const TabsList = styled(TabsListUnstyled)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  grid-gap: 10px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(15%, 1fr));
    }
  @media (max-width: 420px) {
    grid-template-columns: repeat(auto-fill, minmax(15%, 1fr));
    margin-left: 25%;
    }
`;

const Tab = styled(TabUnstyled)`
  background-color: #222222;
  display: inline-block;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
  border: 0;
  padding: 0;

  &:hover {
    background-color: #333333;
  }


  @media (max-width: 800px) {
    width: 15px;
    height: 15px;
    }
  
  &.${tabUnstyledClasses.selected} {
    background-color: #ffffff;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CrewMember = ({ crew }) => {
  const handleChange = (event, newValue) => {
    setSelectedCrewmate(newValue);
    setCheck((prev) => !prev);
  };

  const [selectedCrewmate, setSelectedCrewmate] = React.useState(0);
  const [check, setCheck] = React.useState(false);

  const crewmate = crew[selectedCrewmate];

  React.useEffect(() => {
    !check
      ? setTimeout(() => setCheck(true), 300)
      : console.log('yes');
  }, [selectedCrewmate]);

  function crewmatePicture() {
    let crewmateImage = ''
    //Switch Statement 
    switch (selectedCrewmate) {
      case 0:
        crewmateImage = crewmateDouglas
        break;
      case 1:
        crewmateImage = crewmateMark
        break;
      case 2:
        crewmateImage = crewmateVictor
        break;
      case 3:
        crewmateImage = crewmateAnsari
        break;
    }
    return crewmateImage
  }

  //Move the Fade effect inside a function later so you dont write the whole thing 3 times 


  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Typography variant="h5" >02 MEET YOUR CREW</Typography>
      </Box>
      <Grid container variant='crew'>
        <Grid item xs={12} lg={6} variant="crewmate-info">
          <Fade
            in={check}
            timeout={{
              appear: 0,
              enter: 400,
              exit: 0,
            }}
          >
            <Grid item variant="crewmate-role">
              <Typography variant="subHeading">{crewmate.role.toUpperCase()}</Typography>
            </Grid>

          </Fade>

          <Fade
            in={check}
            timeout={{
              appear: 0,
              enter: 400,
              exit: 0,
            }}
          >
            <Grid item variant="crewmate-name">
              <Typography variant="h3">{crewmate.name.toUpperCase()}</Typography>
            </Grid>
          </Fade>

          <Fade
            in={check}
            timeout={{
              appear: 0,
              enter: 400,
              exit: 0,
            }}
          >
            <Grid item lg={8} xs={12} variant="crewmate-description">
              <Typography variant="paragraph">{crewmate.bio}</Typography>
            </Grid>
          </Fade>

          <Grid item lg={4} xs={3} variant="slides">
            <TabsUnstyled value={selectedCrewmate} onChange={handleChange}>
              <TabsList>
                <Tab />
                <Tab />
                <Tab />
                <Tab />
              </TabsList>
            </TabsUnstyled>
          </Grid>
        </Grid>

        <Fade
          in={check}
          timeout={{
            appear: 0,
            enter: 200,
            exit: 0,
          }}
        >
          <Grid item variant="crewmate-picture" sx={{ backgroundImage: `url(${crewmatePicture()})` }} lg={6} xs={12}>

          </Grid>
        </Fade>
      </Grid>
    </ThemeProvider>

  );
};

export default CrewMember;
