import { ChevronDown } from "lucide-react";
import profilePhoto from "../img/profilePhoto.png";
import rubiksCubeImg from "../img/RubiksCubeSolver.webp";
import Google from "../img/Google.webp";
import WhiteBoard from "../img/Whiteboard.png";
import ChromeExtension from "../img/ChromeExtension.jpeg";
import WeatherApp from "../img/WeatherApp.webp";
import stickyNotes from "../img/stickyNotes.webp";

const Portfolio = () => {
  const projects = [
    {
      title: "Real-Time Collaborative Whiteboard",
      category: "Full Stack • 2026",
      description:
        "A real-time collaborative whiteboard platform supporting simultaneous multi-user editing with sub-second latency, powered by React, Socket.IO, and Node.js",
      imageUrl: WhiteBoard,
    },
    {
      title: "Rubiks Cube Solver",
      category: "Algorithms • 2026",
      description:
        "An interactive virtual 3x3 Rubik's Cube solver utilizing Korf's IDA* algorithm to optimize state-space search, solving complex 13-move scrambles in under 10 seconds.",
      imageUrl: rubiksCubeImg,
    },
    {
      title: "Go Algo",
      category: "Search Engine • 2025",
      description:
        "A web-based search engine for competitive programming problems, featuring a custom Node.js web scraper that aggregates problem data from platforms like Codeforces into a MongoDB Atlas database",
      imageUrl: Google,
    },
    {
      title: "Bookmark Extension",
      category: "Browser Extension • 2022",
      description:
        "A Chrome extension built with JavaScript that enables seamlessly bookmark and manage coding problems directly from the leetcode.com platform, utilizing Chrome's Storage API and Content Scripts.",
      imageUrl: ChromeExtension,
    },
    {
      title: "Sticky Notes",
      category: "Web Platform • 2023",
      description:
        "A Chrome extension built with JavaScript that enables seamlessly bookmark and manage coding problems directly from the leetcode.com platform, utilizing Chrome's Storage API and Content Scripts.",
      imageUrl: stickyNotes,
    },

    {
      title: "Weather App",
      category: "Web Platform • 2023",
      description:
        "Become tech savvy in just 5 minutes. A curated newsletter platform designed for quick tech insights.",
      imageUrl: WeatherApp,
    },
  ];

  const handleScroll = () => {
    const target = document.getElementById("about-section");
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1200;
    let start = null;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);

      window.scrollTo(0, startPosition + distance * easeInOutCubic(percent));

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,400&family=Raleway:wght@300;400;500;600;700&display=swap');
          
          .font-raleway { font-family: 'Raleway', sans-serif; }
          .font-opensans { font-family: 'Open Sans', sans-serif; }
          
          /* Shadows mapped to screenshot.jpg */
          .card-shadow {
            box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 0 3px rgba(0,0,0,0.02);
          }
          .card-shadow-hover {
            box-shadow: 0 12px 30px -4px rgba(0, 0, 0, 0.12), 0 4px 6px rgba(0,0,0,0.05);
          }
        `}
      </style>

      <div className="font-opensans min-h-screen bg-[#fcfcfc] text-gray-800 font-light z-0 relative">
        <section className="bg-[#282828] h-[25vh] flex flex-col items-center justify-center text-white relative">
          <button
            onClick={handleScroll}
            className="absolute bottom-10 text-white opacity-70 animate-bounce hover:opacity-100 transition-opacity cursor-pointer focus:outline-none"
            aria-label="Scroll to about section"
          >
            <ChevronDown size={24} />
          </button>
        </section>

        <main
          id="about-section"
          className="max-w-6xl mx-auto px-8 sm:px-12 py-24"
        >
          <section className="flex flex-col md:flex-row items-center gap-16 mb-40">
            <div className="flex-1">
              <div className="relative inline-block mb-10">
                <div className="absolute inset-0 bg-[#fbe570] transform -rotate-3 scale-110 translate-y-1 transition-transform hover:rotate-0 duration-300"></div>
                <h2 className="relative z-10 font-raleway text-3xl font-semibold text-gray-800 tracking-wider uppercase">
                  About Me
                </h2>
              </div>

              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Hi, I'm Shubham. I am currently pursuing my Master of Computer
                Applications (MCA) at MANIT.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                I am passionate about building scalable applications, tackling
                complex algorithmic challenges on Codeforces, and designing
                digital products. I use a blend of clean code and solid
                architectural patterns to make digital products or simply
                beautiful stuff.
              </p>
              <a
                href="/resume.pdf"
                className="font-raleway text-sm font-semibold text-gray-800 border-b-2 border-gray-300 pb-1 hover:border-black hover:text-black transition-all duration-300"
              >
                You can find my resume here.
              </a>
            </div>

            <div className="flex-1 flex justify-center mt-10 md:mt-0">
              <div className="relative w-72 h-72 group">
                <div className="absolute inset-0 bg-[#7d7a6a] transform rotate-6 transition-transform duration-500 group-hover:rotate-12"></div>
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="relative z-10 w-full h-full object-cover bg-white shadow-md transition-transform duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2"
                />
              </div>
            </div>
          </section>

          <section className="mb-40">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-center justify-center lg:justify-start h-full min-h-[300px]">
                <div className="relative inline-block lg:ml-8 p-4">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#fbe570] transform -rotate-[15deg]"></div>
                  <h2 className="relative z-10 font-raleway text-[2.5rem] font-medium text-[#333] tracking-wide uppercase leading-tight">
                    Curated
                    <br />
                    Projects
                  </h2>
                </div>
              </div>

              {projects.map((project, index) => (
                <a
                  href="#"
                  key={index}
                  className="group block bg-white rounded-xl card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col"
                >
                  <div className="h-56 w-full overflow-hidden bg-[#f8f9fa]">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  <div className="p-6 md:p-8 flex-grow flex flex-col bg-white">
                    <h3 className="font-raleway text-xl font-medium text-[#222] mb-1">
                      {project.title}
                    </h3>
                    <p className="font-opensans text-sm text-gray-500 italic mb-4">
                      {project.category}
                    </p>
                    <p className="font-opensans text-[15px] text-gray-600 leading-relaxed mt-auto">
                      {project.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24 mb-16 mt-32 max-w-4xl mx-auto">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end pr-0 md:pr-10">
              <div className="relative inline-flex items-center justify-center p-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[170px] h-[170px] bg-[#f9e576] transform -rotate-[18deg]"></div>

                <h2 className="relative z-10 font-raleway text-[2.8rem] font-normal text-[#2a2a2a] tracking-wide uppercase whitespace-nowrap">
                  Let's Talk
                </h2>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-10 justify-center pl-4 md:pl-0">
              <div>
                <h3 className="font-raleway text-2xl font-normal text-[#444] mb-2">
                  Email
                </h3>
                <a
                  href="mailto:shubhamgaurofficial@gmail.com"
                  className="font-opensans font-light text-[#666] text-[15.5px] hover:text-black transition-colors"
                >
                  shubhamgaurofficial@gmail.com
                </a>
              </div>

              <div>
                <h3 className="font-raleway text-2xl font-normal text-[#444] mb-2">
                  Github
                </h3>
                <a
                  href="https://github.com/shubham"
                  className="font-opensans font-light text-[#666] text-[15.5px] hover:text-black transition-colors"
                >
                  github.com/shubham
                </a>
              </div>

              <div>
                <h3 className="font-raleway text-2xl font-normal text-[#444] mb-2">
                  Social
                </h3>
                <div className="flex flex-row gap-6 font-opensans font-light text-[#666] text-[15.5px]">
                  <a href="#" className="hover:text-black transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="hover:text-black transition-colors">
                    Facebook
                  </a>
                  <a href="#" className="hover:text-black transition-colors">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <div className="max-w-6xl mx-auto px-8 sm:px-12">
          <hr className="border-t border-gray-300 w-full" />
          <footer className="py-8 text-center text-[14px] text-[#333] font-opensans font-light">
            <p>
              Baked with <span className="text-gray-600">♥</span> by Shubham
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
