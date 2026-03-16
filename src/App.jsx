import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './Layout'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Touch from './Mutipulpages/Touch'
import AboutSection from './Mutipulpages/AboutSection'
import LegacySection from './Mutipulpages/LegacySection'
import Boiler from './Mutipulpages/Boiler'
import CrSheets from './Mutipulpages/CrSheets'
import Galvanized from './Mutipulpages/Galvanized'
import Stainless from './Mutipulpages/Stainless'
import StainlessCoils from './Mutipulpages/StainlessCoils'
import Blog from './Mutipulpages/Blog'

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'companyOver',
          element: <AboutSection />
        },
        {
          path: 'legacy', element: <LegacySection />
        }, // ✅
        {
          path: 'boiler-quality-plates', element: <Boiler />
        }, // ✅
        {
          path: 'cr-hr-sheets-coils', element: <CrSheets />
        },
        {
          path: 'galvanized-sheets-coils', element: <Galvanized />
        },
        {
          path: 'stainless-steel-long-products', element: <Stainless />
        },
        {
          path: 'stainless-steel-sheets-coils', element: <StainlessCoils />
        },
         {
          path: '/blog', element: <Blog/>
        },
        {
          path: 'product/:slug',
          element: <Product />
        },
        {
          path: 'touch',
          element: <Touch />
        },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )

}

export default App
