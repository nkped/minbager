import './burgerIcon.css'
import { useState } from 'react';


const HamburgerIcon = ({handleIsHomeBlur, isHomeBlur}) => {
    const [isBtnPressed, setIsBtnPressed] = useState('btn-not-pressed')
    
    // console.log('isBtnPressed: ', isBtnPressed)
    //console.log('ishomeblur from HamIcon', isHomeBlur, handleIsHomeBlur)
    
    return (
        <>
        <button  onClick={() => {handleIsHomeBlur()}} 
        className={ isHomeBlur ? 'pl-1 buttonsvg btn-pressed cursor-pointer' : 'pl-1 buttonsvg btn-not-pressed cursor-pointer'}
        >
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100"
            className={isHomeBlur ? 'hamburger btn-pressed' : 'hamburger btn-not-pressed'}>

                <rect
                    className='line top'
                    width='80'
                    height='10'
                    rx='5'>
                </rect>
                <rect
                    className='line middle'
                    width='80'
                    height='10'
                    rx='5'>
                </rect>
                <rect
                    className='line bottom'
                    width='80'
                    height='10'
                    rx='5'>
                </rect>
            </svg>
        </button>
    </>
    );
}


export default HamburgerIcon