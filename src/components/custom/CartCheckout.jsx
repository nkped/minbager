import React from 'react'
import { useOutletContext, useNavigate } from 'react-router'
import { Button } from "@/components/ui/button"
import { LiaTimesSolid } from "react-icons/lia";
import { FaStarOfLife } from "react-icons/fa6";


const CartCheckout = () => {
    const {total, order, resetOrder, customerData, handleCustomerData,  handleMobileNavState} = useOutletContext()
 let category;
 let navigate = useNavigate()

    return (
        <div className=''>
            <div className='mx-2 pt-5 flex flex-col items-start font-Montserrat border-t-1 border-solid border-black/20'>
                <div className='flex flex-col'>
                    
                    <span className='flex flex-row'>
                        <span className='me-1 flex items-center'><FaStarOfLife className='fill-themeamber size-3'/></span>{customerData.storeLocation}</span>

                    <span className='flex flex-row'>
                        <span className='me-1 flex items-center'><FaStarOfLife className='fill-themeamber size-3'/></span>Gadenavn nr</span>

                        <span className='flex flex-row'>
                        <span className='me-1 flex items-center'>
                            <FaStarOfLife className='fill-themeamber size-3'/></span>Afhentes kl<span className='ps-2'>{customerData.time}</span></span>


                
                
                <span className='flex flex-row'><span className='me-1 flex items-center'>
                            <FaStarOfLife className='fill-themeamber size-3'/></span>Ordre Nummer C39</span></div>  

           </div>
           
            <div className='mx-2 mt-5 pt-2 text-left text-xl  font-Montserrat border-b-1 border-solid border-black/20'>Kvittering</div>
            <div className='pt-1 flex flex-col border-solid border- border-red-500 justify-center'>
        {order.map(cat => {
            if (cat.length != 0) {
            category = cat[0].categoryName.charAt(0).toUpperCase() + cat[0].categoryName.slice(1)
      
            return (
                <div key={category} className='px-2'>
                    {/* <div className='mb-2 text-sm font-Montserrat'>-{category}-</div> */}
                
                {cat.map(ele => {
                    return (
                        <div key={ele.id} className='py-2 flex justify-between text-md font-Montserrat'>
                        <span>{ele.name}</span>
                        <span className='flex flex-row items-center'>
                            <span> {ele.count} </span> <span><LiaTimesSolid className='mx-1 size-3'/></span> {ele.price} kr </span></div>)

                    })}
                </div>)
            }}
        )}

        <div className='mx-2 me- my-2 pt-1 flex justify-between text-xl border-t-1 border-solid border-black/20'><span>Total</span><span>{total} kr</span></div>
        
                      <div className='pt-5 pb-4 fixed bottom-0 left- flex flex-col items-center w-full max-w-[320px]
        backdrop-blur'>
            <div className='w-5 border-solid border-1 border-black/20'></div>
           <Button onClick={() => {navigate('/'); resetOrder()}} className='py-1 my-3 w-8/10 flex justify-around 
            hover:bg-themeamberextrawarm bg-themeamber rounded-xl font-Montserrat font-semibold text-lightwalnutbold cursor-pointer'>Email kvittering</Button>
            <div className='w-20 border-solid border-1 border-black/20'></div></div>
        
    </div></div>);
}


export default CartCheckout;