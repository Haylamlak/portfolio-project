import Haylamlak from "../assets/Haylamlak.jpg"

function Hero() {
  return (
    <section
      id="home"
      className="min-h-[85vh] flex items-center bg-gray-950 text-white pt-24 md:pt-28"
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center w-full">

        {/* TEXT */}
        <div className="text-center md:text-left">

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I am <span className="text-cyan-400">Haylamlak</span>
          </h2>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            Full Stack Web Developer focused on React, TypeScript,
            Node.js and MySQL.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <a
              href="#projects"
              className="bg-cyan-500 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-600 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-500/10 transition"
            >
              Hire Me
            </a>

          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="w-60 h-60 md:w-72 md:h-72 rounded-full bg-cyan-500/20 border-4 border-cyan-500 shadow-lg">
              <img
      src={Haylamlak}
      alt="My profile"
      className="w-60 h-60 md:w-72 md:h-72 rounded-full border-4 border-cyan-500 shadow-xl hover:scale-105 transition"
    />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;