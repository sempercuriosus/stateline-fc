import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Intro, About, Services, NewPatient, FAQ } from './pages';
import './styles/App.css';

function App() {
  return (
    <Fragment>
      <main className='container section'>
        <Intro />

        <Services />
        {/* <Contact /> */}

        <NewPatient />

        <About />

        <FAQ />
      </main>
      <Routes>
        <Route>Home</Route>
        <Route>About</Route>
        <Route>Contact</Route>
        <Route>Pediatric</Route>
        <Route>Prenatal</Route>
        <Route>Family</Route>
        <Route>FAQ</Route>
      </Routes>
    </Fragment>
  );
}

export default App;

