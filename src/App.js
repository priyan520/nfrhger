import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Slider from './components/Slider';

function App() {
  return (
      <>
          <Navbar/>
          <Slider/>
          <Product/>
          <Card/>
          <Footer/>
      </>
  );
}

export default App;
