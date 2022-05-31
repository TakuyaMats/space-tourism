import React from "react";
import { styled } from "@mui/system";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Item from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import crewmateDouglas from "../../../assets/crew/image-douglas-hurley.png";
import crewmateMark from "../../../assets/crew/image-mark-shuttleworth.png";
import crewmateVictor from "../../../assets/crew/image-victor-glover.png";
import crewmateAnsari from "../../../assets/crew/image-anousheh-ansari.png";
// import { crew } from "../../../assets/data";

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
`;

const CrewMember = ({ crew }) => {
  //   const crewmateImage = crewmate.images.png;
  //console.log(selectedCrewmate(crewmate));

  const handleChange = (event, newValue) => {
    setSelectedCrewmate(newValue);
  };
  const [selectedCrewmate, setSelectedCrewmate] = React.useState(0);

  const crewmate = crew[selectedCrewmate];
  //Really ugly function, I'll make it prettier some other time

  let crewmateImage = "";
  function crewmatePicture() {
    if (selectedCrewmate === 0) return <img src={crewmateDouglas}></img>;
    else if (selectedCrewmate === 1) return <img src={crewmateMark}></img>;
    else if (selectedCrewmate === 2) return <img src={crewmateVictor}></img>;
    else return <img src={crewmateAnsari}></img>;
  }

  return (
    <Grid container sx={{ height: "80vh" }}>
      <Grid item xs={6}>
        <Box sx={{ marginTop: "0px" }}>
          <h5 style={{ marginBottom: "4.5em" }}>02 MEET YOUR CREW</h5>
        </Box>

        <div className="sub-heading">{crewmate.role.toUpperCase()}</div>
        <h3>{crewmate.name.toUpperCase()}</h3>

        <Grid item xs={8}>
          <p style={{ marginBottom: "4.5em" }}>{crewmate.bio}</p>
        </Grid>
        <Grid xs={4}>
          <TabsUnstyled value={selectedCrewmate} onChange={handleChange}>
            <TabsList>
              <Tab></Tab>
              <Tab></Tab>
              <Tab></Tab>
              <Tab></Tab>
            </TabsList>
          </TabsUnstyled>
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
      >
        ${crewmatePicture()}
      </Grid>
    </Grid>
  );
};

export default CrewMember;

// const CrewMember = ({ crewmate }) => {
//     console.log(crewmate);
//     return <div>{crewmate.name}</div>;
//   };

//   export default CrewMember;

// {/* <Grid container sx={{ height: "80vh" }}>
//   <Grid item xs={6}>
//     <Box sx={{ marginTop: "0px" }}>
//       <h5 style={{ marginBottom: "4.5em" }}>02 MEET YOUR CREW</h5>
//     </Box>

//     <div className="sub-heading">COMMANDER</div>
//     <h3>DOUGLAS HURLEY</h3>

//     <Grid item xs={8}>
//       <p style={{ marginBottom: "4.5em" }}>
//         Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
//         and former NASA astronaut. He launched into space for the third time as
//         commander of Crew Dragon Demo-2.
//       </p>
//     </Grid>
//     <Grid item xs="4">
//       {/* --FOR MY OWN MENTAL NOTES--
//                 In order to accomplish the proper "tabs", I'll have to mix the "Basic Unstyled Tab" for the custom button styling, and the useState functionality from the regular Tab methods, so I can change the content on the page.

//                 Look at the documentation about how useState is used, on the regular Tab import, however still import it

//                 Tab will be defined as a const, and styled there.

//                 TabPanel will pass the component with the Crewmate data as props*/}
//       <TabsUnstyled value={selectedCrewmate} onChange={handleChange}>
//         <TabsList>
//           <Tab></Tab>
//           <Tab></Tab>
//           <Tab></Tab>
//           <Tab></Tab>
//         </TabsList>
//         <TabPanelUnstyled value={0}>First page</TabPanelUnstyled>
//         <TabPanelUnstyled value={1}>Second page</TabPanelUnstyled>
//         <TabPanelUnstyled value={2}>Third page</TabPanelUnstyled>
//       </TabsUnstyled>
//     </Grid>
//   </Grid>
//   <Grid
//     item
//     xs={6}
//     sx={{
//       backgroundImage: `url(${crewmateImage})`,
//       backgroundPosition: "center",
//       backgroundSize: "contain",
//       backgroundRepeat: "no-repeat",
//       objectFit: "contain",
//     }}
//   ></Grid>
// </Grid>; */}
