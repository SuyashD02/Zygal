
import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import Avatar from "./Components/Avatar";
import Carousel from "./Components/Carousel";

const App = () => {
  
  return (
    <div>   
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainPage/>}/>
        <Route path="/about" element={<Avatar/>}/>
        <Route path="/info" element={<Carousel/>}/>
      </Routes>
      </BrowserRouter>   
    </div>
  );
};

export default App;

