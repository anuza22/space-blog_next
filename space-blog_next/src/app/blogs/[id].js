
import { useRouter } from 'next/router'; 
import data from '../data'; 
import DetailBlogCard from '../../components/DetailBlogCard'; 
 
 
export default function BlogDetailPage() { 
  const router = useRouter(); 
  const { id } = router.query; 
  const blog = data.find(blog => blog.id === id); 
  
  if (!blog) { 
    return <div className="min-h-screen p-8 bg-space-900 text-white">Blog not found</div>; 
  } 
 
  return ( 
    <div className="min-h-screen p-8 bg-space-900"> 
      <DetailBlogCard blog={blog} /> 
    </div> 
  ); 
}

