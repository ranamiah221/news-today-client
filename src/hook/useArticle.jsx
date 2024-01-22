import { useEffect, useState } from "react";


const useArticle = () => {

    const[articles, setArticles]=useState([]);
    useEffect(()=>{
        fetch('articles.json')
        .then(res=>res.json())
        .then(data=>{
            setArticles(data);
        })
    },[])
    return[articles];
};

export default useArticle;