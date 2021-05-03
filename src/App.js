import React, { useEffect, useState } from 'react';
import axios from  'axios'; 
import './App.css';
import NewsList from './components/newsList';
import SearchBar from './components/searchBar';
import logo from './y18.gif';

function App() {
 const [news, setNews] = useState([])
 const [searchQuery, setSearchQuery] = useState('platypus')
 const [isLoading, setIsloading] = useState(true)
  
  useEffect(() => {
    async function fetchNews() {
      try {
           axios.get(`http://hn.algolia.com/api/v1/search?query=${searchQuery}&tags=story`)
          .then(

            (response) =>{ 
            const data = response.data.hits;
            setNews(data);
            setIsloading(false)

            }
          );
  } catch(error) {
      
      alert ('fatal error')}
    }

    fetchNews();
    //setInterval(fetchNews, 4000); 

  },[searchQuery])
  
  

function handleSearch(inputValue) {
  setSearchQuery(inputValue) 
}





  return (
    <div className="App">

      <div className="body">
        <div className="header">
          <img src={logo} alt="logo" className="logo"/>
          <div className="navBar">
            <a className="homeButton" href="">Hacker News</a>
            <span className="navLink">
              <a className="navButton" href="">new</a>|
              <a className="navButton"  href="">past</a>|
              <a className="navButton"  href="">comments</a>|
              <a className="navButton"  href="">ask</a>|
              <a className="navButton"  href="">show</a>|
              <a className="navButton"  href="">jobs</a>|
              <a className="navButton"  href="">submit</a>
            </span>
          </div>          
          <a className="LoginButton"  href="">Login</a>
        </div>
        <NewsList  news={news} isLoading={isLoading} /> 
        <footer>
          <span className="navFooter">
              <a className="footerButton" href="">Guidelines</a>|
              <a className="footerButton"  href="">FAQ</a>|
              <a className="footerButton"  href="">Lists</a>|
              <a className="footerButton"  href="">API</a>|
              <a className="footerButton"  href="">Security</a>|
              <a className="footerButton"  href="">Legal</a>|
              <a className="footerButton"  href="">Apply to YC</a>|
              <a className="footerButton"  href="">Contact</a>
            </span>
          <SearchBar search={handleSearch}  />
        </footer>
      </div>
    </div>
    
  )
}

export default App;
