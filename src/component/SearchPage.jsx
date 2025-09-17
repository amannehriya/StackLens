import React, { useEffect, useState } from "react";
import { PrimaryButton } from "./Button";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";

export default function SearchPage() {
    
  const [query, setQuery] = useState("");
  const [results, setResult] = useState([]);


  useEffect(()=>{
const delaybounce = setTimeout(()=>{
  if(query.trim()){
    fetch(`${import.meta.env.VITE_BASE_URL}/search/?query=${query}`)
    .then(res=>res.json())
    .then(data=>{
      return setResult(data)});

    
  }else{
    setResult([]);
  }
},500); //waits 500ms after typing stops

return ()=>clearTimeout(delaybounce);
  },[query])



  return (
    <div className="pt-15 md:pt-25 min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e1b4b] text-white">
    

      {/* Main Content */}
      <main className="max-w-3xl mx-auto  p-6 bg-black/30 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6">
          Find companies using a programming language
        </h2>

        {/* Search Box */}
        <div className="flex space-x-4 mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />


          <PrimaryButton 
          label="Search"
          className="bg-indigo-500 hover:bg-indigo-600 transition-all 
          duration-200 ease-in text-white px-6 py-3 rounded-lg text-lg shadow-md">
         </PrimaryButton>
        </div>


        {/* Results */}
        <h3 className="text-xl font-semibold mb-4">
          Companies using {query}
        </h3>
        <div className="bg-gray-800 rounded-lg divide-y divide-gray-700">
          {results.map(({name,_id},index) => (
            <Link
            to={`/company/${_id}`}
              key={index}
              className="flex items-center space-x-4 px-4 py-3 hover:bg-gray-700 transition"
            >
              <img src={null} alt={name} className="w-6 h-6" />
              <span className="text-gray-200">{name}</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
