import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signin } from "./pages/Signin";
import { About } from "./pages/About";
import { Homepage } from "./pages/Homepage";
import { Signup } from "./pages/Signup";
import { Message } from "./pages/Message";
import Dashboard from "./pages/Dashboard";
import { Header } from "./components/Header";
import { FooterComp } from "./components/FooterComp";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/message" element={<Message />} />
      </Routes>
      <FooterComp />
    </BrowserRouter>
  );
};

export default App;
