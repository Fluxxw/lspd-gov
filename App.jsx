import React, { useState } from "react";
import axios from "axios";

export default function LSPDForm() {
  const [form, setForm] = useState({
    fullName: "",
    birthdate: "",
    birthplace: "",
    sex: "",
    ethnicity: "",
    height: "",
    weight: "",
    address: "",
    contact: "",
    citizenship: "",
    languages: "",
    education: "",
    employment: "",
    military: "",
    license: "",
    licenseRevoked: "",
    citations: "",
    legalIssues: "",
    pendingCases: "",
    drugs: "",
    dui: "",
    workDrugs: "",
    certification: "",
    timezone: "",
    forumLink: "",
    charNames: "",
    adminRecords: "",
    statsScreens: "",
    lspdHistory: "",
    factionStatus: "",
    microphone: "",
    story: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(import.meta.env.VITE_DISCORD_WEBHOOK, {
        content: `New LSPD Application:\n\n${Object.entries(form)
          .map(([key, val]) => `**${key}**: ${val}`)
          .join("\n")}`
      });
      alert("Application submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Submission failed.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">LSPD Application</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(form).map(([key, val]) => (
          <div key={key} className="flex flex-col">
            <label className="capitalize font-medium">{key.replace(/([A-Z])/g, ' $1')}</label>
            <input
              name={key}
              value={val}
              onChange={handleChange}
              className="border border-gray-300 rounded px-2 py-1"
              placeholder={`Enter ${key}`}
            />
          </div>
        ))}
        <button
          type="submit"
          className="col-span-full bg-blue-600 text-white rounded py-2 mt-4 hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
