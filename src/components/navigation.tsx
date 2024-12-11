import Link from "next/link"
export default function Navbar() {
   return ( 
   <header className="w-[100%] py-3 px-[5%]">
      <nav className="flex justify-between items-center">
         <span className="text-[30px] sm:text-[40px] py-5"><Link href="/">🕉️</Link></span>
         <ul className="flex items-center sm:gap-x-5 sm:text-[25px] text-[15px]">
            <Link className="px-2 py-5 sm:px-5 hover:text-orange-300 font-bold" href="/">Home</Link>
            <Link className="px-2 py-5 sm:px-5 hover:text-orange-300 font-bold" href="/events">Events</Link>
            <Link className="px-2 py-5 sm:px-5 hover:text-orange-300 font-bold" href="/location">Location</Link>
            <Link className="px-2 py-5 sm:px-5 hover:text-orange-300 font-bold" href="/contact">Contact</Link>
         </ul>
      </nav>
   </header>
);
}