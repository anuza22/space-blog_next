const DetailBlogCard = ({ blog }) => { 
    return ( 
      <div className="bg-space-800 p-4 rounded-lg shadow-lg"> 
        <img src={blog.image} alt={blog.title} className="rounded-t-lg w-full h-64 object-cover" /> 
        <div className="p-4"> 
          <h1 className="text-3xl font-bold">{blog.title}</h1> 
          <p className="text-space-300">By {blog.author} on {new Date(blog.publishedDate).toLocaleDateString()}</p> 
          <p className="mt-4">{blog.text}</p> 
        </div> 
      </div> 
    ); 
  }; 
   
  export default DetailBlogCard;
  