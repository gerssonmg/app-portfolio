import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import AppRoot from './app/index';
import Blog from './blog/Blog';

function App() {
  return (
    <div className="root">
      <Blog />
    </div>
  );
}

export default App;
