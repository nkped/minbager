import React, { useState } from 'react'
import { Outlet, NavLink, useParams } from 'react-router'
import './App.css'
import bakeryData from './data/categories.json'
import Navbar from './components/custom/navbar/Navbar'
import imageDb from './imageDb'

function App() {
const [order, setOrder] = useState([
  [], [], [], [], [], []
]);
const [mobileNavState, setMobileNavState] = useState('home_view')
const [isHomeBlur, setIsHomeBlur] = useState(false)
const [productCount, setProductCount] = useState(0)
const [customerData, setCustomerData] = useState({
    date: "01/01/2027",
    time: "07:35",
    storeLocation: "Banebrinken"
  });

const resetOrder = () => {
  setProductCount(0)
  setOrder([[], [], [], [], [], []])
  //console.log('order from app', order)
  let catArr = []
  let subCatArr = []

  for (const [key, values] of Object.entries(bakeryData)) {
    values.forEach(ele => catArr.push(ele))
    //catArr = Array [ of { subTitle: [subCat] }x8 subcategories (wheat, whole etc)   ]
  }
  //console.log('catArr', catArr)
  catArr.forEach(ele => subCatArr.push(Object.values(ele).flat()))

  subCatArr.forEach(ele => {
    if (ele.length > 0) {
    
      ele.forEach(ele =>  {
        ele.count = 0;
      console.log('ele.count', ele.count)
      })
    }
  })
  
  handleCustomerData({
    date: "01/01/2027",
    time: "07:35",
    storeLocation: "Banebrinken"})
  //console.log('supcatArr objvalues(ele)' , subCatArr)
  // console.log('subCatArr', subCatArr)
}

const handleMobileNavState = (navState) => {
  setMobileNavState(navState)
} 

const handleCustomerData = (data) => {
  setCustomerData(data)
}

const handleSubmitOrder = () => {
    let total = 0;
    order.forEach(item => total += item.price);
}

const handleIsHomeBlur = () => {
  console.log('isHomeBlur from app', isHomeBlur)
  if (isHomeBlur) {
    setIsHomeBlur(false)
    //setMobileNavState('home_view')
    } else {
  setIsHomeBlur(true)
  //setMobileNavState('offcanvas_view')
  }
}


const handleProductCount = (toBeCounted) => {
let count = 0
//console.log('toBeCounted', toBeCounted)

  toBeCounted.forEach(ele => {
  if (ele.lenght != 0) {
      ele.forEach(e => count += e.count)
  }
  //console.log('count', count) 
  setProductCount(count)
  })
}


let images = imageDb()
//console.log('images from App', images)

const addProduct = (productId, categoryId, categoryName, subCategoryName, image) => {
let orderCopy = [...order];
let productInOrder;
productInOrder = orderCopy[categoryId].find(ele => ele.id === productId);

if (!productInOrder) {
  //console.log('productInOrder: ', productInOrder);
  let subCatObj = bakeryData[categoryName].find(ele => Object.keys(ele) == subCategoryName)
  //console.log('subcatobj', subCatObj)
  let subCatArr = Object.values(subCatObj).flat()
    let newProduct = subCatArr.find((ele) => ele.id == productId)
    //console.log('ele[index].id', ele[index+1].id)
    //ele[index].id == productId
    newProduct.count++;
    newProduct.image = image;
    //console.log('newProduct ', newProduct);
    orderCopy[categoryId].push(newProduct);

    handleProductCount(orderCopy)

    setOrder([...orderCopy])
  } else {
    productInOrder.count++;
    handleProductCount(orderCopy)
    setOrder([...orderCopy]);
  }
  
}

const subtractProduct = (productId, categoryId) => {
  const orderCopy = [...order];
  // console.log('productId from subtractOrder', productId);
  // console.log("categoryId from subtractOrder: ", categoryId);
  // console.log("orderCopy from subtractOrder: ", orderCopy)
    const productInOrder = orderCopy[categoryId].find(ele => ele.id === productId);
  // console.log("pFromOrder from subtract: ", pFromOrder);
if(!productInOrder || productInOrder.count === 0) {
        console.log('product does not exist in cart');
        return;
} else if (productInOrder.count === 1) {
        productInOrder.count--;
        handleProductCount(orderCopy)
        //console.log('productInOrder.count ', productInOrder.count);
        const index = orderCopy[categoryId].findIndex(e => e.id === productId);
        //console.log("index: ", index);
        //console.log('orderCopy[categoryId] ', orderCopy[categoryId])
        orderCopy[categoryId].splice(index, 1);
        setOrder([...orderCopy]);
} else {
    productInOrder.count--;
    handleProductCount(orderCopy)
    setOrder([...orderCopy]);
}
//console.log('orderCopy from subtract ', orderCopy);
}



  return (
    <div className='mx-auto relative border- border-solid border-pink-500
     max-w-[320px] h-full bg-themeambercold'>
    <div className='w-full'>
        <Navbar 
        productCount={productCount}
        mobileNavState={mobileNavState} 
        handleMobileNavState={handleMobileNavState}
        customerData={customerData}
        handleCustomerData={handleCustomerData}
        isHomeBlur={isHomeBlur} 
        handleIsHomeBlur={handleIsHomeBlur}
        resetOrder={resetOrder} />

     <Outlet context={{
       customerData,
       handleCustomerData,
       isHomeBlur,
       handleIsHomeBlur,
       handleMobileNavState,
       resetOrder,
       handleSubmitOrder,
       subtractProduct,
       addProduct,
       productCount,
       images,
       order,
       bakeryData,
       resetOrder
        }}/>
    </div></div>
  )
}

export default App
