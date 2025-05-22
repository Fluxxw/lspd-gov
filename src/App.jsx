import { useState } from "react";
import axios from "axios";

const WEBHOOK_URL = import.meta.env.VITE_DISCORD_WEBHOOK;

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    question1: "",
    question2: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = `
**نموذج جديد تم تقديمه:**
👤 الاسم: ${formData.name}
🎂 العمر: ${formData.age}
❓ السؤال 1: ${formData.question1}
❓ السؤال 2: ${formData.question2}
    `;

    try {
      await axios.post(WEBHOOK_URL, {
        content: message,
      });
      alert("تم إرسال النموذج بنجاح إلى Discord ✅");
    } catch (error) {
      alert("فشل في الإرسال ❌");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md space-y-4">
        <h1 className="text-xl font-bold">نموذج تقديم</h1>

        <input
          type="text"
          name="name"
          placeholder="الاسم"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="age"
          placeholder="العمر"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="question1"
          placeholder="لماذا تريد الانضمام؟"
          value={formData.question1}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="question2"
          placeholder="ما هي خبرتك؟"
          value={formData.question2}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          إرسال
        </button>
      </form>
    </div>
  );
}
