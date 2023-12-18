import React, { useState } from "react";
import "./App.css";
import About from "./customComponents/About";
import Navbar from "./customComponents/Navbar";
import Textform from "./customComponents/Textform";
import Alert from "./customComponents/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  // state variable for the mode
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);
  const onToggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("success", "Dark mode turned on");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("success", "Dark mode turned off");
    }
  };
  const showAlert = (type, message) => {
    setalert({
      type: type,
      msg: message,
    });
    //for fading out on own
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          Title="TextUtils"
          mode={mode}
          toggle={onToggle}
          showAlert={showAlert}
        ></Navbar>
        <Alert alert={alert}></Alert>
        <Routes>
          <Route path="/" element={<Textform mode={mode}></Textform>}></Route>
          <Route path="/about" element={<About mode={mode}></About>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
