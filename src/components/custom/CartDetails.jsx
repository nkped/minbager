import {useState } from 'react'
import { useOutletContext, useNavigate } from "react-router";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown } from 'lucide-react';
import { IoLogoReact } from "react-icons/io5";


const CartDetails = () => {
const {handleMobileNavState, customerData, handleCustomerData} = useOutletContext()

//console.log(formData)

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
    handleMobileNavState('checkout_view')
    navigate("/checkout")
  }

    
    return (
        <div className='flex flex-col gap-4 pt-5'>
          <span className='px-2 flex flex-col'>
            <div className='self-start bg-themeamberextrawarm p-1 rounded-sm text-black/70'>Afhentning</div>
            
            <div className='flex flex-col items-start'>
              <span className='font-semibold text-lg text-black/70'>{customerData.storeLocation}</span><span>Gadegade nr</span></div>

            <div className='pb-2 mt-5 text-left text-black/60 font-Montserrat border-b-1 border-solid border-black/20'>Bekræft venligst dato og tid</div>

            <label htmlFor='date' className='pb-2 mt-4 text-left text-black/60 font-Montserrat' >Dato
            <Input className='border-1 border-solid border-black/20 bg-white/90 cursor-pointer'
            id='date'
            name='date'
            type='text'
            value={customerData.date}
            onChange={handleChange}
            placeholder='i dag'
            /></label>
            
            <label htmlFor='time' className='pb-2 text-left text-black/60 font-Montserrat' >Tid
            <Input className='border-1 border-solid border-black/20 bg-white/90 cursor-pointer'
            id='time'
            name='time'
            type='text'
            value={customerData.time}
            onChange={handleChange}
            placeholder='07:35'
            /></label></span>

            <div className='pt-5 pb-4 fixed bottom-0 left- flex flex-col items-center w-full max-w-[320px]
            backdrop-blur'>
              <div className='w-5 border-solid border-1 border-black/20'></div>
              <Button className='py-1 my-3 w-8/10 flex justify-around 
              hover:bg-themeamberextrawarm bg-themeamber rounded-xl font-Montserrat font-semibold text-lightwalnutbold cursor-pointer' onClick={handleSubmit}>Checkout</Button>
              <div className='w-20 border-solid border-1 border-black/20'></div></div>
                
        </div>
    );
};

export default CartDetails;