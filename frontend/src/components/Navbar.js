import React from 'react';
import '../style/Navbar.css';
import * as AiIcons from 'react-icons/ai';
import logo from '../assets/logo.svg';
import "../style/Navbar.css";
import { Link, Redirect } from "react-router-dom";
import {useSelector} from 'react-redux'

const Navbar = () => {
    const myState = useSelector(state => state.changeAuthState)

    return (
        <nav id="nav">
            <input id="nav-toggle" type="checkbox" />
            <div className="logo">{myState.name}</div>
            <ul className="links">
                <Link to="/">Chat Room</Link>
                <Link to="/create-room">Create Room</Link>
                <Link to="/my-rooms">My Rooms</Link>
                <Link to="/logout">Logout</Link>
            </ul>
            <label htmlFor="nav-toggle" className="icon-burger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </label>
        </nav>
    )
}

export default Navbar
