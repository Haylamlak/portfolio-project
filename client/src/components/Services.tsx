function Services() {
  return (
<section className="py-20 bg-gray-950 text-white px-4">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold text-cyan-400 mb-10">
      Services
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
        <h3 className="text-xl font-bold text-cyan-400">
          Website Development
        </h3>
        <p className="text-gray-400 mt-3">
          Modern responsive websites for businesses.
        </p>
      </div>

      <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
        <h3 className="text-xl font-bold text-cyan-400">
          Frontend Development
        </h3>
        <p className="text-gray-400 mt-3">
          React + TypeScript UI development.
        </p>
      </div>

      <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
        <h3 className="text-xl font-bold text-cyan-400">
          Backend Development
        </h3>
        <p className="text-gray-400 mt-3">
          Node.js, Express, MySQL APIs.
        </p>
      </div>

    </div>

  </div>
</section>
  );
}

export default Services;