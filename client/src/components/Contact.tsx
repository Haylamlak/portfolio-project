import { useState } from "react";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/contact", form);

    alert("Message sent successfully");

    setForm({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-950 text-white px-4"
    >
      <div className="max-w-2xl mx-auto">
        
        <h2 className="text-4xl font-bold text-cyan-400 mb-8 text-center">
          Contact Me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-gray-900 p-6 rounded-2xl border border-gray-800"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-gray-800 text-white outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-gray-800 text-white outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-gray-800 text-white h-40 outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <button
            className="w-full bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-xl text-white font-bold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;