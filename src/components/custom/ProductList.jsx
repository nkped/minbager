import { useState, useMemo } from 'react'
import { useParams, Outlet } from 'react-router'
import { useOutletContext, useNavigate } from "react-router";
import { Button } from "@/components/ui/button"

const ProductList = () => {
    const {bakeryData, images, addProduct, subtractProduct, productCount, handleMobileNavState, handleIsHomeBlur, isHomeBlur} = useOutletContext();
    const params = useParams();
    const categoryName = params.id;
    //console.log('params.id from ProductList', params.id)
    // const header = categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
    //console.log('images from ProductList' , images)
    //console.log('ishomeblur', isHomeBlur)

    const navigate = useNavigate()

    let categoryImages//delete value

    let dataKeys = [];
    dataKeys = Object.keys(bakeryData);
    //console.log('dataKeys ', dataKeys)
    let catProducts;

    //console.log('images', images)
    dataKeys.forEach((key, index) => {
       if (key == categoryName) {
        //console.log('key', key, index)
         catProducts = bakeryData[key]  //index in bakeryData
         categoryImages = images[index][key]
         //console.log('ProdcutList categoryImages: ', categoryImages)
         //console.log('catProducts: ', catProducts)
         // 
        }
      })
    
    return (
      <div className='mt-8 px- max-w-sm
      border- border-solid border-red-500'>
        <div className=''>
          <Outlet context={{catProducts, productCount, categoryImages, handleIsHomeBlur, addProduct, subtractProduct}} />
        </div>


        <div className='absolute z-10 bottom-15 flex flex-row w-full cursor-pointer justify-center bg-transparent font-Montserrat
        border- border-solid border-red-500'>
        
          {productCount != 0 && !isHomeBlur &&  
          
          
          
          
          
          
          
          <div className='pt-5 pb-4 fixed bottom-0 left- flex flex-col items-center w-full max-w-[320px]
        backdrop-blur'>
            <span className='w-5 border-solid border-1 border-black/20'></span>
          <Button onClick={() => {
          navigate('/cart');
          handleMobileNavState('cart_view')}}
          className='py-1 my-3 w-8/10 flex justify-center hover:bg-themeamberextrawarm bg-themeamber rounded-xl font-Montserrat font-semibold text-lightwalnutbold cursor-pointer'>
            <span className='h-6 w-6 me-2 flex justify-center items-center
            text-xs bg-white/95 rounded-full font-semibold text-black'>
            {productCount}</span><span>Gå til kurv</span></Button>
            <div className='w-20 border-solid border-1 border-black/20'></div>
        </div>
            
            
            
            
            
            
            
            
            }</div></div>
    );

};

export default ProductList; 