import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import HomePage from './pages/home/HomePage';
// import AboutUs from './pages/AboutUs';
// import Contact from './pages/Contact';
// import JobBootcamp from './pages/JobBootcamp';
import CoursePage from './pages/CoursePage'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/courses/:slug" element={<CoursePage />} />

      </Routes>
    </Router>
  );
}

export default App;
