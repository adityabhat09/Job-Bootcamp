import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DottedBackground from '../../components/DottedBackground';

export default function ArticleList() {

  useEffect(() => {
      // --- SEO Meta Tags ---
  
      // 1. Set Meta Title
      document.title = 'Tech Articles 2025: Web Development, Data Analytics & JS Trends | Just Career';
  
      // 2. Set Meta Description
      const metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = 'Explore the latest insights on modern web development. Read expert articles on Node.js vs. Deno, MERN vs. MEAN, Tailwind vs. Bootstrap, and the latest trends in React and Data Analytics for 2025.';
      document.head.appendChild(metaDescription);
  
      // 3. Set Meta Keywords
      const metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      metaKeywords.content = 'web development article, tech tutorials, server-side javascript, Node.js, Deno, CSS frameworks, Tailwind CSS, Bootstrap, data analytics, Polars, Pandas, MERN stack, MEAN stack, React state management, Redux, Zustand, React Hooks, React Router, full-stack development, 2025 tech trends';
      document.head.appendChild(metaKeywords);
  
      // Cleanup function to remove the meta tags when the component unmounts
      return () => {
        document.head.removeChild(metaDescription);
        document.head.removeChild(metaKeywords);
      };
    }, []); // 







  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const articlesPerPage = 9;

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`/api/articles?page=${currentPage}&limit=${articlesPerPage}`);
        setArticles(res.data.articles);
        setTotalPages(res.data.totalPages);
      } catch (err) {
        console.error("Failed to fetch articles:", err);
        setError("Failed to load articles. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-full mx-auto py-12">
        <DottedBackground className="w-full bg-gray-900 text-center pt-[6rem] mb-12 py-22">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-5xl">
            Latest Articles
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Deep dives, guides, and updates across various tech domains.
          </p>
        </DottedBackground>

        {loading ? (
          <div className="text-center py-10">
            <p className="text-xl text-gray-700">Loading articles...</p>
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-xl text-red-600">{error}</p>
          </div>
        ) : (
          <>
            <div className="grid gap-10 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
              {articles.map(article => (
                <Link to={`/articles/${article.slug}`} key={article._id} className="block group">
                  <div className="bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2 transform transition-all duration-300 h-full flex flex-col">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed flex-grow">
                      {article.content.slice(0, 120)}...
                    </p>
                    <span className="text-emerald-600 font-semibold mt-4 inline-block">
                      Read More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center space-x-6 mt-12">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="w-[8vw] px-4 py-2 bg-white text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  ← Previous
                </button>

                <span className="text-gray-800 font-medium">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="w-[8vw] px-4 py-2 bg-white text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next →
                </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}