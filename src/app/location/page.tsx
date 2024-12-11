import React from "react";
export default function Home() {
   return (
     <div className="w-full h-full ">
      <h1 className="sm:text-[30px] text-[25px] w-auto h-auto text-white font-bold">Location</h1><br/>
      <div className="sm:flex sm:justify-between w-full h-full">
        <div className="pr-2 h-full sm:w-[45%] w-full">
          <p>Marie Jeanie, Joomadhar Lane, Rose Belle</p><br/>
          <p>Opening hour : </p><br/>
          <p>Closing hour : </p><br/>
          <p>Contact : </p><br/>
          <p>Email : </p><br/>
          <p className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">Opening and closing times may vary during festivals</p>
        </div>
        <div className="pl-2 h-full sm:w-[45%] w-full sm:pt-0 pt-5">
          {/* maps */}
          maps
        </div>
      </div>
     </div>
   );
 }