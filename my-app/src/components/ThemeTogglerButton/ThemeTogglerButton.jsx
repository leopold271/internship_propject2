import { useContext, useState } from "react";
import { ThemesContext } from "../../context";


const ThemeTogglerButton = () => {

    const {theme, toggleTheme} = useContext(ThemesContext)

    return (
        <button onClick={toggleTheme}>toggle theme</button>
    )
}

export default ThemeTogglerButton;