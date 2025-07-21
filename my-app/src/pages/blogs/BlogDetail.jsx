import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`/api/blogs/${slug}`).then(res => setBlog(res.data));
  }, [slug]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="p-4 pt-[6rem]">
      <h1 className="text-3xl font-bold mb-4 text-center pb-5">{blog.title}</h1>
      {blog.content.split('\n').map((para, idx) => (
        <p key={idx} className="mb-4 text-gray-800">{para}</p>
      ))}
    </div>
  );
}
