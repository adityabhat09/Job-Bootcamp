import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import HomePage from './pages/home/HomePage';
// import AboutUs from './pages/AboutUs';
// import Contact from './pages/Contact';
// import JobBootcamp from './pages/JobBootcamp';
import CoursePage from './pages/CoursePage'
import Footer from './pages/Footer';
import BlogDetail from './pages/blogs/BlogDetail';
import BlogList from './pages/blogs/BlogList';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/courses/:slug" element={<CoursePage />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
