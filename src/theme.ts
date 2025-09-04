import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#4fc3f7', // azul neon suave
        },
        secondary: {
            main: '#b0c4de', // cinza azulado
        },
        text: {
            primary: '#ffffff',
            secondary: '#b0c4de',
        },
        background: {
            default: 'transparent',
            paper: 'rgba(29,32,38,0.7)', // leve overlay para caixas, se precisar
        }
    },
    typography: {
        fontFamily: "Poppins, Roboto, Arial, sans-serif, Helvetica",
        h1: {
            fontFamily: "Poppins, sans-serif",
            fontWeight: 800,
            color: "#ffffff"
        },
        h2: {
            fontFamily: "Roboto, sans-serif",
            fontWeight: 400,
            color: "#ffffff"
        },
    }
});

theme = responsiveFontSizes(theme);

export default theme;
