import React, { useState } from "react";
import { Menu, X, Home, Search, PlusCircle, BarChart, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Toggle Button */}
     
    <button
        onClick={() => setIsOpen(!isOpen)}
        className=" md:fixed md:top-25 md:left-10 z-50 p-1 rounded-lg bg-gradient-to-r from-indigo-500/30  to-cyan-500/30  text-white shadow-lg"
      >
        {isOpen ?<X size={22} /> :  <div className="flex gap-3 items-center "><Menu size={20} /><div className="hidden md:block md:tracking-wider md:mr-5"> filter by:</div></div>}
      
      </button>
    


      {/* Sidebar Overlay (when open on mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-[#0f172a] to-[#1e1b4b] text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 shadow-xl`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h2 className="text-lg font-bold tracking-wide">StackLens</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-md hover:bg-white/10"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav Items */}
        <nav className="mt-6 space-y-2 px-4">
          <SidebarItem icon={<Home size={18} />} label="Dashboard" />
          <SidebarItem icon={<Search size={18} />} label="Search Companies" href="/search" />
          <SidebarItem icon={<PlusCircle size={18} />} label="Add Company" href="/company/add" />
          <SidebarItem icon={<BarChart size={18} />} label="Group / Reports" />
          <SidebarItem icon={<Settings size={18} />} label="Settings" />
        </nav>
      </aside>

    </div>
  );
}

function SidebarItem({
  href="#",
  icon,
  label
}) {
  return (
    <Link className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition text-left"
    to={href}>
      {icon}
      <span className="text-sm">{label}</span>
    </Link>
  );
}
