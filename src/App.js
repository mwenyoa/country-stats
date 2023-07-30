import React from 'react'; 
import { Routes, Route } from 'react-router-dom';
import NotFound from './notfound';
import { Countries, Country } from './pages';
import './App.css';


function App() {
  return (
    <div className="App">
      {/* App Routes */}
      <Routes>
         <Route path='/' element={<Countries />} />
         <Route path='countries/:id' element={<Country />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
