// App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import ServicesGrid from './pages/services/servicegrid';
import ContactPage from './pages/contact/contact';
import ScrollToTopButton from './components/scrolltoptobottom';

function App() {
  return (
    <Router>
      <div className="font-montserrat">
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesGrid />} />
          <Route path="/contact" element={<ContactPage />} />
         
        </Routes>

        <Footer />
         <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
