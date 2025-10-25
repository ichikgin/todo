import { Theme, Themes } from "../models/theme";

const light: Theme = {
  name: 'light',
  color: {
        backgroundPrimary: '#4682b4', 
        backgroundSecondary: 'rgb(237, 240, 241)',
        backgroundItems: '#fff' 
    }
}

const dark: Theme = {
  name: 'dark',
  color: {
        backgroundPrimary: 'black', 
        backgroundSecondary: 'gray',
        backgroundItems: 'rgba(171, 174, 175, 1)', 
    }
}


export const themes: Themes = {
  light,
  dark
}