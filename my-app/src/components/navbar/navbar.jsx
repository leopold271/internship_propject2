import React from 'react';
import {NavLink} from 'react-router-dom';
import  classes  from './navbar.module.css'

class Navbar extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className={classes.navbar}>
                <div>
                    <NavLink to='/forms'>Forms</NavLink>
                </div>
                <div>
                    <NavLink to='/info'>Info</NavLink>
                </div>
            </div>
        )
    }
}

export default Navbar;
