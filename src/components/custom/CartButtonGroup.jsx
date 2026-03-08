import React from 'react'
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";
import { GoPlus } from "react-icons/go";
import { GoDash } from "react-icons/go";


const CartButtonGroup = ({
    productId, categoryId, categoryName, subCategoryName, count, addProduct, subtractProduct }) => {

        //console.log('from CartButtonGroup: productId, categoryId, categoryName, subCategoryName', productId, categoryId, categoryName, subCategoryName, count)

{/* */}

return (
        <div className='border-solid border- 
        flex text-sm'>

            <div className='px-3 bg-white flex justify-center items-center text-black 
            border-solid border-black/20 border-y-1 border-s-1 border-e-none rounded-s-xl'
                onClick={() => {
                    addProduct(productId, categoryId, categoryName, subCategoryName)
                    console.log('(cartbtngrp) plus clicked..', productId, categoryId, categoryName, subCategoryName)
                }}><span className=''><GoPlus /></span></div>

                 <div className='px-1 bg-white
                 border-solid border-black/20 border-y-1'>{count}</div>
                
                <div className='px-3 bg-white rounded-e-xl
                flex justify-center items-center text-black/80
                border-solid border-black/20 border-y-1 border-e-1 '
                    onClick={() => {
                        subtractProduct(productId, categoryId)
                    }}><GoDash />
                    </div>
        </div>

    );
}

export default CartButtonGroup;