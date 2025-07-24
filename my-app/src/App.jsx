import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // <-- ✅ Import this
import Navbar from './pages/Navbar';
import HomePage from './pages/home/HomePage';
import CoursePage from './pages/CoursePage';
import Footer from './pages/Footer';
import BlogDetail from './pages/blogs/BlogDetail';
import BlogList from './pages/blogs/BlogList';
import ArticleList from './pages/articles/ArticleList';
import ArticleDetail from './pages/articles/ArticleDetail';

function App() {
  return (
    <HelmetProvider> {/* ✅ Wrap entire app in HelmetProvider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses/:slug" element={<CoursePage />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
