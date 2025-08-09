import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HomeLoan from "./pages/HomeLoan";
import BusinessLoan from "./pages/BusinessLoan";
import PersonalLoan from "./pages/PersonalLoan";
import Insurance from "./pages/Insurance";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <ThemeProvider>
      <div className="App min-h-screen flex flex-col transition-colors duration-300">
        <BrowserRouter>
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home-loan" element={<HomeLoan />} />
              <Route path="/business-loan" element={<BusinessLoan />} />
              <Route path="/personal-loan" element={<PersonalLoan />} />
              <Route path="/insurance" element={<Insurance />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;