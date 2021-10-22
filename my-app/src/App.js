
import './App.css'
import Forms from './components/forms/forms';
import Info from './components/info/info'
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Navbar from './components/navbar/navbar';
import UseCallBackDemo from './components/UseCallBackDemo/UseCallBackDemo';
import RenderPropsDemo from './components/RenderPropsDemo/RenderPropsDemo';
import CounterContainer from './components/counterReduxDemo/Counter';
import ThemeTogglerButton from './components/ThemeTogglerButton/ThemeTogglerButton';
import { themes, ThemeContext } from './context';
import { useState } from 'react';

const App = () => {

    const [theme, toggleTheme] = useState(themes.light);
    const toggle = () => {
      toggleTheme(theme === themes.dark ? themes.light : themes.dark);
    };


    return (  
        
        <div style={{backgroundColor: theme.background}} >
            <Router>
                <Route path='/forms'>
                    <Forms />
                </Route>
                <Route path='/info'>
                    <Info />
                </Route>
                <Route path='/useCallBackDemo'>
                    <UseCallBackDemo />
                </Route>
                <Route path='/renderPropsDemo'>
                    <RenderPropsDemo />
                </Route>
                <Route path='/counterReduxDemo'>
                    <CounterContainer />
                </Route>
                <Navbar />
                <ThemeContext.Provider value={{ theme, toggle }}>
                <ThemeTogglerButton/>
                </ThemeContext.Provider>
            </Router>

            </div>
    )
}

 

export default App;
