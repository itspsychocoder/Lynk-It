"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

export default function LinktreeClone() {
  const [darkMode, setDarkMode] = useState(false);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const getQuote = async () => {
    const response = await fetch("/api/quote/get-quote"); // Call your own API
    const data = await response.json();
    console.log(data[0].q); // Access quote text
    setQuote(data[0].q); // Set quote state
    console.log(data[0].a); // Access quote text
    setAuthor(data[0].a); // Set author state

  };
  


  useEffect(() => {
    getQuote();
  }, []);

  const links = [
    { title: "GitHub", url: "https://github.com/itspsychocoder" },
    { title: "Blog", url: "https://psychocoder.hashnode.dev" },
    { title: "Instagram", url: "https://instagram.com/phobic.psycho" },
  ];

  const getStatusMessage = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "☀️ Good morning! Check out my latest project.";
    if (hour < 18) return "🚀 Afternoon coding session in progress.";
    return "🌙 Late-night grinding on Reflecto.";
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-6 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      {/* Profile Section */}
      <img src="/avatar.webp" alt="Profile" className="rounded-full w-24 h-24 mb-4" />
      <div className="text-center">
        <h1 className="text-2xl font-bold">Hussnain Ahmad</h1>
        <p className="text-sm opacity-75">Full Stack Web Developer | Tech Enthusiast</p>
        <p className="mt-2 text-xs font-medium">{quote} - {author}</p>
      </div>

      {/* Links Section */}
      <div className="mt-6 w-full max-w-xs">
        {links.map(({ title, url }) => (
          <a
            key={title}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleClick(title)}
            className="block text-center p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all my-2"
          >
            {title}
          </a>
        ))}
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="mt-4 px-4 py-2 text-sm bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <div className="mt-6 w-full max-w-xs">
  <h1 className="text-center text-3xl my-5 font-bold">Currently Reading</h1>
  
  <div className="flex flex-col items-center bg-blue-600 text-white rounded-lg p-5 hover:bg-blue-700 transition-all shadow-lg">
    {/* Book Image */}
    <Image className="mt-3 rounded-md" width={120} height={120} src="/book.jpg" alt="Book Cover" />
    
    {/* Book Title */}
    <h2 className="text-center text-2xl font-bold mt-4">
      The Almanack Of Naval Ravikant
    </h2>

    {/* Book Badges */}
    <div className="flex gap-2 mt-3 flex-wrap justify-center">
      <span className="bg-gray-200 text-gray-800 px-3 py-1 text-sm rounded-full">Philosophy</span>
      <span className="bg-gray-200 text-gray-800 px-3 py-1 text-sm rounded-full">Wealth</span>
      <span className="bg-gray-200 text-gray-800 px-3 py-1 text-sm rounded-full">Mindset</span>
    </div>
  </div>
</div>


<div className="mt-6 w-full max-w-xs">
  <h1 className="text-center text-3xl my-5 font-bold">Current Project</h1>

  <div className="flex flex-col items-center bg-gray-900 text-white rounded-lg p-5 hover:bg-gray-800 transition-all shadow-lg">

    {/* Project Name & Status */}
    <h2 className="text-center text-2xl font-bold">Lynk It</h2>
    <span className="text-sm text-gray-300 mt-1 px-3 py-1 bg-blue-600 rounded-full">In Progress 🚀</span>


    {/* Project Description */}
    <p className="text-center text-sm text-gray-300 mt-2">
      A minimal one-page hub for all my links, projects, and content.
    </p>

    {/* Project Badges */}
    <div className="flex gap-2 mt-3 flex-wrap justify-center">
      <span className="bg-gray-200 text-gray-800 px-3 py-1 text-sm rounded-full">Next JS</span>
      <span className="bg-gray-200 text-gray-800 px-3 py-1 text-sm rounded-full">Node</span>
      <span className="bg-gray-200 text-gray-800 px-3 py-1 text-sm rounded-full">AWS</span>
    </div>

      {/* Key Features */}
      <ul className="text-sm text-gray-400 mt-4 list-disc list-inside">
      <li>Personalized link hub</li>
      <li>Minimal & responsive design</li>
      <li>Customizable link categories</li>
    </ul>

    {/* Progress Bar */}
    <div className="w-full bg-gray-700 rounded-full h-2.5 mt-4">
      <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "70%" }}></div>
    </div>
    <span className="text-xs text-gray-300 mt-1">70% Complete</span>

    {/* Call to Action Buttons */}
    <div className="mt-5 flex gap-3">
      <a 
        href="https://lynkit.example.com" 
        target="_blank"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all text-sm"
      >
        View Project
      </a>
      <a 
        href="https://github.com/yourrepo" 
        target="_blank"
        className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-all text-sm"
      >
        GitHub Repo
      </a>
    </div>

    {/* Release Date (Optional) */}
    <p className="text-xs text-gray-400 mt-4">Planned Release: March 2025</p>
  </div>
</div>

    </div>
  );
}
