import React from "react";
import {Link} from 'react-router'
import { GiChefToque } from "react-icons/gi";
import './mobileNav.css'

const DesktopNav = () => {

    return (
    <div className="hidden md:flex">
        <Link to={'/'}>
        <GiChefToque className="text-yellow-500"/>
        </Link>
        <nav className="flex items-center gap-4 lg:gap-4 ml-8">
            <Link to={'/cart'}>about</Link>
            <Link to={'/payment'}>payment</Link>
            <Link to={'/products'}>products</Link>

        </nav>
        
            <h1 className="flex items-center justify-end flex-1">
                <Link to={'/'} >Some social media</Link>

            </h1>
        </div>
        );
}


export default DesktopNav