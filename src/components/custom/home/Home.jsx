import './home.css'
import React, {useState } from 'react'
import { useOutletContext, useNavigate } from "react-router";
// import OffCanvasMenu from './OffCanvasMenu.jsx'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import MobileNav from '../MobileNav'
// import { ChevronDown } from 'lucide-react';
// import { IoLogoReact } from "react-icons/io5";


const Home = () => {
const {resetOrder, customerData, handleCustomerData, handleMobileNavState, isHomeBlur, handleIsHomeBlur} = useOutletContext()


const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    //console.log('{ name, value }', { name, value })
    handleCustomerData((prevState) => ({ ...prevState, [name]: value }));
    };

let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    //console.log('form submitted')
    handleMobileNavState('product_list_view')
    navigate("/products/bread")
  }

  
    
    return (
        <div className='w-full h-full flex justify-center border- border-solid border-green-500'>
            <div className={ isHomeBlur ? 'homeBlur' : 'noHomeBlurFakeClassName'}>
        
           <div className='mt-8 pt-5 h-full flex flex-col gap-4
                border- border-solid border-red-500 rounded-lg'>
                
                <label htmlFor='storeLocation' className='px-2 pb-2 text-left text-black/80 font-Montserrat'>Vælg Butik
                <Input className='px-2 border-1 border-solid border-black/20 bg-white/90 cursor-pointer text-black/70'
                id='storeLocation'
                name='storeLocation'
                type='text'
                value={customerData.storeLocation}
                onChange={handleChange}
                placeholder='Banebrinken'
                /></label>
                
                <label htmlFor='date' className='px-2 pb-2 text-left text-black/80 font-Montserrat' >Dato
                <Input className='px-2 border-1 border-solid border-black/20 bg-white/90 cursor-pointer text-black/70'
                id='date'
                name='date'
                type='text'
                value={customerData.date}
                onChange={handleChange}
                placeholder='i dag'
                /></label>
                
                <label htmlFor='time' className='px-2 pb-2 text-left text-black/80 font-Montserrat' >Tid
                <Input className='px-2 border-1 border-solid border-black/20 bg-white/90 cursor-pointer text-black/70'
                id='time'
                name='time'
                type='text'
                value={customerData.time}
                onChange={handleChange}
                placeholder='07:35'
                /></label></div>

                <div className='border-solid border- border-red-500 
                pt-5 pb-4 fixed bottom-0 flex flex-col items-center w-full max-w-[320px] backdrop-blur'>
                <span className='w-5 border-solid border-1 border-black/20'></span>
                <Button className='py-1 my-3 w-8/10 flex justify-around hover:bg-themeamberextrawarm bg-themeamber rounded-xl font-Montserrat font-semibold text-lightwalnutbold cursor-pointer' onClick={(e) => handleSubmit(e)}>Til bestilling</Button>
                <div className='w-20 border-solid border-1 border-black/20'></div></div>

                
                </div>

               
        </div>
    );
};

export default Home;