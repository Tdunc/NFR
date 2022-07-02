import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Showcase from './components/Showcase';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Promo from './components/Banners/Promo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Showcase />
      <Projects />
      <Services />
      <Promo />
      <Footer />
    </div>
  );
}

export default App;
