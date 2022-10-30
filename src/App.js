
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Heading from './Component/Heading';
// import Counter from './Component/counter';
import Counter from './Component/Counter';


import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <>
        
          <Routes>
             <Route path="/" element={<Heading/>}/>
             <Route path='/counter' element={<Counter/>}/>
          </Routes>
          
      </>
    )
  }
}

export default App
