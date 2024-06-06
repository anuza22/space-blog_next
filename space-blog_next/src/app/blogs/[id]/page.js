import data from  "../../data";
import DetailBlogCard from '../../components/detailBlogCard';
 
 
export default function Page( {params}) { 
  
  const { id } = params;
  const blog = data.find((blog) => blog.id === id);
  
  if (!blog) { 
    return <div className="min-h-screen p-8 bg-space-900 text-white">Blog not found</div>; 
  } 
 
  return ( 
    <div className="min-h-screen p-8 bg-space-900"> 
      <DetailBlogCard blog={blog} /> 
    </div> 
  ); 
}

