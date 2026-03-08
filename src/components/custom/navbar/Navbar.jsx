import React, { useState } from "react";
import './mobileNav.css'
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Navbar = ({mobileNavState, handleMobileNavState, customerData, handleCustomerData, isHomeBlur, handleIsHomeBlur, productCount, resetOrder}) => {

return (
        <header className="sticky blurBackground top-0 w-full border-solid border-b- border-themeamber">
          <div className='w-full '>
            <MobileNav 
            mobileNavState={mobileNavState}
            handleMobileNavState={handleMobileNavState}
            customerData={customerData}
            handleCustomerData={handleCustomerData}
            isHomeBlur={isHomeBlur}
            handleIsHomeBlur={handleIsHomeBlur}
            productCount={productCount}
            resetOrder={resetOrder}/>
        </div>
            <DesktopNav />
        </header>
    );
}


export default Navbar;