import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    
    return (
        <div>
            <h1>NAVBAR</h1>
            {/* links to in NAVBAR COMPONENT, then NAVBAR COMPONENT to HOME */}
            <Link to="/">Home</Link>
            <Link to="/destination"> Destination </Link>
            <Link to="/crew"> Crew </Link>
            <Link to="/technology"> Technology </Link>
        </div>

    )
};

export default NavBar;