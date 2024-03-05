import Home from './pages/Home/home';
import './styles/App.css';
import { colors } from './styles/styles';
import Header from './components/ui/header.jsx';
import Footer from './components/ui/footer.jsx';
import Hero from './components/ui/hero.jsx';

function App() {
  return (
    <>
      <Header />

      <Hero />

      <main
        className='section has-navbar-fixed-top'
        style={{ backgroundColor: colors.BACKGROUND_COLOR }}>
        <Home />
      </main>

      <Footer />
    </>
  );
}

export default App;

