import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Button from '@mui/material/Button';
import AppRoot from './app/index';
import Blog from './blog/Blog';

function ButtonUsage() {
  return <Button variant="contained">Hello world - v2</Button>;
}

function App() {
  return (
    <div className="root">
      <Blog />
    </div>
  );
}

export default App;
