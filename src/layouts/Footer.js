import React from "react";
import { Routes, Route, useParams } from "react-router-dom";

const Footer = () => {
    const { page } = useParams();
    console.log(page)
    return(
        
        <div>
          <Routes>
            <Route path="/" exact element={<p>Jesteś na stronie głownej</p>} />
            <Route path="/products" element={<p>jesteś na stronie produktów</p>} />
            <Route path="/contact" element={<p>jesteś na stronie kontaktowej</p>} />
            <Route path="/login" element={<p>jesteś na stronie logowania</p>} />
          </Routes>
        </div>
    )
}

export default Footer;