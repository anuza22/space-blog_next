import Link from 'next/link'; 
 
const Button = ({ href, children }) => { 
  return ( 
    <Link href={href}> 
      <a className="inline-block bg-blue-500 text-white px-4 py-2 rounded">{children}</a> 
    </Link> 
  ); 
}; 
 
export default Button;
  