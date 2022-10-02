import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
// import Main from './Components/Main/Main';
// import Center from './Components/Center/Center';
import Form from './Components/Form/Form';





function App() {





  return (



    <div className="App">



      {/* if (spinner && !spinner.hasAttribute('hidden')) {
        spinner.setAttribute('hidden', 'true')
      } */}

      {/* <Route path={items ? "/Header": "/"} element={items ? <Header /> : <Form />} />
        <Route path="Header" element={<Header />} /> */}

      {/* <Form /> */}

      <Routes>
        <Route path="/" element={< Form />} />
        <Route path="Header" element={<Header />} />
      </Routes>

    </div>
  );
}

export default App;
