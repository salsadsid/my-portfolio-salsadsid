import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/Shared/Navbar'
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Shared/Footer';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
