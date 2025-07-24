import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

export default function ArticleDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios.get(`/api/articles/${slug}`)
      .then(res => setArticle(res.data))
      .catch(err => console.error(err));
  }, [slug]);

  // Set <title> and meta tags once article is loaded
  useEffect(() => {
    if (!article) return;

    document.title = article.metaTitle || article.title;

    // Description
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement('meta');
      desc.name = 'description';
      document.head.appendChild(desc);
    }
    desc.content = article.metaDescription || article.content.slice(0, 160);

    // Keywords
    let kw = document.querySelector('meta[name="keywords"]');
    if (!kw) {
      kw = document.createElement('meta');
      kw.name = 'keywords';
      document.head.appendChild(kw);
    }
    kw.content = (article.metaKeywords || []).join(',');

  }, [article]);

  if (!article) return <div className="pt-24 text-center">Loading...</div>;

  return (
    <div className="p-4 pt-24 max-w-4xl mx-auto">
      {/* Optional image display */}
      {article.imageUrl && (
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full max-h-96 object-cover mb-6 rounded-lg"
        />
      )}
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
        {article.title}
      </h1>
      <div className="prose lg:prose-xl max-w-none">
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </div>
    </div>
  );
}
