import React from 'react'
import BlogCard from "../components/blogCard";
import data from "../data"
export default function Blogs() {
  return (
    <div className="min-h-screen p-8 bg-space-900">
      <h1 className="text-4xl font-bold mb-8">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((blog) => (
                <BlogCard blog={blog}/>
            ))}
      </div>
    </div>
  );
}