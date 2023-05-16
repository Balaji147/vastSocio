import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const NewsList = () => {
const [articles, setArticles]=useState([])
useEffect(()=>{
    const getArticles = async()=>{
    const response = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-04-04&sortBy=publishedAt&apiKey=4c03e4582b214bd8abd0f679bc6749eb")
        setArticles(response.data.articles)
}
getArticles()
},[])

  return (
    <div>NewsItem</div>
  )
}