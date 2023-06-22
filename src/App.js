import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Service from './components/Service/Service'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Service/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
