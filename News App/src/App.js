import './App.css';
import { useEffect, useState } from 'react';
import News from './News';
import logo from './icon.png'
function App() {

  let [articles,setArticles]=useState([]);

  useEffect(()=>{
    fetch("https://newsapi.org/v2/everything?q=india&from=2023-12-16&apiKey=50adc61efba64530bec2771397767952")
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles);
      console.log(news.articles)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])


  return (
    <div className="App">

      <header className="header">
          <img src={logo} alt="Logo" className="logo"/>
          <h1><span>News</span>Wave</h1>
          <input type='text' placeholder='Search News'/>
      </header>

      <section className="articles">

       {
        articles.map((article) => {
          return(
            <News article={article}/>
          )
        })
       }
       
      </section>
      
      {/* <section className="news-articles">

       {
        articles.map((article) => {
          return(
            <News article={article}/>
          )
        })
       }
       
      </section> */}
      
    </div>
  );
}

export default App;
