import About from './pages/about.jsx';

import { useState, Fragment } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <main className='container section'>
        <About />
      </main>
    </Fragment>
  );
}

export default App;

