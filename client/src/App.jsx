import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Shows from './Shows';
import SearchFilter from "./Searchfilter";

function App() {
return (
    <>
        <Navbar/>
        <div className="pageContainer">
            <SearchFilter/>

            <Shows/>
        </div>

        <Footer/>
    </>
)
}

export default App
