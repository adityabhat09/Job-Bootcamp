import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown'; // <-- 1. IMPORT THE LIBRARY

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // It's good practice to handle potential errors
    axios.get(`/api/blogs/${slug}`)
      .then(res => setBlog(res.data))
      .catch(err => console.error("Error fetching blog:", err));
  }, [slug]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="p-4 pt-[6rem] max-w-4xl mx-auto"> {/* Centering content */}
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">{blog.title}</h1>
      
      {/* 2. REMOVE the .split().map() and REPLACE it with this */}
      <div className="prose lg:prose-xl max-w-none">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>
      
    </div>
  );
}