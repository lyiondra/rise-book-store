import React, { useEffect, useState } from 'react';
import axios from 'axios';

// REPLACE with your real Render URL from your dashboard
const API_BASE_URL = "https://your-backend-name.onrender.com";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/books`);
        setBooks(response.data);
        setLoading(false);
      } catch (error) {
        console.error(">>> [SYSTEM_ERROR]", error);
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-mono">
      {/* --- HERO SECTION --- */}
      <section className="relative py-20 px-8 text-center border-b border-[#00ff41]/20 bg-gradient-to-b from-[#00ff41]/5 to-transparent">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#00ff41] mb-4">
          RISE_BOOK_STORE
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto uppercase tracking-widest text-xs">
          Digital Conscious Archive // Verified Assets Only
        </p>
        <div className="mt-6 w-24 h-1 bg-[#00ff41] mx-auto shadow-[0_0_15px_#00ff41]"></div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <main className="p-8 max-w-7xl mx-auto">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00ff41]"></div>
            <span className="ml-4 text-[#00ff41]">SYNCING_DATABASE...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <div key={book._id} className="group border border-white/10 p-6 bg-[#0a0a0a] hover:border-[#00ff41] transition-all duration-500 rounded-sm">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold group-hover:text-[#00ff41]">{book.title}</h2>
                  <span className="text-[#00ff41] font-bold text-lg">${book.price}</span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-[10px] uppercase text-gray-500">
                    <span>Condition</span>
                    <span className="text-gray-300">{book.condition}</span>
                  </div>
                  <div className="w-full bg-white/5 h-1">
                    <div className="bg-[#00ff41] h-full" style={{ width: `${book.rarityScore}%` }}></div>
                  </div>
                </div>
                <button className="w-full py-2 border border-[#00ff41] text-[#00ff41] text-xs hover:bg-[#00ff41] hover:text-black transition-colors">
                  ACCESS_CATALOG_ENTRY
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;