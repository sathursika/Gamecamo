import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Reviews from './pages/Review';

function App() {
  return (
    <div>
      <Home/>
      <About/>
      <Projects/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
