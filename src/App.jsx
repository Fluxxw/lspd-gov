import React, { useState } from 'react'

export default function App() {
  const [form, setForm] = useState({
    fullName: '',
    age: '',
    reason: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const webhookURL = import.meta.env.VITE_DISCORD_WEBHOOK
    const content = `**New Application**\nName: ${form.fullName}\nAge: ${form.age}\nReason: ${form.reason}`

    await fetch(webhookURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    })

    setSubmitted(true)
    setForm({ fullName: '', age: '', reason: '' })
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
      <header className="bg-blue-900 text-white p-4 text-center text-xl font-bold shadow">
        Los Santos Police Department - Application Form
      </header>

      <main className="p-6 flex-1 flex justify-center items-center">
        <div className="bg-white p-6 rounded shadow w-full max-w-md">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Age</label>
                <input
                  type="number"
                  name="age"
                  value={form.age}
                  onChange={handleChange}
                  required
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Why do you want to join?</label>
                <textarea
                  name="reason"
                  value={form.reason}
                  onChange={handleChange}
                  required
                  className="w-full border p-2 rounded"
                />
              </div>
              <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800">
                Submit Application
              </button>
            </form>
          ) : (
            <div className="text-center text-green-600 font-semibold">
              ✅ Application submitted successfully!
            </div>
          )}
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center text-sm p-4">
        © 2025 Los Santos Police Department. All rights reserved.
      </footer>
    </div>
  )
}
