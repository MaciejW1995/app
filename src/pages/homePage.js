import React from "react";
import Article from "../components/Article";

const articles = [
    {
        id: 1,
        title: "What is love ?",
        author: "Haddaway",
        text: "Baby dont hurt me Dont hurt me No more"  
    },
    {
        id: 2,
        title: "Motivation",
        author: "Some Mr",
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."  
    },
    {
        id: 3,
        title: "Crypto",
        author: "Charles Ponzi",
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."  
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