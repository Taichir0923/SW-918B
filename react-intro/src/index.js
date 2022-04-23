import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './views/App';
import About from './views/About';
import Service from './views/Service';
import {BrowserRouter , Routes , Route} from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
    </Routes>
  </BrowserRouter>
);