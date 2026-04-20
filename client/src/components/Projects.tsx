import  {projects}  from "../types/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="py-16 bg-gray-950 text-white px-4 text-center md:text-left"
    >
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">
          Projects
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-900 p-6 rounded-2xl border border-gray-800 
                         hover:scale-105 transition duration-300 text-left"
            >

              {/* TITLE */}
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 mt-3 leading-relaxed">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="mt-5 flex gap-4 justify-center md:justify-start">

                {/* LIVE DEMO */}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500 px-4 py-2 rounded-lg text-white hover:bg-cyan-600 transition"
                >
                  Live Demo
                </a>

                {/* GITHUB */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-500/10 transition"
                >
                  GitHub
                </a>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;