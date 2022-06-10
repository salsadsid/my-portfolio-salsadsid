import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/Shared/Navbar'
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Shared/Footer';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import ProjectDetail2 from './components/ProjectDetail/ProjectDetail2';
import ProjectDetail3 from './components/ProjectDetail/ProjectDetail3';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/project1' element={<ProjectDetail></ProjectDetail>}></Route>
        <Route path='/project2' element={<ProjectDetail2></ProjectDetail2>}></Route>
        <Route path='/project3' element={<ProjectDetail3></ProjectDetail3>}></Route>
      </Routes>
    </div>
  );
}

export default App;
