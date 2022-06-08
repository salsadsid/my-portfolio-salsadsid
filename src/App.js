import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/Shared/Navbar'
import Home from './components/Home/Home';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
