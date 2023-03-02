import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from '../pages/homePage';
import ProductPage from '../pages/productPage';
import ProductListPage from '../pages/productListPage';
import ContactPage from '../pages/contactPage';
import AdminPage from '../pages/adminPage';
import ErrorPage from '../pages/errorPage';
import LoginPage from '../pages/LoginPage'

const Page = () => {
    return(
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/app" element={<HomePage/>}/>
        <Route path="/products" element={<ProductListPage/>}/>
        <Route path="/product/:id" element={<ProductPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
        </Routes>
    );
}

export default Page;