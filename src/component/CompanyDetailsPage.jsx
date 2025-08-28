import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useBufferImage from "../hooks/useBufferImage";


export default function CompanyDetailsPage() {

  const {id} = useParams();
  
  // console.log(id)
  const [company,setCompany] = useState(null);


  useEffect(()=>{
    fetch(`http://localhost:3000/company/${id}`)
    .then(res=>res.json())
    .then(({message,data})=>{
      
       setCompany(data)
      //  console.log(data)
     })
  },[])
const logoUrl = useBufferImage(company?.logo || null)
// console.log(logoUrl)
 if(!company){
    //if we are not adding this then it will give error becoz fetch async event he and detail laane me time lgta he
    return <div>loading..</div> //until the compnay detail is not fetch it will show loading page
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e1b4b] text-white">
 
      {/* Card */}
      <main className="max-w-5xl mx-auto px-6 pb-16 pt-25">
        <div className="relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
          {/* Top banner */}
          <div className="h-24 w-full rounded-t-2xl bg-gradient-to-r from-indigo-500/30 via-fuchsia-500/20 to-cyan-500/30" />

          <div className="px-6 md:px-10 -mt-12 pb-8">
            {/* Logo & Title row */}
            <div className="flex items-center gap-5">
               <img
               src={logoUrl}
                alt={`${company.name} logo`}
                className="w-24 h-24 rounded-2xl object-cover ring-4 ring-black/30"
              />
             
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                  {company.name}
                </h1>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
                  <span className={company.jobAvailability ? "px-2.5 py-1 rounded-full  bg-emerald-500/20 text-emerald-200 border border-emerald-400/30":
                                          "bg-red-500/40 text-red-50 border-red-300/10 px-2.5 py-1 rounded-full "}>
                    {company.jobAvailability ? "Hiring" : "Not Hiring"}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/10 text-gray-200 border border-white/15">
                    {company.companySize}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/10 text-gray-200 border border-white/15">
                    {company.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Content grid */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {/* Languages */}
              <section className="md:col-span-2">
                <h2 className="text-sm uppercase tracking-widest text-gray-300 mb-2">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2 ">
                  {company.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1.5 rounded-full bg-indigo-500/20 text-indigo-100 border border-indigo-400/30 text-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <h2 className="text-sm  tracking-widest text-gray-300 mb-2">
                    Minimum Knowledge Required
                  </h2>
                  <p className="text-gray-200 leading-relaxed bg-black/20 border border-white/10 rounded-xl p-4">
                    {company.minKnowledge}
                  </p>
                </div>
              </section>

              {/* Salary card */}
              <aside className="bg-black/30 border border-white/10 rounded-2xl p-5">
                <h2 className="text-sm uppercase tracking-widest text-gray-300 mb-3">
                  Salary (inr)
                </h2>
                <div className="space-y-3">
                  <div className=" flex items-center justify-between">
                    <span className="text-gray-300">Fresher</span>
                    <span className="font-semibold">
                      ${company.salary.fresher.toLocaleString()}
                    </span>
                  </div>
                  <div className=" flex items-center justify-between">
                    <span className="text-gray-300">Experienced</span>
                    <span className="font-semibold">
                      ${company.salary.experienced.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="mt-5">
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center cursor-pointer justify-center rounded-xl bg-indigo-500 hover:bg-indigo-600 transition px-4 py-2.5 font-semibold"
                  >
                    Visit {company.name}
                  </a>
                </div>
              </aside>
            </div>

            {/* Footer info row */}
            <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm">
              <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                <div className="text-gray-400">Location</div>
                <div className="font-medium">{company.location}</div>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                <div className="text-gray-400">Company Size</div>
                <div className="font-medium">{company.companySize}</div>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4 ring-2 ring-transparent hover:ring-indigo-500
            transition-all duration-300 ease-in-out hover:text-white">

                <div className="text-gray-400 cursor-pointer ">contact now..</div>
                <a
                  className="font-medium text-indigo-300 hover:text-indigo-200 break-all"
                  href={company.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  {company.website}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>


    </div>
  );
}
