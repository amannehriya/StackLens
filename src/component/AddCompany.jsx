import React, { useState } from "react";

export default function AddCompany() {
  const [formData, setFormData] = useState({
    name: "",
    languages: "",
    fresherSalary: "",
    experiencedSalary: "",
    jobAvailability: false,
    minKnowledge: "",
    location: "",
    companySize: "Startup",
    website: "",
    logo: ""
  });

  const handleChange =  (e) => {
    const { name, value, type, checked,files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === 'file' ? files[0]:value, 
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Transform languages from comma-separated string to array
    // const company = {
    //   name: formData.name,
    //   languages: formData.languages.split(",").map((lang) => lang.trim()),
    //   salary: {
    //     fresher: Number(formData.fresherSalary),
    //     experienced: Number(formData.experiencedSalary)
    //   },
    //   jobAvailability: formData.jobAvailability,
    //   minKnowledge: formData.minKnowledge,
    //   location: formData.location,
    //   companySize: formData.companySize,
    //   website: formData.website,
    //   logo: formData.logo
    // };
const formDataToSend = new FormData();

  formDataToSend.append("name", formData.name);
  formDataToSend.append(
    "languages",
   JSON.stringify( formData.languages.split(",").map((lang) => lang.trim()))
  );
  formDataToSend.append(
    "salary",
    JSON.stringify({
      fresher: Number(formData.fresherSalary),
      experienced: Number(formData.experiencedSalary),
    })
  );
  formDataToSend.append("jobAvailability", formData.jobAvailability);
  formDataToSend.append("minKnowledge", formData.minKnowledge);
  formDataToSend.append("location", formData.location);
  formDataToSend.append("companySize", formData.companySize);
  formDataToSend.append("website", formData.website);

  console.log(formData.logo)
  if (formData.logo) {
    formDataToSend.append("logo", formData.logo);
  }



    // console.log("New Company:", company);

    // TODO: send this data to backend via fetch/axios

    try {
    const res = await fetch("http://localhost:3000/company/create", {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      body:formDataToSend
      // body: JSON.stringify(company),
    });

    const data = await res.json();
    console.log("✅ Company Created:", data);
  } catch (error) {
    console.error("❌ Error creating company:", error);
  }

  };

  return (
    <div className="min-h-screen mt-20 flex items-center justify-center bg-gradient-to-b from-[#0f172a] to-[#1e1b4b] text-white px-4">
  <form
  encType="multipart/form-data"
  method="post"
    onSubmit={handleSubmit}
    className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 w-full max-w-4xl space-y-6"
  >
    <h2 className="text-2xl font-bold text-center mb-4">Create New Company</h2>

    {/* Grid Wrapper */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Company Name */}
      <div className="col-span-1 md:col-span-2">
        <label className="block text-sm mb-1">Company Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg bg-white/20 focus:outline-none"
          required
        />
      </div>

      {/* Languages */}
      <div className="col-span-1 md:col-span-2">
        <label className="block text-sm mb-1">Languages (comma separated)</label>
        <input
          type="text"
          name="languages"
          value={formData.languages}
          onChange={handleChange}
          placeholder="e.g. JavaScript, Node.js, React"
          className="w-full px-3 py-2 rounded-lg bg-white/20 focus:outline-none"
          required
        />
      </div>

      {/* Salary */}
      <div>
        <label className="block text-sm mb-1">Fresher Salary</label>
        <input
          type="number"
          name="fresherSalary"
          value={formData.fresherSalary}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg bg-white/20 focus:outline-none"
          required
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Experienced Salary</label>
        <input
          type="number"
          name="experiencedSalary"
          value={formData.experiencedSalary}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg bg-white/20 focus:outline-none"
          required
        />
      </div>

      {/* Job Availability */}
      <div className="flex items-center gap-2 col-span-1 md:col-span-2">
        <input
          type="checkbox"
          name="jobAvailability"
          checked={formData.jobAvailability}
          onChange={handleChange}
          className="w-4 h-4"
        />
        <label className="text-sm">Job Availability</label>
      </div>

      {/* Min Knowledge */}
      <div>
        <label className="block text-sm mb-1">Minimum Knowledge</label>
        <input
          type="text"
          name="minKnowledge"
          value={formData.minKnowledge}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg bg-white/20 focus:outline-none"
        />
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm mb-1">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg bg-white/20 focus:outline-none"
        />
      </div>

      {/* Company Size */}
      <div>
        <label className="block text-sm mb-1">Company Size</label>
        <select
          name="companySize"
          value={formData.companySize}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg bg-white/20 focus:outline-none"
        >
          <option>Startup</option>
          <option>Mid-size</option>
          <option>Enterprise</option>
        </select>
      </div>

      {/* Website */}
      <div>
        <label className="block text-sm mb-1">Website</label>
        <input
          type="url"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg bg-white/20 focus:outline-none"
        />
      </div>

      {/* Logo */}
      <div className="col-span-1 md:col-span-2">
        <label className="block text-sm mb-1">Logo Image</label>
        <input
          type="file"
          name="logo"
          // value={formData.logo}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg bg-white/20 focus:outline-none"
        />
      </div>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition"
    >
      Create Company
    </button>
  </form>
</div>

  );
}
