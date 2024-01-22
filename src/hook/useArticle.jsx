import { useEffect, useState } from "react";


const useArticle = () => {

    const[articles, setArticles]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/articles')
        .then(res=>res.json())
        .then(data=>{
            setArticles(data);
        })
    },[])
    return[articles];
};

export default useArticle;