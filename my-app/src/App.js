
import './App.css'
import React from 'react';
import Forms from './components/forms/forms';
import Info from './components/info/info'
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Navbar from './components/navbar/navbar';

class App extends React.Component {


    render() {
        return (
            <Router>
                <Route path='/forms'>
                    <Forms />
                </Route>
                <Route path='/info'>
                    <Info />
                </Route>
                <Navbar/>
            </Router>
            
        )
    }
}


// // // it7
// // function getAndSetUser(name) {

// //     fetch(`https://api.github.com/users/${name}`, { method: 'GET' })
// //         .then((response) => {
// //            return repo = response.json();
// //         })
// //         .then((repo) => {
// //             let {login, id, followers} = repo;
// //             let div = document.createElement('div');
// //             div.innerHTML = `login: ${login}<br>id: ${id}<br>followers number: ${followers}`;
// //             let wrapper = document.getElementById('userInfoWrapper');
// //             wrapper.prepend(div);
// //         })
// //         .catch((err) => {
// //             console.log(err);
// //         })

// // }

// // getAndSetUser('leopold271');

// // // function insertUserInfo (funcGetUser) {
// // //     let user = funcGetUser('leopold271');
// // //     let {login, id, followers} = user;
// // //     let div = document.createElement('div');
// // //     div.innerHTML = `login: ${login}<br>id: ${id}<br>followers number: ${followers}`;
// // //     let wrapper = document.getElementById('userInfoWrapper');
// // //     wrapper.prepend(div);
// // // }

// // // insertUserInfo(getUser)

// async function getUser(name) {
//     try {
//         let response = await fetch(`https://api.github.com/users/${name}`, { method: 'GET' })
//         if (response.status == 200) {
//             let repo = await response.json();
//             return repo;
//         }
//     } catch (err) {
//         console.log(err);
//     }
// }

// async function insertUserInfo2 (funcGetUser) {
//     let user = await funcGetUser('leopold271');
//     let {login, id, followers} = user;
//     let div = document.createElement('div');
//     div.innerHTML = `login: ${login}<br>id: ${id}<br>followers number: ${followers}`;
//     let wrapper = document.getElementById('userInfoWrapper');
//     wrapper.prepend(div);
// }

// // // insertUserInfo2(getUser);


export default App;
