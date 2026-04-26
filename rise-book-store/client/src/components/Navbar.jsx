
import React from 'react';

const Navbar = () => (
  <nav className="flex justify-between items-center border-b border-gray-800 pb-4">
    <div className="text-xl font-bold border border-rise-green px-2 py-1">RISE</div>
    <div className="space-x-6 text-xs uppercase tracking-widest">
      <a href="#" className="hover:text-rise-green">Inventory</a>
      <a href="#" className="hover:text-rise-green">Manifesto</a>
      <a href="#" className="hover:text-rise-green">Cart [0]</a>
    </div>
  </nav>
);

export default Navbar;
