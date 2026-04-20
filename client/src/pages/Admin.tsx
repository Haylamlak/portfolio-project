import { useEffect, useState } from "react";
import axios from "axios";

type Message = {
  id: number;
  name: string;
  email: string;
  message: string;
};

function Admin() {
  const [messages, setMessages] = useState<Message[]>([]);

 useEffect(() => {
  axios
    .get("https://portfolio-project-jvta.onrender.com/api/messages")
    .then(res => setMessages(res.data))
    .catch(err => console.log(err));
}, []);

  const handleDelete = async (id: number) => {
  try {
    await axios.delete(
  `https://portfolio-project-jvta.onrender.com/api/messages/${id}`
);

    // remove from UI instantly
    setMessages(messages.filter((msg) => msg.id !== id));
  } catch (error) {
    console.log(error);
  }
};
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-cyan-400">
        Admin Dashboard
      </h1>

      <div className="grid gap-4">
{messages.map((msg) => (
  <div
    key={msg.id}
    className="bg-gray-900 p-4 rounded-xl border border-gray-800"
  >
    <h2 className="font-bold">{msg.name}</h2>
    <p className="text-gray-400">{msg.email}</p>
    <p className="mt-2">{msg.message}</p>

    {/* ✅ ADD THIS BUTTON */}
    <button
      onClick={() => handleDelete(msg.id)}
      className="mt-3 bg-red-500 px-4 py-1 rounded"
    >
      Delete
    </button>
  </div>
))}
      </div>
    </div>
  );
}

export default Admin;