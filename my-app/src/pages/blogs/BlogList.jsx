import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DottedBackground from '../../components/DottedBackground';

export default function BlogList() {
  // 1. Add state for pagination, loading, and errors
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const blogsPerPage = 9; // You can adjust this number

  // 2. Modify useEffect to fetch paginated data
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);
      try {
        // Request the specific page from the API
        const res = await axios.get(`/api/blogs?page=${currentPage}&limit=${blogsPerPage}`);
        setBlogs(res.data.blogs);
        setTotalPages(res.data.totalPages);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        setError("Failed to load blogs. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [currentPage]); // Re-run this effect whenever 'currentPage' changes

  // 3. Add handler functions for pagination buttons
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
            Latest Blogs
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Insights and tutorials on modern web development.
          </p>
        </DottedBackground>

        {/* 4. Add conditional rendering for loading and error states */}
        {loading ? (
          <div className="text-center py-10">
            <p className="text-xl text-gray-700">Loading blogs...</p>
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-xl text-red-600">{error}</p>
          </div>
        ) : (
          <>
            {/* Grid Container */}
            <div className="grid gap-10 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-7xl px-4 sm:px-6 lg:px-8 justify-items-center mx-auto">
              {blogs.map(blog => (
                <Link to={`/blogs/${blog.slug}`} key={blog._id} className="block group">
                  <div className="bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2 transform transition-all duration-300 h-full flex flex-col">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed flex-grow">
                      {blog.content.slice(0, 120)}...
                    </p>
                    <span className="text-emerald-600 font-semibold mt-4 inline-block">
                      Read More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* 5. Add Pagination Controls UI */}


            <div className="flex justify-center items-center space-x-6 mt-12">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className=" w-[8vw] px-4 py-2 bg-white text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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