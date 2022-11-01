import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../components/Pages/Dashboard'
import LandingPage from '../components/Pages/LandingPage'
import RecipesPage from '../components/Pages/RecipesPage'
import SignIn from '../components/Pages/SignIn'
import SignUp from '../components/Pages/SignUp'
import RecipesSignUp from '../components/Pages/RecipesSignUp'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/singUp" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/recipesSingUp" element={<RecipesSignUp />} />
      <Route path="/recipesPage" element={<RecipesPage />} />
      <Route path="/landingPage" element={<LandingPage />} />
    </Routes>
  )
}

export default Router
