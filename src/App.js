import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Additem from "./pages/Additem.jsx";
import Notfound from "./pages/Notfound.jsx";
import Items from "./pages/Items.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/items" element={<Items />} />
        <Route path="/additem" element={<Additem />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
