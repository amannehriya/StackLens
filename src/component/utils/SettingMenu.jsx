import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

function SettingMenu({ id }) {
    const { myData } = useContext(AuthContext);
    let navigate = useNavigate();
    const handleDelete = async () => {
        try {
            await fetch(`http://localhost:3000/company/delete/${myData.id}/${id}`, {
                method: "DELETE"
            });
            console.log("deleted")
            // setCompanies((prev) => prev.filter((c) => c._id !== id));
        } catch (error) {
            console.error("❌ Error deleting company:", error);
        }
    };

    return (
        <div className="absolute  right-15 bg-zinc-800 h-30 w-30 rounded-lg font-semibold 
          flex  flex-col  pt-3  text-gray-300 ">
            <div className="cursor-pointer w-full text-start hover:bg-gray-900 hover:text-gray-500 px-2" onClick={handleDelete}>Delete</div>
            <Link className="cursor-pointer w-full text-start hover:bg-gray-900 hover:text-gray-500 px-2 " to={`/company/update/${id}`}>update</Link>
            <div className="cursor-pointer w-full text-start hover:bg-gray-900 hover:text-gray-500 px-2 " onClick={() => {
                navigate(`/company/${id}`)
            }}>See info</div>
        </div>
    )
}

export default SettingMenu