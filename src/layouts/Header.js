import React from "react";
import { Route, Routes } from "react-router-dom";
import img1 from "../images/header1.jpg"
import img2 from "../images/header2.jpg"
import img3 from "../images/header3.jpg"
import img4 from "../images/header4.jpg"
import "../styles/Header.css"

const Header = () => {
    const images = [img1, img2, img3];
    const index = Math.floor(Math.random()*3);

    const randomImg = images[index];
    return(
        <>
            <Routes>
             <Route path="/" element={
                <img src={randomImg} alt="city" />
            } />
            <Route path="/products" element={
                <img src={img1} alt="city" />
            } />
            <Route path="/product/:id" element={
                <img src={img1} alt="city" />
            } />
            <Route path="/contact" element={
                <img src={img2} alt="city" />
            } />
            <Route path="/admin" element={
                <img src={img3} alt="city" />
            } />
            <Route path="/login" element={
                <img src={randomImg} alt="city" />
            } />
            <Route path="*" element={
                <img src={img4} alt="city" />
            } />
            </Routes>
            
        </>
    )
}

export default Header;