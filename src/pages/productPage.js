import React from "react";
import Product from '../components/Product';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ProductPage = () => {
    const { id } = useParams(); 
    return (
        <div>
        <h3>Strona produktu:</h3>
        <Product id={id}/>
        <Link to="/products">Powrót do produktów</Link>
        </div>
    );
} 

export default ProductPage