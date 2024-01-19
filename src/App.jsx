import About from './pages/about.jsx';
import Services from './pages/services.jsx';
import Contact from './pages/contact.jsx';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <main className='container section'>
        <Services />
        <Contact />
        <About />
      </main>
    </Fragment>
  );
}

export default App;

