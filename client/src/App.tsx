import { ThemeProvider } from '@emotion/react';
import React from 'react';
import Main from './components/Main';

const App: React.FC = () => {
  const theme = {};
  return (

    <ThemeProvider theme={theme}>
    <Main />
  </ThemeProvider>
  );
};

export default App;
