import React from "react";
import { Link, useLocation } from "react-router-dom";

function SideNav() {
  const location = useLocation();

  const navItems = [
    {
      section: "News Feeds",
      links: [
        { icon: <i className="ri-fire-fill" />, title: "Trending", to: "/trending" },
        { icon: <i className="ri-bard-fill" />, title: "Popular", to: "/popular" },
        { icon: <i className="ri-movie-fill" />, title: "Movies", to: "/movie" },
        { icon: <i className="ri-tv-2-line" />, title: "TV Shows", to: "/tv" },
        { icon: <i className="ri-team-fill" />, title: "People", to: "/person" },
      ],
    },
    {
      section: "Website Information",
      links: [
        { icon: <i className="ri-information-2-fill" />, title: "About Movie-Web || MOHIT", to: "/about" },
        { icon: <i className="ri-phone-fill" />, title: "Contact Us", to: "/contact" },
      ],
    },
  ];

  return (
    <aside className="w-[20%] h-full p-4 border-r border-zinc-700 bg-zinc-900 text-white overflow-y-auto">
      <h1 className="font-extrabold text-2xl tracking-tight flex items-center gap-2 text-white">
        <i className="text-[#6556CC] ri-tv-fill text-3xl" />
        Movie-Web <span className="text-sm text-zinc-400 font-medium">|| MOHIT</span>
      </h1>

      {navItems.map((section, idx) => (
        <div key={idx} className="mt-4">
          <h3 className="font-semibold tracking-tight text-lg mb-2 text-zinc-300">
            {section.section}
          </h3>
          <div className="flex flex-col gap-1">
            {section.links.map((elem, i) => {
              const isActive = location.pathname === elem.to;
              return (
                <Link
                  key={i}
                  to={elem.to}
                  className={`flex items-center gap-3 px-4 py-2 rounded-md font-medium transition-all duration-150 ${
                    isActive
                      ? "bg-[#6556CC] text-white"
                      : "text-zinc-400 hover:bg-[#6556CC] hover:text-white"
                  }`}
                >
                  <span className="text-xl">{elem.icon}</span>
                  {elem.title}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </aside>
  );
}

export default SideNav;
