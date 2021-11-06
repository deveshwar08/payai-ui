import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Description from './components/Description';
import Schedule from './components/Schedule';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Description />
      <Schedule />
      <Footer />
    </div>
  );
}

export default App;
