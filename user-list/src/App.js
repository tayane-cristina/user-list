import './App.css';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegistrationPage from './components/RegistrationPage';
import Home from './components/Home';


function App() {

  //STATES:
  const [news, setNews] = useState([])
  const [newsTitle, setNewsTitle] = useState("")
  const [theNews, setTheNews] = useState("")

  const url = "http://localhost:3000/news";

  useEffect(() => {
     async function fetchNews() {

      try {
        const res = await fetch(url);
        const data = await res.json()
        setNews(data)

      } catch (error) {
        console.log(error.message)
      }      
    }
    fetchNews()
  }, [])

  

  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home news={news} setNews={setNews}/>}></Route>
          <Route path="/registrationpage" element={<RegistrationPage 
          newsTitle={newsTitle} 
          setNewsTitle={setNewsTitle} 
          theNews={theNews} 
          setTheNews={setTheNews}
          news={news}
          setNews={setNews}
          url={url}
          />}>
          </Route>
        </Routes>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
