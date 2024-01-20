import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
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
      <Routes>
        <Route>Home</Route>
        <Route>About</Route>
        <Route>Contact</Route>
        <Route>Pediatric</Route>
        <Route>Prenatal</Route>
        <Route>Family</Route>
        <Route></Route>
      </Routes>
    </Fragment>
  );
}

export default App;

