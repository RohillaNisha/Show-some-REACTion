import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Shows from './Shows';
import Searchfilter from './Searchfilter';


function App() {
  return (
    <>
    
  
      <Navbar/>
      <div className="pageContainer">
      <Searchfilter/>
      
      <Shows/>
      </div>

     <Footer/> 
   
    </>
  );
}

export default App;
