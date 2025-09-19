import React, { useEffect, useRef, useState } from 'react'
import useBufferImage from "../hooks/useBufferImage";
import SettingMenu from "./utils/SettingMenu";
import { MoreVertical, Edit, Trash2, Eye } from "lucide-react";

function CompanyCard({company ,setLoading}) {
 const [feature, setFeature] = useState(false);
    const featureRef = useRef();
    

        useEffect(() => {
        function handleClickOutside(event) {
            if (
                feature &&
                featureRef.current &&
                !featureRef.current.contains(event.target)  //means click navbar pr nhi hua he

            ) {
                setFeature(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };


    }, [feature, setFeature])

  

    const logoUrl = useBufferImage(company?.logo || null)
   
  return (
      <div className="md:ml-40 md:w-2/3 bg-gradient-to-b from-[#0f172a] to-[#1e1b4b]  hover:bg-gradient-to-b hover:from-[#0f172a] hover:to-[#332f6a] p-4 rounded-2xl shadow-lg flex items-center justify-between">
                    {/* Logo + Name */}
                    <div className="flex items-center gap-4">
                        <img
                            src={logoUrl} //logo
                            alt={`${company?.name} logo`}
                            className="w-14 h-14 rounded-xl object-cover border border-white/20"
                        />
                        <h2 className="text-white font-semibold text-lg">{company.name}</h2>
                    </div>


                    {/* Settings Button */}
                    <button
                        ref={featureRef}
                        onClick={() => setFeature(prev => !prev)}
                        className="text-white hover:bg-white/10 p-2 rounded-full transition"
                    >
                        <MoreVertical size={20} />
                        {feature ? <SettingMenu id={company._id} setLoading={setLoading}/> : ""}
                    </button>

                    {/* Settings Dropdown */}

                </div>
  )
}

export default CompanyCard