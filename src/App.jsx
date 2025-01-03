import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ViewArticle from './pages/ViewArticle';
import Topics from './pages/Topics';
import Header from './components/Header';
import Footer from './components/Footer';
import My404Component from './components/My404Component';

function App() {
  return (
    <div>
    <Header/>
    <main>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/article/:id" element={<ViewArticle/>}/>
      <Route path="/topics" element={<Topics/>}></Route>
      <Route path='*' exact={true} element={<My404Component/>}/>
      </Routes>
    </main>
    <Footer/>
    </div>
  )
}

export default App
