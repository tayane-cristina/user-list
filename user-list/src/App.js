import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegistrationPage from './components/RegistrationPage';
import Home from './components/Home';
import { News } from './Data/News';

function App() {

  //STATES:
  const [news, setNews] = useState(News)


  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home news={news} setNews={setNews}/>}></Route>
          <Route path="/registrationpage" element={<RegistrationPage />}></Route>
        </Routes>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
