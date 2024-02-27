import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import Header from './components/ui/header.jsx';
import Footer from './components/ui/footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />

    <App />

    <Footer />
  </React.StrictMode>,
);

