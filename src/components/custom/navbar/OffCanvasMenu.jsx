import './offCanvasMenu.css'
import { NavLink } from "react-router";
import { useState } from 'react';
import { IoLogoReact } from "react-icons/io5";

const OffCanvasMenu = ({isHomeBlur, handleIsHomeBlur}) => {
    //console.log(`buttonsvg ${isHomeBlur}`)

    return (
        <>
        <div className=''>
         <div className={isHomeBlur ? 'border-solid border- border-red-500 bg-themegray-bold text-lightwalnut menu-pressed sidenav ' : 'sidenav bg-themegray-bold text-lightwalnut'}>
            <div className='sidenav-link-container pt-10'>
                <div><NavLink className='sidenav-link' to='/' onClick={()=> handleIsHomeBlur()}>Kundeservice</NavLink></div>
                
                <div><NavLink className='sidenav-link' to='/' onClick={()=> handleIsHomeBlur()}>Erhvervskunder</NavLink></div>
                
                <div><NavLink className='sidenav-link' to='/'  onClick={()=> handleIsHomeBlur()}>Hent App</NavLink></div>

                <div><NavLink className='sidenav-link text-left' to='/'  onClick={()=> toggleHamburger}>Opret profil - opnå fordele</NavLink></div>
                <div><NavLink className='sidenav-link' to='/'  onClick={()=> handleIsHomeBlur()}>Stop Madspild</NavLink></div>
                <div className='border- border-solid
                pt-30 flex self-center'><IoLogoReact className='size-50 text-themeamberextrawarm/20'/></div>
            </div>
        </div>
        </div>
        </>
    );
}




export default OffCanvasMenu