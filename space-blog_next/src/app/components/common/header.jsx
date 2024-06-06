import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Space Explorer</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/home" className="hover:text-gray-300">Home</a></li>
          <li><a href="/blogs" className="hover:text-gray-300">Blog</a></li>
          <li><a href="#" className="hover:text-gray-300">Best Blog</a></li>
        </ul>
      </nav>
    </header>
  );
};
