import React from 'react'
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";


const ProductButtonGroup = ({
    productId, categoryId, categoryName, image, subCategoryName, addProduct, subtractProduct }) => {

        //console.log('productId, categoryId, categoryName, subCategoryName', productId, categoryId, categoryName, subCategoryName)

{/* */}

return (
        <div className='border-solid border- 
        flex'>

            <div className='px-6 bg-themegray-bold flex flex-grow justify-center items-center rounded-s-sm'
                onClick={() => {
                    addProduct(productId, categoryId, categoryName, subCategoryName, image)
                    //console.log('plus clicked..', productId, categoryId, categoryName, subCategoryName)
                }}><TiPlus /></div>
                
                <div className='px-6 bg-themegray-bold border-l-1 rounded-e-sm border-themeamber 
                flex flex-grow justify-center items-center'
                    onClick={() => {
                        subtractProduct(productId, categoryId)
                    }}><TiMinus />
                    </div>
        </div>

    );
}

export default ProductButtonGroup;