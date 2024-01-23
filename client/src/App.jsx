import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Signin } from "./pages/Signin";
import { About } from "./pages/About";
import { Homepage } from "./pages/Homepage";
import { Signup } from "./pages/Signup";
import { Message } from "./pages/Message";
import { Dashboard } from "./pages/Dashboard";
import { Header } from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/message" element={<Message />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
