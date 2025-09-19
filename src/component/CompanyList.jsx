import { useContext, useEffect, useRef, useState } from "react";

import Loading from "./utils/Loading";


import CompanyCard from "./CompanyCard";
import { AuthContext } from "./context/AuthContext";

export default function CompanyList() {
    const {myData} = useContext(AuthContext);
    const id = myData.id;
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);


      useEffect(() => {
        const fetchCompanies = async () => {
          try {
            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/company/companyList/${id}`);
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
      }, [loading]);

 

    return (
       loading ? <Loading/>:
        <div className="min-h-screen mt-20 bg-gradient-to-b from-[#0f172a] to-[#1e1b4b] md:flex md:items-center md:flex-col space-y-10 p-6">
            <h1 className="text-3xl font-bold text-white mb-6 ">📂 Companies</h1>

            {companies.length === 0 ? (
                <p className="text-gray-400  md:self-center">No companies created yet.</p>
            ) : (
                companies.map((company,key)=>(
                  <CompanyCard company={company} key={key} setLoading={setLoading} />
                ))
               
            )}
        </div>
    );
}
