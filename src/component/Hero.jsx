import React from "react";
import { motion } from "framer-motion";
import { PrimaryButton } from "./Button";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { useEffect } from "react";


export default function HeroSection() {

  const { data, setData, myData, loading, SetIsAuthenticated, setLoading } = useContext(AuthContext);
  const token = async () => {

    await fetch(`${import.meta.env.VITE_BASE_URL}/user/profile`, {
      credentials: 'include',
      method: 'GET'
    }).then(res => {
      console.log("res")
      console.log(res.clone().json())
      return res.json()
    })
      .then(data => {
        if (data.status) {
          console.log("auth", data)
          setData(data.data)
          SetIsAuthenticated(data.status)
          // console.log("data in authcontext",data);
          setLoading(false)
        } else {
          SetIsAuthenticated(false)
        }
      }).catch((err) => {
        setLoading(false);
        console.log('error while fetching profile data', err)
      })
  }

  useEffect(() => {
    token();
  }, [])

  myData.name = data?.username;
  myData.email = data?.email;
  myData.id = data?._id;
  // 
  return (
    <>
      <div id="home" className=" relative  bg-gradient-to-b from-[#0f172a] to-[#1e1b4b]
         text-white min-h-screen flex flex-col">

       
        <div className="flex flex-col justify-center items-center text-center flex-1 px-6 md:px-20
        bg-[url(/bg-immage2.png)] bg-center bg-cover">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Find Company Tech Stacks Easily
          </h1>

          <p className="text-gray-200 max-w-2xl mb-8">
            Our application helps users discover the technology stacks used by different companies. Whether
            you're preparing for an interview, researching competitors, or exploring industry trends, this tool gives you clear insights into the frameworks, languages, and tools that power leading businesses.
          </p>

          <div className="flex space-x-4">

            <PrimaryButton
              label="Get started"
              href={"/search"}
              className="z-30 bg-indigo-500 hover:bg-indigo-600 transition-all 
          duration-200 ease-in text-white px-6 py-3 rounded-lg text-lg shadow-md">
            </PrimaryButton>

            <PrimaryButton
              label=" Learn more "
              icon={"Chevron_Right"}
              className=" z-30 rounded-lg text-gray-200 ring-2 ring-transparent hover:ring-indigo-500
            transition-all duration-300 ease-in-out hover:text-white px-6 py-3 text-lg flex items-center gap-3">
            </PrimaryButton>
          </div>
        </div>

      </div>
    </>

  );
}
