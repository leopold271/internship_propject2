
import { ThemeContext } from "../../context";


const ThemeTogglerButton = () => {
    return (
      <ThemeContext.Consumer>
        {({ toggle }) => (
          <button onClick={toggle}>
            Toggle Theme
          </button>
        )}
      </ThemeContext.Consumer>
    );
  }
  
  export default ThemeTogglerButton;