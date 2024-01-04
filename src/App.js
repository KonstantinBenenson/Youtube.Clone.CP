import React from "react";
import Home from "./components/Home.js";
import Header from "./components/Header.js";
import SearchPage from "./components/SearchPage.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <main className="App">
      <div className="app_page">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:searchTerm" element={<SearchPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </main>
  );
}

export default App;
