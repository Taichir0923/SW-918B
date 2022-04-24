import React from 'react';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './views/App';
import About from './views/About';
import Service from './views/Service';
import Contact from './views/Contact';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import store from './redux/store';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);