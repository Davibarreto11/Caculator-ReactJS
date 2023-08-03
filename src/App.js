import React from 'react';

import GlobalStyle from './styles/global';

import Calculator from './pages/Calculator';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Calculator />
    </div>
  );
}

export default App;
