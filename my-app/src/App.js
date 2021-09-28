
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
import Counter from './components/counterReduxDemo/Counter';
import ThemeTogglerButton from './components/ThemeTogglerButton/ThemeTogglerButton';
import { useContext } from 'react';
import { themes, ThemesContext } from './context';

const App = () => {

    const themes = useContext(ThemesContext)

    


    return (  
        
        <div >
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
                    <Counter />
                </Route>
                <Navbar />
                <ThemeTogglerButton/>
            </Router>

            </div>
    )
}





export default App;
