import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AddArticle from './pages/AddArticle';
import ViewArticle from './pages/ViewArticle';
import Topics from './pages/Topics';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Header/>
    <main>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/addarticle" element={<AddArticle/>}/>
      <Route path="/article/:id" element={<ViewArticle/>}/>
      <Route path="/topics" element={<Topics/>}></Route>
      </Routes>
    </main>
    <Footer/>
    </div>
  )
}

export default App
