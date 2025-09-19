import React from "react";
import { Briefcase, Users, Code, Building } from "lucide-react";
import { href, useNavigate } from "react-router-dom";

function LearnMore() {
    const navigate = useNavigate();
  const features = [
    {
      icon: <Building className="w-8 h-8 text-indigo-400" />,
      title: "Discover Companies",
      desc: "Explore verified companies, learn about their culture, and see what tech stacks they use.",
     href:'/search'
    },
    {
      icon: <Code className="w-8 h-8 text-indigo-400" />,
      title: "Tech Stacks",
      desc: "Understand the technologies companies rely on and prepare your skills accordingly.",
     href:''
    },
    {
      icon: <Briefcase className="w-8 h-8 text-indigo-400" />,
      title: "Job Opportunities",
      desc: "Find tailored job opportunities based on your profile, location, and skills.",
      href:''
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-400" />,
      title: "For Founders",
      desc: "Easily post jobs, manage your company profile, and attract the right talent.",
     href:'/company/add'
    },
  ];

  return (
    <section id="learn-more" className=" mt-15 bg-gradient-to-b from-[#0f172a] to-[#1e1b4b] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Learn More About Our Platform</h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Whether you’re a developer searching for the right company or a founder looking to build your team, 
          our platform connects the right people with the right opportunities.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {features.map((feature, i) => (
          <div
          onClick={()=>{navigate(feature.href)}}
            key={i}
            className="bg-[#1e1b4b]/60 hover:bg-[#312e81] transition-all duration-500 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LearnMore;
