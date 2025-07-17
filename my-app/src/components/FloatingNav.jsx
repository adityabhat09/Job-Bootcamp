import { useEffect, useState } from 'react';

export default function FloatingNav({ sections }) {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      let current = sections[0].id;

      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop - 80; // adjust for nav height/padding
          if (scrollY >= offsetTop) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const handleClick = (e, id) => {
    e.preventDefault();

    
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-24 z-40 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full mx-auto max-w-4xl shadow-md border-[1px] border-gray-400">
      <nav className="flex space-x-4 overflow-x-auto">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => handleClick(e, id)}
            className={
              `whitespace-nowrap px-4 py-2 rounded-full transition-colors font-medium ` +
              (active === id
                ? 'bg-[#B51C72] text-white'
                : 'text-gray-600 hover:text-[#B51C72]')
            }
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}
