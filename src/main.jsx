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
import CompanyList from './component/CompanyList.jsx'
import UpdateCompany from './component/UpdateCompany.jsx'
import LoginPage from './component/LoginPage.jsx'
import { AuthProvider } from './component/context/AuthContext.jsx'
import ProtectedRoute from './component/ProtectedRoute.jsx'
import AuthHandle from './component/authHandle.jsx'
import UserProfile from './component/UserProfile.jsx'
import SendResumeForm from './component/SendResumeForm.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>


      <Route element={<ProtectedRoute />} >
        <Route path='/' element={<Layout />}>
          <Route path='' element={<HeroSection />} />
          <Route path='/about' element={<About />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/company/:id' element={<CompanyDetailsPage />} />
          <Route path='/company/add' element={<AddCompany />} />
          <Route path='/mycompany' element={<CompanyList />} />
          <Route path='/company/update/:id' element={<UpdateCompany />} />
          <Route path='/userProfile' element={<UserProfile />} />
          <Route path='/company/contact' element={<SendResumeForm />} />
        </Route>

      </Route>
      <Route path='/google/authHandle' element={<AuthHandle />} />
      <Route path='/user/login' element={<LoginPage />} />
    </>


  )
)

createRoot(document.getElementById('root')).render(

  <StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
