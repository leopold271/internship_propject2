
import './App.css'
import React, { useCallback } from 'react';
import Forms from './components/forms/forms';
import Info from './components/info/info'
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Navbar from './components/navbar/navbar';
import UseCallBackDemo from './components/UseCallBackDemo/UseCallBackDemo';
import RenderPropsDemo from './components/RenderPropsDemo/RenderPropsDemo';




const App = (props) => {
    return (
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
            <Navbar />
        </Router>
    )
}





export default App;
