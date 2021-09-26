
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

const App = () => {
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
            <Route path='/counterReduxDemo'>
                <Counter />
            </Route>
            <Navbar />
        </Router>
    )
}





export default App;
