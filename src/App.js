import React from 'react';
import AppRouter from './AppRouter';
import NestAppRouter from './NestAppRouter';

function App() {
  return (
    <div className="App">
      <AppRouter />
      <NestAppRouter />
    </div>
  );
}

export default App;
