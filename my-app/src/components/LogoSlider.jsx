import React from "react";
import {
  SiAccenture,
  SiInfosys,
  SiWipro,
  
  SiMeta,
  SiOracle,
  SiGoogle
  
} from "react-icons/si";            // all of these exist in Simple‑Icons v9+

// Every logo is just a React component
const logos = [
  { Icon: SiAccenture, title: "Accenture" },
  { Icon: SiInfosys,   title: "Infosys"   },
  { Icon: SiWipro,     title: "Wipro"     },
  { Icon: SiGoogle,       title: "IBM"       },
  { Icon: SiMeta, title: "Microsoft" },
  { Icon: SiOracle, title: "AWS"       },
];

export default function LogoSlider() {
  // duplicate list for seamless loop
  const track = [...logos, ...logos];

  return (
    <div className="overflow-hidden py-6 bg-white">
      <div className="flex w-[200%] animate-marquee text-gray-800">
        {track.map(({ Icon, title }, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-40 mx-4 flex items-center justify-center"
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
