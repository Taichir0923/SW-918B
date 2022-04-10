import React from 'react';
import {createRoot} from 'react-dom/client';
import MyComponent from './views/App';

const root = createRoot(document.getElementById('root'));

root.render(
  <MyComponent />
);