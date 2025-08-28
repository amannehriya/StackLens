import { useEffect, useRef, useState } from "react";

import Loading from "./utils/Loading";


import CompanyCard from "./CompanyCard";

export default function CompanyList() {
    const name = 'aman'
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);


      useEffect(() => {
        const fetchCompanies = async () => {
          try {
            const res = await fetch("http://localhost:3000/company/companyList/68ac2775406104bdf94c12dd");
            const data = await res.json();
            // console.log(data.companylist)
            setCompanies(data.companylist);
          } catch (error) {
            console.error("❌ Error fetching companies:", error);
          } finally {
            setLoading(false);
          }
        };

        fetchCompanies();
      }, []);

 

    return (
        <div className="min-h-screen mt-20 bg-gradient-to-b from-[#0f172a] to-[#1e1b4b] space-y-5 p-6">
            <h1 className="text-3xl font-bold text-white mb-6 md:ml-40">📂 Companies</h1>

            {companies.length === 0 ? (
                <p className="text-gray-400">No companies created yet.</p>
            ) : (
                companies.map((company,key)=>(
                  <CompanyCard company={company} key={key} />
                ))
               
            )}
        </div>
    );
}
