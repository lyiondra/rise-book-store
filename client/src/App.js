import React, { useEffect, useState } from 'react';
import axios from 'axios';

// REPLACE THIS with your actual Render URL
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
        console.error(">>> [SYSTEM_ERROR] DATA_FETCH_FAILED", error);
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-mono p-8">
      <header className="border-b border-[#00ff41] pb-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tighter text-[#00ff41]">RISE_BOOK_STORE_</h1>
        <p className="text-xs text-gray-500">// AUTHENTICATED_RARE_ARCHIVE</p>
      </header>

      {loading ? (
        <div className="animate-pulse text-[#00ff41]">INITIALIZING_STREAM...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {books.map((book) => (
            <div key={book._id} className="border border-gray-800 p-4 hover:border-[#00ff41] transition-all">
              <h2 className="text-xl font-bold">{book.title}</h2>
              <p className="text-[#00ff41] text-sm">${book.price}</p>
              <div className="mt-4 text-[10px] text-gray-500 uppercase tracking-widest">
                Condition: {book.condition} | Rarity: {book.rarityScore}%
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;