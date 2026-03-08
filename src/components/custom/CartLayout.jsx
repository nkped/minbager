import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { useOutletContext } from "react-router";


const CartLayout = () => {

const {order, addProduct, subtractProduct, customerData, handleCustomerData, handleMobileNavState, handleSubmitOrder, resetOrder} = useOutletContext();
//console.log('order ', order);
    let total = 0;
    order.forEach(ele => {
        if (ele.lenght != 0) {
            ele.forEach(e => total += e.price * e.count)
        }
        })
    //console.log('total', total)
    return (
        <div className='pt- flex flex-col w-full'>
            <Outlet context={{total, order, addProduct, subtractProduct, customerData, handleCustomerData, handleMobileNavState, handleSubmitOrder, resetOrder}} />
        </div>
    );
}

export default CartLayout;