
// import './App.css'
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Hero/HeroSection';
import Features from './components/Fitur/Features';
import Footer from './components/Footer/Footer';
import Services from './components/services/Services';


function App() {
  return (
    <div className="App">
    <Navbar />
    <HeroSection />
    <Features />
    <Services />
    <Footer />
  </div>
);
}

export default App
