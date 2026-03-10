import {useMemo, useState} from 'react'
import { useOutletContext, Outlet } from 'react-router';
import { LiaCartPlusSolid } from "react-icons/lia";
import ProductDrawer from './product-drawer/ProductDrawer.jsx';


const ProductListItem = () => {
    const {catProducts, categoryImages, handleIsHomeBlur,  subtractProduct, addProduct} = useOutletContext();

    const [activeIndex, setActiveIndex] = useState(0);
    const [isBlur, setIsBlur] = useState(false)

    const handleProductDrawer = (id) => {
        //console.log('id from handleProductDrawer', id)
        setActiveIndex(id)
    }
    const handleIsBlur = () => {
      if (isBlur === false){
        //console.log(isBlur)
        setIsBlur(true)
      } else {
      setIsBlur(false)}
    }

//console.log('catproducts', catProducts)
return (
<div className='
border-solid border-blue-500 border-'>
    {catProducts.map((ele, index) => {
    let sub = Object.keys(ele).toString()
    let values = Object.values(ele).flat()
    let img_values = Object.values(categoryImages[index]).flat()
    //console.log('catproductvalues', values)
    //console.log('img_values, index', img_values, index)
        
        return (
        <div key={sub} className='mb-5 px-3'>
            {/* <div className={isBlur && 'blur-xs'}></div> */}
            {/* <div className='pt-5
            text-black/90 text-start text-lg
            '>
                {sub}
                </div> */}
                    
                    
            <div className='flex justify-between flex-wrap
            border- border-solid border-blue-500'>
            {values.map((ele, index) => {
                return (
                <div key={ele.name} className='pb-5 font-Montserrat cursor-pointer'>
                    <div onClick={() => {
                    handleIsHomeBlur();
                    handleIsBlur(); 
                    handleProductDrawer(ele.id)}} className='w-30 flex flex-col
                    border-solid border- border-pink-500'>
                        <div className={isBlur ? 'blur-xs' : ''}>
                            <img className='object-cover rounded-md
                            h-30 opacity-75 shadow-sm' alt='bla bla' src=
                            {img_values[index]} />
                            
                            <div className='flex flex-col border-solid border- border-green-500'>
                           
                            <div className='pt-1 text-left leading-5 flex h-12'>
                            {ele.name}</div>

                            <div className='flex flex-row justify-between items-end'>

                                <div className='text-xs font-semibol'>Pris {ele.price} kr</div>

                             <span onClick={(e) => {
                            e.stopPropagation();
                            addProduct(ele.id, ele.categoryId, ele.categoryName, ele.subCategoryName, img_values[index])}}
                            className='flex flex-row items-end'>
                                {ele.count !== 0 && <span className='
                                self-end font-semibol text-sm'>
                                {ele.count}</span>}
                                
                                <span className='flex self-end'><LiaCartPlusSolid className='ms-1 size-5 text-themeamber'/></span></span>
                                
                                </div></div></div>

                        
                    </div>
                            
                    <ProductDrawer
                    key={ele.id}
                    isActive={activeIndex === ele.id}
                    onShow={() => handleProductDrawer(0)}
                    id={ele.id}
                    name={ele.name}
                    categoryId={ele.categoryId}
                    categoryName={ele.categoryName}
                    subCategoryName={ele.subCategoryName}
                    image={img_values[index]}
                    price={ele.price}
                    count={ele.count}
                    subtractProduct={subtractProduct}
                    addProduct={addProduct}
                    handleIsHomeBlur={handleIsHomeBlur}
                    handleIsBlur={handleIsBlur} />
                    </div>
               
                );
                        
            })}
                </div></div>
            );
        }
    )}
    
    
                
   </div>
        
    );
}

export default ProductListItem