import './App.css';
import { useEffect, useState } from 'react';
import News from './News';
function App() {

  // let [articles,setArticles]=useState([]);

  // useEffect(()=>{
  //   fetch("https://newsapi.org/v2/everything?q=india&from=2023-12-16&apiKey=50adc61efba64530bec2771397767952")
  //   .then((Response)=>Response.json())
  //   .then((news)=>{
  //     setArticles(news.articles);
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   })
  // },[])


  return (
    <div className="App">

      <header class="header">

        <h1>News App</h1>
        <input type='text' placeholder='Search News'/>
      </header>
      
      <section class="news-articles">
        <News/>
        <News/>
        <News/>
        <News/>
      </section>
      
    </div>
  );
}

export default App;
