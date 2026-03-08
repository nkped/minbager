import './mobileNav.css'

import {useNavigate} from "react-router";
import {NavLink, useMatch} from 'react-router-dom'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import OffCanvasMenu from './OffCanvasMenu.jsx'
import HamburgerIcon from './HamburgerIcon.jsx'
import { HiArrowLongLeft } from "react-icons/hi2";
import { LiaShoppingCartSolid } from "react-icons/lia";


const MobileNav = ({mobileNavState, handleMobileNavState, customerData, handleCustomerData, isHomeBlur, handleIsHomeBlur, productCount, resetOrder}) => {

console.log('isHomeBlur from mobilenav', isHomeBlur)
  const homeView = mobileNavState === 'home_view'
  const productListView = mobileNavState === 'product_list_view'
  const cartView = mobileNavState === 'cart_view'
  const cartDetailsView = mobileNavState === 'cartdetails_view'
  const checkoutView = mobileNavState === 'checkout_view'
  // const offCanvasView = mobileNavState === 'offcanvas_view'
  //console.log('mobileNavState from mobilnav', mobileNavState)
  let navigate = useNavigate();

  // const MenuItem = ({ to, children }) => {
  //   // useMatch returns a match object when the current URL matches the pattern
  //   const match = useMatch({ path: to, end: true });
  //   const cls = match ? 'text-red-400' : 'text-black';
  //   return (
  //     <NavigationMenuLink asChild>
  //       <NavLink to={to} className={cls}>
  //         {children}
  //       </NavLink>
  //     </NavigationMenuLink>
  //   );
  //   };<img className='brightness-52 opacity-85' alt='bakery store front' src='/src/assets/otherImages/bakeryHome.png'/>
  //bg-[url(/src/assets/otherImages/bakeryHome.png)] g-cover
  //border-2 border-solid border-red-500


    return (
      <div className='md:hidden w-full'>

         {homeView && <div className="h-50 flex relative ">
          <div className='flex w-full h-full bg-[url(/src/assets/otherImages/bakeryhero.png)] bg-cover 
          '>
            <div className={isHomeBlur ? 'backdrop-blur flex w-full h-full' : 'flex w-full h-full'}>

              <div className={isHomeBlur ? 'pb-4 blur-xs w-full h-full flex justify-center items-end' : 'pb-4 w-full h-full flex justify-center items-end'}>
                <span className='py-2 px-4 flex flex-col 
                text-left font-bold text-white/90 font-Montserrat bg-black/70 backdrop-invert-90 backdrop-opacity-10'>
                <span className='text-md'>Butik valgt</span>
                <span className=' text-xl'>{customerData.storeLocation}</span></span></div>

              <span className='absolute z-5 top-0 left-0'>
          <HamburgerIcon className='' isHomeBlur={isHomeBlur} handleIsHomeBlur={handleIsHomeBlur}/>
          </span>
          <span className='absolute z-1 top-0 left-0'>
          <OffCanvasMenu className='' handleIsHomeBlur={handleIsHomeBlur} isHomeBlur={isHomeBlur}/></span></div></div></div>}

         {productListView && <div className="flex flex-col font-Montserrat">
          <div className="h-12 flex justify-around items-center">
            <div className='text-sm cursor-pointer' onClick={() => {
              navigate("/");
              handleMobileNavState('home_view');
              resetOrder()}}>luk</div>
              <div className='text-lg'>{customerData.storeLocation}</div>
              <div className='text-sm cursor-pointer'>Smiley-info</div></div>
              {isHomeBlur ?
               <div onClick={() => {
                navigate('/cart');
                handleMobileNavState('cart_view')}}  
                className='h-12 flex justify-end items-center cursor-pointer
                border- border-solid border-red-500'>
                  <div className="flex items-center">
                    <span className="h-6 w-6 bg-white/95 rounded-full">{productCount}</span>
                    <span className="pe-2"><LiaShoppingCartSolid className='size-7 text-themeamber'/></span></div></div> : 
                <div className='flex w-full h-12 justify-around items-center text-black/70
                border- border-solid border-red-500'>
                  <NavLink to="/products/bread" className='group'>
                  <span className="group-[.active]:underline group-[.active]:underline-offset-8">Bread</span></NavLink>
                  <NavLink to="/products/cake" className='group'><span className="group-[.active]:underline group-[.active]:underline-offset-8">Cake</span></NavLink>
                  <NavLink to="/products/drinks" className='group'><span className="group-[.active]:underline group-[.active]:underline-offset-8">Drinks</span></NavLink></div>}</div>}
        
        
        {cartView && <div className="flex flex-col font-Montserrat">
          <div className="h-12 flex justify-around items-center">
            <div className='text-sm cursor-pointer' onClick={() => {
              navigate("/");
              handleMobileNavState('home_view');
              resetOrder()}}>luk</div>
              <div className='text-lg'>{customerData.storeLocation}</div>
              <div className='text-sm cursor-pointer'>Smiley-info</div></div>
            <div className='ps-3 h-12 flex justify-start items-center
          text-xl' onClick={() => {
            handleMobileNavState('product_list_view');
            navigate("/products/bread")}}>
            <span className='ps- pe-1 flex items-center cursor-pointer'><HiArrowLongLeft className='size-5'/></span>
            <span className='ps-1 cursor-pointer'>Indkøbskurv</span></div>
            </div>}

        {cartDetailsView && <div className="flex flex-col font-Montserrat">
          <div className="h-12 flex justify-around items-center">
            <div className='text-sm cursor-pointer' onClick={() => {
              navigate("/");
              handleMobileNavState('home_view');
              resetOrder()}}>luk</div>
              <div className='text-lg'>{customerData.storeLocation}</div>
              <div className='text-sm cursor-pointer'>Smiley-info</div></div>
            <div className='ps-3 h-12 flex justify-start items-center
          text-xl' onClick={() => {
            handleMobileNavState('cart_view');
            navigate("/cart")}}>
            <span className='pe-1 flex items-center  cursor-pointer'><HiArrowLongLeft className='size-5'/></span>
            <span className='ps-1 cursor-pointer'>Din Bestilling</span></div></div>}


        {checkoutView && <div className="flex flex-col font-Montserrat">
          <div className="h-12 flex justify-around items-center">
            <div className='text-sm cursor-pointer' onClick={() => {
              navigate("/");
              handleMobileNavState('home_view');
              resetOrder()}}>luk</div>
              <div className='text-lg'>{customerData.storeLocation}</div>
              <div className='text-sm cursor-pointer'>Smiley-info</div></div>
          <div className="ps-2 h-12 flex items-center text-lg font-Montserrat">Tak for din ordre!</div></div>}

      </div>
    );
}


export default MobileNav