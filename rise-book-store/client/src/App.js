
import React from 'react';
import Navbar from './components/Navbar';
import BookGrid from './components/BookGrid';

function App() {
  return (
    <div className="bg-rise-black min-h-screen text-white font-mono p-4">
      <Navbar />
      <header className="py-10 border-b border-rise-green/30">
        <h1 className="text-4xl font-bold tracking-tighter text-rise-green">RISE_BOOK_STORE_</h1>
        <p className="text-xs text-gray-500 mt-2">// RARE_COLLECTIBLES_ARCHIVE</p>
      </header>
      <main className="mt-8">
        <BookGrid />
      </main>
    </div>
  );
}

export default App;
