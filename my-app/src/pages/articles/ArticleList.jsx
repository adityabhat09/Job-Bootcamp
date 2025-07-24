import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DottedBackground from '../../components/DottedBackground';

export default function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('/api/articles')
      .then(res => setArticles(res.data))
      .catch(err => console.error("Failed to fetch articles:", err));
  }, []);

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

        <div className="grid gap-10 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-full px-4 sm:px-6 lg:px-8 mx-auto">
          {articles.map(article => (
            <Link to={`/articles/${article.slug}`} key={article._id} className="block group">
              <div className="bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2 transform transition-all duration-300 h-full flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors duration-300">
                  {article.title}
                </h2>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {article.content.slice(0, 120)}...
                </p>
                <span className="text-pink-500 font-semibold mt-4 inline-block">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
