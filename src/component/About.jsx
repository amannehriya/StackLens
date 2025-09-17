import React from "react";

export default function About() {
  return (
    <div id="about" className="bg-gradient-to-b from-[#0f172a] to-[#1e1b4b] text-gray-300 min-h-screen py-16 px-6 mt-20">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Company Intro */}
       <section className="text-center space-y-4">
  <h1 className="text-4xl mb-5 font-bold text-white">About StackLens</h1>
  <p className="text-gray-400 max-w-2xl mx-auto">
    <span className="text-white">StackSight</span> is a platform built for developers who are 
    looking for the right companies that match their preferred 
    <span className="text-white font-medium"> technology stack</span>.  
    Whether you are a React, Node.js, or Python developer, we make it easier 
    to discover and connect with companies that use the same tools and 
    frameworks you love.
  </p>
</section>

        {/* Mission / Vision */}
        <section className="grid md:grid-cols-2 gap-10 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Our Mission</h2>
            <p className="text-gray-400">
              To bridge the gap between technology and people by providing
              smart solutions that are both innovative and reliable.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">Our Vision</h2>
            <p className="text-gray-400">
              We envision a future where developers and companies can focus on 
              innovation while StackSight handles the complexities of scaling and management.
            </p>
          </div>
        </section>

        {/* Projects Showcase */}
        <section>
          <h2 className="text-3xl  font-bold text-white text-center mb-10">Our Projects</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Project 1 */}
            <div className="bg-[#1e1b4b] rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
              <img
                src="https://source.unsplash.com/400x250/?technology,app"
                alt="Project 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">Analytics Dashboard</h3>
                <p className="text-sm text-gray-400">
                  A scalable dashboard to visualize and track real-time performance metrics.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-[#1e1b4b] rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
              <img
                src="https://source.unsplash.com/400x250/?coding,software"
                alt="Project 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">Collaboration Tool</h3>
                <p className="text-sm text-gray-400">
                  A platform that helps teams collaborate, plan, and execute projects seamlessly.
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-[#1e1b4b] rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
              <img
                src="https://source.unsplash.com/400x250/?data,ai"
                alt="Project 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">AI Insights</h3>
                <p className="text-sm text-gray-400">
                  Leveraging artificial intelligence to provide actionable insights and automation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="bg-[#0f172a] px-4 py-2 rounded-lg shadow text-sm">React</span>
            <span className="bg-[#0f172a] px-4 py-2 rounded-lg shadow text-sm">Node.js</span>
            <span className="bg-[#0f172a] px-4 py-2 rounded-lg shadow text-sm">MongoDB</span>
            <span className="bg-[#0f172a] px-4 py-2 rounded-lg shadow text-sm">Express</span>
            <span className="bg-[#0f172a] px-4 py-2 rounded-lg shadow text-sm">Tailwind CSS</span>
          </div>
        </section>
      </div>
    </div>
  );
}
