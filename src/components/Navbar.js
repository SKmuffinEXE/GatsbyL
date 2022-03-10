import { Link } from "gatsby";
import React from "react";

export default function Navbar(){

    return(<div>
        <ul>
        
        <li>
            <Link to = "/">Home</Link>
            </li>
            <li>
            <Link to = "/about">About me</Link>
            </li>
            <li>
            <Link to = "/blog">Blog</Link>
            </li> 
            <li>
            <Link to = "/contact">Contact me</Link>
            </li>
        </ul>

    </div>)
}