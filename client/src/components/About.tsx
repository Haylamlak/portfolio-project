function About() {
  return (
    <section
      id="about"
      className="bg-gray-950 text-white py-10 md:py-16 px-4"
    >
      <div className="max-w-6xl mx-auto text-center md:text-left">

        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8">
          About Me
        </h2>

        <div className="bg-gray-900 p-6 md:p-8 rounded-2xl border border-gray-800">

          <p className="text-gray-300 text-lg leading-8">
            I am a Computer Science student and web developer from Ethiopia.
            I build responsive and modern websites using React, TypeScript,
            Tailwind CSS, Node.js, Express and MySQL.
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;