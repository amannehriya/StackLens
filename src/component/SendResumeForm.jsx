import { useContext, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import Loading from "./utils/Loading";
function SendResumeForm({ companyEmail="amannehriya19@gmail.com" }) {
  const {myData} = useContext(AuthContext);
  const [resume, setResume] = useState(null);
  const [name, setName] = useState(myData.name);
  const [email, setEmail] = useState(myData.email);
  const [loading,setLoading] = useState(false);
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resume) return alert("Please upload your resume!");

    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("companyEmail", companyEmail);
    formData.append("applicantName", name);
    formData.append("applicantEmail", email);
 
    setLoading(true);
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/comunication/send-resume`, {
      method: "POST",
      body: formData,
      credentials:'include'
    });

    const data = await res.json();
    if(data) setLoading(false);

    alert(data.message);
  };

   return (
    loading ? <Loading /> :
   <div className=" h-screen w-screen flex items-center justify-center mt-18 p-4 bg-slate-900 border-b-2  border-gray-500">
    <form onSubmit={handleSubmit} className="  text-white  ">
      <h2 className="text-xl font-semibold mb-3">Send Resume</h2>
     <label htmlFor="" className="p-2  text-zinc-400">name :</label>
      <input
        type="text"
        className="p-2 my-2 w-full rounded bg-zinc-500/10"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

       <label htmlFor="" className="p-2  text-zinc-400">Email :</label>
      <input
        type="email"
        placeholder="Your Email"
        className="p-2 my-2 w-full bg-zinc-500/10 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <h2 className="text-zinc-200 text-1xl  mb-3 ">upload your resume here :</h2>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        className="p-2 w-full mb-4 bg-zinc-500/10 "
        onChange={(e) => setResume(e.target.files[0])}
      />
      <button type="submit" className="bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-500">
        Send Resume
      </button>
    </form>
    </div> 
  );
}

export default SendResumeForm;
