import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`/api/blogs/${slug}`)
      .then(res => setBlog(res.data))
      .catch(err => console.error(err));
  }, [slug]);

  // Once blog is loaded, set <title> and meta tags
  useEffect(() => {
    if (!blog) return;

    document.title = blog.metaTitle || blog.title;

    // Description
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement('meta');
      desc.name = 'description';
      document.head.appendChild(desc);
    }
    desc.content = blog.metaDescription || blog.content.slice(0,160);

    // (Optional) Keywords
    let kw = document.querySelector('meta[name="keywords"]');
    if (!kw) {
      kw = document.createElement('meta');
      kw.name = 'keywords';
      document.head.appendChild(kw);
    }
    kw.content = (blog.metaKeywords || []).join(',');

  }, [blog]);

  if (!blog) return <div className="pt-24 text-center">Loading...</div>;

  return (
    <div className="p-4 pt-24 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
        {blog.title}
      </h1>
      <div className="prose lg:prose-xl max-w-none">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>
    </div>
  );
}
