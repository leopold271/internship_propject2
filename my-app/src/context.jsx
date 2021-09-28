import React from 'react'

export const themes = {
    dark: 'black',
    light: 'green'
}

export const ThemesContext = React.createContext({
    theme: themes.light,
    toggleTheme: () => {}
});