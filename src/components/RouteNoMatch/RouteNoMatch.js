import React from 'react';
import {Link} from "react-router-dom";

export default function RouteNoMatch() {
    return (
        <div>
            <p>No route for this</p>
            <Link to={"/"}>back to home</Link>
        </div>
    )
}