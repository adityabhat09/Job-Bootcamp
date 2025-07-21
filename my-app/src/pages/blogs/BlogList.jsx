import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('/api/blogs').then(res => setBlogs(res.data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 pt-[5rem]">Blogs</h1>
      {blogs.map(blog => (
        <div key={blog._id} className="mb-6">
          <Link to={`/blogs/${blog.slug}`}>
            <h2 className="text-xl font-semibold text-pink-700">{blog.title}</h2>
          </Link>
          <p className="text-gray-600">{blog.content.slice(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}
