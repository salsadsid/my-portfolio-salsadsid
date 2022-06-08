import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/Shared/Navbar'
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Projects from './components/Projects/Projects';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
      </Routes>
    </div>
  );
}

export default App;
