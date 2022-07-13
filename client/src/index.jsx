import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Error from './components/Errors';
import Header from './components/Header';
import Survey from './pages/Survey';
import Freelances from './pages/Freelances';
import Home from './pages/Home';
import Results from './pages/Results';
import { ThemeProvider } from './utils/context';

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    body {
      margin: 0;
    }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ThemeProvider>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="survey/:questionNumber" element={<Survey />} />
        <Route path="results" element={<Results />} />
        <Route path="freelances" element={<Freelances />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </ThemeProvider>
  </Router>
);
