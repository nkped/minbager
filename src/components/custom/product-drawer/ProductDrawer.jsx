import { ChevronDown } from 'lucide-react';
import ProductButtonGroup from "../ProductButtonGroup";


const ProductDrawer = ({isActive, onShow, id, name, categoryId, categoryName, subCategoryName, image, price, count,  addProduct, subtractProduct, handleIsHomeBlur, handleIsBlur}) => {
    //console.log('image',image)
    return (
    <>
    { isActive && 
        <div className='bg-themeamber z-20 fixed bottom-0 left-0'>
            <img src={image} className="opacity-70" />
            <div className="text-left font-bold">
                <div className='border- border-solid
                flex justify-between'>
            
                <h1 className="border- border-solid
                max-w-50 pb-1 self-center ps-2 text-xl text-lightwalnutbold leading-6" >{name}</h1>
            
            <button className='border- border-solid
                flex flex-col justify-center 
                ps-2 pe-3 pt-1 pb-2 rounded-bl-md
                text-lightwalnutbold bg-themegray-bold' onClick={(e) => {onShow(); e.stopPropagation(); handleIsHomeBlur(); handleIsBlur()}}>
                
                    <span className=''>shop</span>
                    <span className=''>videre</span>
                </button>
                
            </div>
            <div className="font-Montserrat px-2 pt- pb-3 leading-4 text-sm font-semibold text-lightwalnut">
                <span className='pe-10'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet enim euismod. Amet, n sit amet enim euismod adipiscing elit. Ssit amet, consectetur adipiscing elit.
                </span>
            </div>

            <div className='flex justify-between ps-2 pe-3'>
                    <div className="text-lightwalnut font-semibold text-md">Pris {price}kr</div>
                    <div className="text-lightwalnut font-semibold text-md">3 for kun 85kr</div>
                </div>

            <div className='border- border-solid 
            pt-3 flex justify-between items-start'>
                <div className="border- border-solid  
                ps-2 text-lightwalnutbold text-lg">Antal i kurv: {count}</div>
                
                <div className="border- border-solid 
                flex h-6 me-1 text-lightwalnutbold
                rounded-tl-lg rounded-bl-sm" >
                    <span className='flex'>
                        <ProductButtonGroup 
                        name={name}
                        image={image}
                        price={price}
                        count={count}
                        productId={id}
                        categoryName={categoryName}
                        subCategoryName={subCategoryName}
                        categoryId={categoryId}
                        subtractProduct={subtractProduct}
                        addProduct={addProduct} /></span></div>

                </div>

                <div className='border- border-solid 
                mt-5 mb- ps-2 pe-3
                flex items-center'>
                
                    <div className="text-lightwalnut 
                    me-2 flex">
                        <div className='text-sm' >Allergener</div>
                        <span className='border- border-solid
                        flex'>
                        <ChevronDown size={23}/>
                    </span></div>

                    <div className="text-lightwalnut 
                    flex">
                        <div className='text-sm'>Varedekleration</div>
                        <span className=''>
                        <ChevronDown size={23}/>
                    </span></div>
                </div></div></div>}
        </>
    );
}


export default ProductDrawer