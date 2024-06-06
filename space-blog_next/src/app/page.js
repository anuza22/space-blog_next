import Link from 'next/link'; 
 
export default function Page() { 
  return ( 
    <div className="flex flex-col items-center justify-center min-h-screen bg-galaxy bg-cover"> 
      <h1 className="text-5xl font-bold mb-8 text-white">Welcome to the Space Blog</h1> 
      <Link href="/home" legacyBehavior> 
        <a className="bg-blue-500 text-white px-6 py-3 rounded text-xl">Start</a> 
      </Link> 
    </div> 
  ); 
}