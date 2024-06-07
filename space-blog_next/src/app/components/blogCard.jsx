import Link from 'next/link'; 
import DetailBlogCard from './detailBlogCard';
 
const BlogCard = ({blog}) => { 

  if (!blog) {
    // Render a loading state or a placeholder
    return <div>Loading...</div>;
  }
  return ( 
    <div className="bg-space-800 p-4 rounded-lg shadow-lg"> 
      <img src={blog.image} alt={blog.title} className="rounded-t-lg w-full h-48 object-cover" /> 
      <div className="p-4"> 
        <h2 className="text-2xl font-bold">{blog.title}</h2> 
        <p className="text-space-300">{blog.summary}</p> 
        
        <Link href={`/blogs/${blog.id}`} legacyBehavior> 
          <a className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">Read More</a> 
        </Link> 
      </div> 
    </div> 
  ); 
}; 
 
export default BlogCard;