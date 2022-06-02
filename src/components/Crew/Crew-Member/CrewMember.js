import React from "react";
import { styled } from "@mui/system";
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

const TabsList = styled(TabsListUnstyled)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  grid-gap: 10px;
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
      : console.log(check + "is true");
  }, [selectedCrewmate]);

  //Really ugly function, I'll make it prettier some other time

  function crewmatePicture() {
    if (selectedCrewmate === 0)
      return (
        <img
          style={{
            height: "inherit",
            objectFit: "contain",
            position: "absolute",
          }}
          src={crewmateDouglas}
        ></img>
      );
    else if (selectedCrewmate === 1)
      return (
        <img
          style={{
            height: "inherit",
            objectFit: "contain",
            position: "absolute",
          }}
          src={crewmateMark}
        ></img>
      );
    else if (selectedCrewmate === 2)
      return (
        <img
          style={{
            height: "inherit",
            objectFit: "contain",
            position: "absolute",
          }}
          src={crewmateVictor}
        ></img>
      );
    else
      return (
        <img
          style={{
            height: "inherit",
            objectFit: "contain",
            position: "absolute",
          }}
          src={crewmateAnsari}
        ></img>
      );
  }

  return (
    <Grid container sx={{ height: "90vh" }}>
      <Grid item xs={7}>
        <Box sx={{ marginTop: "0px" }}>
          <h5 style={{ marginBottom: "4.5em" }}>02 MEET YOUR CREW</h5>
        </Box>

        <Fade
          in={check}
          timeout={{
            appear: 0,
            enter: 400,
            exit: 0,
          }}
        >
          <Box className="sub-heading">{crewmate.role.toUpperCase()}</Box>
        </Fade>

        <Fade
          in={check}
          timeout={{
            appear: 0,
            enter: 400,
            exit: 0,
          }}
        >
          <Box>
            <h3>{crewmate.name.toUpperCase()}</h3>
          </Box>
        </Fade>

        <Fade
          in={check}
          timeout={{
            appear: 0,
            enter: 400,
            exit: 0,
          }}
        >
          <Grid item xs={8}>
            <p style={{ marginBottom: "4.5em" }}>{crewmate.bio}</p>
          </Grid>
        </Fade>

        <Grid xs={4}>
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
        <Grid item xs={5} sx={{ height: "inherit" }}>
          {crewmatePicture()}
        </Grid>
      </Fade>
    </Grid>
  );
};

export default CrewMember;
