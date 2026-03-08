import React from 'react'
import { StrictMode } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import Home from './components/custom/home/Home.jsx'
import CartLayout from './components/custom/CartLayout.jsx'
import {Test} from './components/custom/Test'
import TestMinion from './components/custom/TestMinion'
import NotFound from './components/custom/NotFound'
import CartShowOrder from './components/custom/CartShowOrder'
import CartCheckout from './components/custom/CartCheckout'
import ProductList from './components/custom/ProductList'
import ProductListItem from './components/custom/ProductListItem'
import CartDetails from './components/custom/CartDetails'

const router = createBrowserRouter([
    {
        Component: App,
        children: [
            {
                index: true, Component: Home
            },
            {
                Component: ProductList, 
                children: [{
                    path:'products/:id', Component: ProductListItem
                }]
            },
            {
                Component: CartLayout,
                children: [
                    {
                    path:'cart', Component: CartShowOrder
                    },
                    {
                    path:'checkout', Component: CartCheckout
                    },
                    {
                    path:'cartdetails', Component: CartDetails
                    }
                ]
            },
            {
                path:'/test', Component: Test,
                children: [{
                    path:'/test/minion', Component: TestMinion
                }]
            },
            {
                path:`*`, Component: NotFound
            },
        ]
    },

])

//can also be document.getElementById('root')!).render to skip children obj from <App />
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />

)
