import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import About from './pages/about.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <About />
    <Footer />
  </React.StrictMode>,
);

