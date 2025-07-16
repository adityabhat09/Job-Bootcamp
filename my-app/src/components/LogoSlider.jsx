import React, { useRef, useEffect } from "react";
import {
  SiAccenture, SiInfosys, SiWipro, SiGoogle, SiMeta, SiOracle,
} from "react-icons/si";

const logos = [
  { Icon: SiAccenture, title: "Accenture" },
  { Icon: SiInfosys,   title: "Infosys"   },
  { Icon: SiMeta,      title: "Meta"      },
  { Icon: SiGoogle,    title: "Google"    },
  { Icon: SiWipro,     title: "Wipro"     },
  
  
  { Icon: SiOracle,    title: "Oracle"    },
];

export default function LogoSlider() {
  const trackRef = useRef(null);

  // Duplicate list to allow seamless loop
  const track = [...logos, ...logos];

  // Measure half‑width once on mount (and on window resize)
  useEffect(() => {
    const setVar = () => {
      const el = trackRef.current;
      if (!el) return;
      const halfWidth = el.scrollWidth / 2;    // one copy
      el.style.setProperty("--marquee-dist", `-${halfWidth}px`);
    };
    setVar();
    window.addEventListener("resize", setVar);
    return () => window.removeEventListener("resize", setVar);
  }, []);

  return (
    <div className="overflow-hidden py-6 bg-white ">
      {/* min-w-max so content decides width; gap‑12 adds spacing */}
      <div
        ref={trackRef}
        className="flex min-w-max animate-marquee gap-10 lg:gap-30 text-gray-800"
      >
        {track.map(({ Icon, title }, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-30 flex items-center justify-center"
          >
            <Icon
              aria-label={title}
              className="w-full h-auto opacity-80 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
