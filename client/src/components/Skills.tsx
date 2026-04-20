import { skills } from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-950 text-white px-4 text-center">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold text-cyan-400 mb-10">
      Skills
    </h2>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-cyan-400 transition"
        >
          <h3 className="text-2xl font-semibold">
            {skill.name}
          </h3>

          <p className="text-gray-400 mt-2">
            {skill.level}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>
  );
}

export default Skills;