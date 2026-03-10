import React from 'react'
import CartButtonGroup from './CartButtonGroup'
import { useOutletContext, useNavigate } from "react-router";
import { Button } from "@/components/ui/button"



const CartShowOrder = () => {
    const {order, total, handleSubmitOrder, subtractProduct,  addProduct, customerData, handleCustomerData, handleMobileNavState, resetOrder} = useOutletContext();
    //console.log('order from cartshow: ', order);
    let category;
    let navigate = useNavigate()


    return (
        <div className=''>
            <div className='pb-20 flex flex-col border-solid border- border-red-500 justify-center'>
        {order.map(cat => {
            if (cat.length != 0) {
            category = cat[0].categoryName.charAt(0).toUpperCase() + cat[0].categoryName.slice(1)
      
            return (
                <div key={category} className='px-2 py-4 text-left
                border-solid border- border-red-500'>
                    <div className='mb-2 font-Montserrat'>{category}</div>
                
                {cat.map(ele => {
                    return (
                        <div key={ele.id} className='py-3 flex
                        border-solid border-b-1 border-black/20'>
                            <div><img className='object-cover rounded-md w-17 h-17 opacity-70' alt='bla bla' src={ele.image} /></div>


                            <div className='border-solid border- border-green-500
                            ps-2 grow flex flex-col justify-between text-sm'>
                                <div className='pe-2 text-left font-Montserrat'>{ele.name}</div>
                                <div className='flex justify-between'>  
                               <div>{ele.price} kr</div>
                                <div className='cursor-pointer'>
                                <CartButtonGroup
                                productId={ele.id}
                                categoryId={ele.categoryId}
                                categoryName={ele.categoryName}
                                subCategoryName={ele.subCategoryName}
                                count={ele.count}
                                addProduct={addProduct}
                                subtractProduct={subtractProduct} /></div></div></div>
                        </div>)
                    })}
                </div>)
            }}
        )}
        <div className='border-solid border- border-red-500
        pt-5 pb-4 fixed bottom-0 left- flex flex-col items-center w-full max-w-[320px]
        backdrop-blur'>
            <div className='w-5 border-solid border-1 border-black/20'></div>
            <Button onClick={() => { handleMobileNavState('cartdetails_view'); navigate('/cartdetails')}} className='py-1 my-3 w-8/10 flex justify-around 
            hover:bg-themeamberextrawarm bg-themeamber rounded-xl font-Montserrat font-semibold text-lightwalnutbold cursor-pointer'><span>Til betaling</span>
                <span className=''>{total} kr </span>
            </Button>
            <div className='w-20 border-solid border-1 border-black/20'></div>
        </div>
        
    </div></div>);
}

export default CartShowOrder;