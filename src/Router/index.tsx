import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";
import RecipesPage from "../pages/RecipesPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import RecipesSignUp from "../pages/RecipesSignUp";
import Profile from "../pages/Profile";
import HeaderMenu from "../components/HeaderMenu";
import { AnimatePresence } from "framer-motion";

const Router = () => {
    return (
        <AnimatePresence>
            <Routes>
                <Route element={<HeaderMenu />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/recipesSignUp" element={<RecipesSignUp />} />
                    <Route path="/recipesPage">
                        <Route path=":recipeId" element={<RecipesPage />} />
                    </Route>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/" element={<LandingPage />} />
                </Route>
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
            </Routes>
        </AnimatePresence>
    );
};

export default Router;
