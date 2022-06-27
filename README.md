# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Contributors](#contributors)
- [Acknowledgments](#acknowledgments)

## Overview
---

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

##### **DESKTOP VIEW**
![DESKTOP-VIEW](./src/assets/video/Desktop_View_ST.gif)

##### **TABLET VIEW**
![TABLET-VIEW](./src/assets/video/Tablet_View_ST.gif)

##### **MOBILE VIEW**
![MOBILE-VIEW](./src/assets/video/Mobile_View_ST.gif)

### Links

- Solution URL: [Github Repository](https://github.com/TakuyaMats/space-tourism)
- Live Site URL: [Github Live URL](https://takuyamats.github.io/space-tourism/)

## My process
---

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Material-UI](https://mui.com/) - React frontend framework
- [React Router Dom](https://v5.reactrouter.com/web/guides/quick-start) - Routing
- [Material UI Theme](https://mui.com/material-ui/customization/theming/) - For styles

### What I learned

```html
{data.map((launch, index) => {
    let capName = launch.name.toUpperCase()
    return (
        <TabPanel key={index} value={launch.name}>
            <Container variant="container">
                <Typography variant="h5">THE TERMINOLOGY...</Typography>
                <Typography variant="h1">{capName}</Typography>
                <Typography variant="p">{launch.description}</Typography>
            </Container>
        </TabPanel>
    )
})}
```
```css
const theme = createTheme({
  components: {
      MuiTabs: {
          styleOverrides: {
              flexContainer: {
                      "&.MuiTabs-flexContainer": {
                      display: 'flex', 
                      flexDirection: 'column', 
                      justifyContent: 'center',
                      textDecoration: 'none',
                      position: 'fixed',
                      left: '165px',
                      top: '383px',
                      [breakpoints.down('desktop')]: {
                          flexDirection: 'row',
                      },
                    },
              },
          },
      },
  },
});
```
```js
function crewmatePicture() {
  let crewmateImage = ''
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
    default:
      crewmateImage = crewmateDouglas
  }
  return crewmateImage
}
```

## Author
---

- Website - [Takuya Matsumoto](https://takuyamats.github.io/Reactjs-Portfolio/)
- Frontend Mentor - [@TakuyaMats](https://www.frontendmentor.io/profile/TakuyaMats)
- Github - [@TakuyaMats](https://github.com/TakuyaMats)

## Contributors
---

- Website - [Eric Sun](https://esun94.github.io/Portfolio/)
- Frontend Mentor - [@Esun94](https://www.frontendmentor.io/profile/Esun94)
- Github - [@Esun94](https://github.com/Esun94)
<br><br>
- Name - Matheus Barbosa
- Github - [@mattbarb93](https://github.com/mattbarb93)

