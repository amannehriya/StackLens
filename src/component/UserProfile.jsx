import { useContext, useEffect, useState } from "react";
import { Camera } from "lucide-react";
import { data } from "react-router-dom";
import useBufferImage from "../hooks/useBufferImage";
import { AuthContext } from "./context/AuthContext";

export default function UserProfile() {
  const [profile, setProfile] = useState({});
  const [image, setImage] = useState(null);
  //hmne image state isliye banaya kyunki jb hm profilepic select kr rhe the to vo file ki value directly bufferimage hook me jaa rhi thi jis karn vo usko psoced nhi kr paa rha tha so for solving this we create a separet hook for profile
  //jisme vo vali value  hogi image ki  jo server se aarhi he buffer image 
  //user_id
  const { myData: { id } } = useContext(AuthContext);

  useEffect(() => {
    try {
      fetch("http://localhost:3000/user/myProfile", {
        credentials: 'include'
      })
        .then(res => res.json())
        .then(data => {
          // console.log(data)
          setProfile({
            name: data.username,
            email: data.email,
            profilePic: data.profilePic || null,
            phoneNumber: data.phoneNumber || "not mentioned",
            location: data.location || "not mentioned"
          })
          setImage(data.profilePic || null)
        })


    } catch (error) {

      console.log("error", error)
    }
  }, [])








  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile((prev) => ({ ...prev, profilePic: file }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", profile.name);
    formDataToSend.append("phoneNumber", profile.phoneNumber);
    formDataToSend.append("location", profile.location);
    formDataToSend.append("profilePic", profile.profilePic);


    await fetch(`http://localhost:3000/user/myprofile/${id}`, {
      method: 'POST',
      credentials: 'include',
      body: formDataToSend
    })
      .then(res => res.json())
      .then(data => {
        if (data.status) {
          setProfile(data.data);
          setImage(data.data.profilePic);
        } else{

          alert(data.status, data.message)}


      })


  };


  let profilePicurl = useBufferImage(image)
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e1b4b] mt-10 flex items-center justify-center p-6">
      <div className="bg-[#1e293b] p-6 rounded-2xl shadow-lg w-full max-w-3xl">
        <h2 className="text-white text-2xl font-bold mb-6">User Profile</h2>

        <form
          encType="multipart/form-data"
          method="post"
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Profile Picture */}
          <div className="flex flex-col items-center md:col-span-2">
            <div className="relative w-32 h-32">
              <img
                src={profilePicurl}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-white/20"
              />
              <label
                htmlFor="profilePic"
                className="absolute bottom-2 right-2 bg-white/80 p-2 rounded-full cursor-pointer hover:bg-white"
              >
                <Camera className="w-5 h-5 text-black" />
              </label>
              <input
                id="profilePic"
                name="profilePic"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>

          {/* Name */}
          <div className="flex flex-col">
            <label className="text-white text-sm mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="p-2 rounded-lg bg-[#0f172a] text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email (non-editable for now) */}
          <div className="flex flex-col">
            <label className="text-white text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              readOnly
              className="p-2 rounded-lg bg-[#0f172a] text-gray-400 border border-white/20"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="text-white text-sm mb-2">Phone</label>
            <input
              type="text"
              name="phoneNumber"
              value={profile.phoneNumber}
              onChange={handleChange}
              className="p-2 rounded-lg bg-[#0f172a] text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Extra fields */}
          <div className="flex flex-col">
            <label className="text-white text-sm mb-2">Location</label>
            <input
              type="text"
              name="location"
              placeholder="City, Country"
              value={profile.location}
              onChange={handleChange}
              className="p-2 rounded-lg bg-[#0f172a] text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-2 rounded-xl shadow-md transition duration-200"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
