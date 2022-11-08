import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Pages/Dashboard";
import LandingPage from "../components/Pages/LandingPage";
import RecipesPage from "../components/Pages/RecipesPage";
import SignIn from "../components/Pages/SignIn";
import SignUp from "../components/Pages/SignUp";
import RecipesSignUp from "../components/Pages/RecipesSignUp";
import Profile from "../components/Pages/Profile";
import HeaderMenu from "../components/HeaderMenu";

const Router = () => {
  return (
    <Routes>
      <Route element={<HeaderMenu />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recipesSignUp" element={<RecipesSignUp />} />
        <Route path="/recipesPage">
          <Route path=":recipeId" element={<RecipesPage />}></Route>
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<LandingPage />} />
      </Route>
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  );
};

export default Router;
