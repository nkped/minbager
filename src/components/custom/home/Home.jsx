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
        <div className='w-full h-full flex justify-center border- border-solid border-red-200'>
            <div className={ isHomeBlur ? 'homeBlur' : ''}>
                {/* <div className='relative flex flex-col items-center font-Montserrat'>

                    <img className='brightness-52 opacity-85' alt='bakery store front' src='/src/assets/otherImages/bakeryHome.png'/>
                    
                    <div className='absolute bottom-10 left-50% flex flex-col  font-semibold text-white opacity- '>
                    <div className='self-start text-'>Butik valgt</div>
                    <div className='pt-2 text-2xl'>{customerData.storeLocation}</div></div></div> */}

        
           <div className='mt-8 px-1 pt-5 flex flex-col gap-4
                border- border-solid border-themeamberwarm/70 rounded-lg'>
                
                
                <label htmlFor='storeLocation' className='pb-2 text-left text-black/80 font-Montserrat'>Vælg Butik
                <Input className='border-1 border-solid border-black/20 bg-white/90 cursor-pointer text-black/70'
                id='storeLocation'
                name='storeLocation'
                type='text'
                value={customerData.storeLocation}
                onChange={handleChange}
                placeholder='Banebrinken'
                /></label>

                
                
                <label htmlFor='date' className='pb-2 text-left text-black/80 font-Montserrat' >Dato
                <Input className='border-1 border-solid border-black/20 bg-white/90 cursor-pointer text-black/70'
                id='date'
                name='date'
                type='text'
                value={customerData.date}
                onChange={handleChange}
                placeholder='i dag'
                /></label>
                
                <label htmlFor='time' className='pb-2 text-left text-black/80 font-Montserrat' >Tid
                <Input className='border-1 border-solid border-black/20 bg-white/90 cursor-pointer text-black/70'
                id='time'
                name='time'
                type='text'
                value={customerData.time}
                onChange={handleChange}
                placeholder='07:35'
                /></label>

                <div className='pt-5 pb-4 fixed bottom-0 left-0 flex flex-col items-center w-full backdrop-blur'>
                    <div className='w-5 border-solid border-1 border-black/20'></div>
                    <Button className='py-1 my-3 w-8/10 flex justify-around hover:bg-themeamberextrawarm bg-themeamber rounded-xl font-Montserrat font-semibold text-lightwalnutbold cursor-pointer' onClick={(e) => handleSubmit(e)}>Til bestilling</Button>
                    <div className='w-20 border-solid border-1 border-black/20'></div></div>

                </div>
                </div>

                {/* <OffCanvasMenu handleIsHomeBlur={handleIsHomeBlur} isHomeBlur={isHomeBlur}/> */}

                {/* <div className='flex w-full h-10' onClick={resetOrder}>KØR resetOrder</div> */}
        </div>
    );
};

export default Home;