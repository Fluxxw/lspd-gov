import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-blue-900 text-white p-4 text-center text-xl font-bold shadow">
        Los Santos Police Department
      </header>

      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <section className="md:col-span-2 space-y-4">
            <div className="bg-white rounded shadow p-4">
              <h2 className="text-lg font-semibold border-b pb-2 mb-2">Welcome Center</h2>
              <p>Information and announcements for new members.</p>
            </div>
            <div className="bg-white rounded shadow p-4">
              <h2 className="text-lg font-semibold border-b pb-2 mb-2">Recruitment</h2>
              <p>Apply to join the LSPD or view recruitment guidelines.</p>
            </div>
          </section>

          <aside className="space-y-4">
            <div className="bg-white rounded shadow p-4">
              <h3 className="text-md font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="text-blue-600 hover:underline">Join Us</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Rules</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Support</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center text-sm p-4 mt-10">
        © 2025 Los Santos Police Department. All rights reserved.
      </footer>
    </div>
  )
}
