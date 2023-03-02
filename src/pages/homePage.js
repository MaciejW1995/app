import React from "react";
import Article from "../components/Article";

const articles = [
    {
        id: 1,
        title: "Czym jest makieta ?",
        author: "Wikipedia",
        text: "Modele przedstawiające wiernie lub w przybliżeniu obiekty (fabryki, mosty, lotniska itp.), sprzęt bojowy (czołgi, samoloty itp.) oraz ludzi, stosowane w wojsku do pozorowania działań, odwrócenia uwagi od rzeczywistych obiektów, ściągnięcia ognia przeciwnika, wprowadzenia w błąd co do wielkości sił, ilości i jakości uzbrojenia lub szkolenia własnych oddziałów."  
    },
    {
        id: 2,
        title: "Skala makiety",
        author: "Some Mr",
        text: "Obowiązkowy element każdej mapy i planu, który informuje nas jak bardzo obraz przedstawiony na mapie został pomniejszony w stosunku do rzeczywistości."  
    },
    {
        id: 3,
        title: "Z czego budujemy makiety ?",
        author: "Paweł Jakiś",
        text: "Podstawowym materiałem do budowy makiet jest płyta piankowa różnej grubości, wykończona papierem kredowym..."  
    },
]
const HomePage = () => {
    
    const artList = articles.map(item => (<Article key={item.id} title={item.title} author={item.author} text={item.text}/>))
    return (
        <div className="home">
            {artList}
        </div>
    )
}

export default HomePage
