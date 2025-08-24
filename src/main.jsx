import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './component/Layout.jsx'
import HeroSection from './component/Hero.jsx'
import About from './component/About.jsx'
import SearchPage from './component/SearchPage.jsx'
import CompanyDetailsPage from './component/CompanyDetailsPage.jsx'
import AddCompany from './component/AddCompany.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<HeroSection/>} />
      <Route path='about' element={<About/>} />
      <Route path='/search' element={<SearchPage/>} />
      <Route path='/company/:id' element={<CompanyDetailsPage />} />
      <Route path='/company/add' element={<AddCompany/>} />
    </Route>
  ) 
)

createRoot(document.getElementById('root')).render(

  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
