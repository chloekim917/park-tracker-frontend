import React from 'react';
import { Link } from 'react-router-dom';
import UserControls from './UserControls'

const Navbar = props => {
    // console.log(props)
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/parks">Parks</Link>
            <Link to="/users/:id">My Parks</Link>
            <UserControls logout={props.logout} currentUser={props.currentUser} />

            {/* <Link to="/login">Login</Link> */}
        </div>
    )
}

export default Navbar;