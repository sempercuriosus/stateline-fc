import { Fragment } from 'react';
import { Intro, About, Services, NewPatient } from './pages';
// import Services from './pages/services.jsx';
// import Contact from './pages/contact.jsx';
import '../src/App.css';

function App() {
  return (
    <Fragment>
      <main className='container section'>
        <Intro />

        <Services />
        {/* <Contact /> */}

        <NewPatient />

        <About />
      </main>
    </Fragment>
  );
}

export default App;

