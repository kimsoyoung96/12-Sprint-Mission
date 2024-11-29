import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Additem from './pages/Additem.jsx';
import Notfound from './pages/Notfound.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/items" element={<Home />} />
        <Route path="/additem" element={<Additem />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
