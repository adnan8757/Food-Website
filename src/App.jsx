import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import OurFood from "./Components/OurFood";
import Home from "./Components/Home";
import Aboutus from "./Components/Aboutus";
import Signin from "./Components/Signin";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };
  return (
    <>
      <BrowserRouter>
        <Header count={count} />
        <Routes>
          <Route path="/" element={<Home handleAdd={handleAdd} />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/ourfood" element={<OurFood handleAdd={handleAdd} />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
