import { useState } from 'react';
import ListClientComponent from './components/ListClientComponent';
import './assets/css/app.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddClientComponent from './components/AddClientComponent';
function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListClientComponent />} />
            <Route path="/clients" element={<ListClientComponent />} />
            <Route path="/add-client" element={<AddClientComponent />} />
            <Route path="/edit-client/:id" element={<AddClientComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
