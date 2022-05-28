import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
        values: {
            md: 750,
            lg: 1050,
        }
    }
});

export default theme;