import './App.css';
import { useEffect, useState } from 'react';
import News from './News';
import logo from './icon.png';

function App() {

  let [articles,setArticles]=useState([]);
  let [category,setCategory]=useState("india");
  // let [date,setDate]=useState("");

  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2024-01-01&apiKey=50adc61efba64530bec2771397767952`)
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles);
      console.log(news.articles)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[category])


  return (
    <div className="App">

      <header className="header">
        <div className='header-logo'>
          <img src={logo} alt="Logo" className="logo"/>
          <h1><span>News</span>Wave</h1>
        </div>
        <div className='inputs-fields'>
          {/* <input type='text' onChange={(event)=>{
            if(event.target.value!==""){
              setDate(event.target.value);
            }
            else{
              setDate("2023-12-24");
            }
          }}
           placeholder='YYYY-MM-DD'/> */}

          <input type='text' onChange={(event)=>{
            if(event.target.value!==""){
              setCategory(event.target.value);
            }
            else{
              setCategory("india");
            }
            
          }}  placeholder='Search News'/>
          
        </div>
          
      </header>

      <section className="articles">

       {
          articles.length!==0?
          articles.map((article) => {
          return(
            <News article={article}/>
          )
          })
          :
          <h3>No News Found For Searched Text</h3>
       }
       
      </section> 
    </div>
  );
}

export default App;
