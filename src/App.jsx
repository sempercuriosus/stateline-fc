import Home from './pages/Home/home';
import './styles/App.css';
import { colors } from './styles/styles';

function App() {
  return (
    <>
      <main
        className='container section has-navbar-fixed-top box'
        style={{ backgroundColor: colors.BACKGROUND_COLOR }}>
        <Home />
      </main>
    </>
  );
}

export default App;

