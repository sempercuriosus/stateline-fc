import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />

    <BrowserRouter>
      <App />
    </BrowserRouter>

    <Footer />
  </React.StrictMode>,
);

