"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaGithub, FaBlog, FaInstagram } from "react-icons/fa";
import { trackEvent } from "@/utils/analytics";

export default function LinktreeClone() {
  const [darkMode, setDarkMode] = useState(false);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getQuote = async () => {
    const response = await fetch("/api/quote/get-quote");
    const data = await response.json();
    setQuote(data[0].q);
    setAuthor(data[0].a);
  };

  useEffect(() => {
    getQuote();
  }, []);

  const links = [
    { title: "GitHub", url: "https://github.com/itspsychocoder", icon: <FaGithub /> },
    { title: "Blog", url: "https://psychocoder.hashnode.dev", icon: <FaBlog /> },
    { title: "Instagram", url: "https://instagram.com/phobic.psycho", icon: <FaInstagram /> },
  ];

  const getStatusMessage = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "☀️ Good morning! Check out my latest project.";
    if (hour < 18) return "🚀 Afternoon coding session in progress.";
    return "🌙 Late-night grinding on Reflecto.";
  };

  const track = (data) => {
    console.log(`Tracking event: `, data);
    trackEvent(data);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-6 transition-all duration-300 ${
      darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
    }`}>

      {/* Profile Section */}
      <img src="/avatar.webp" alt="Profile" className="rounded-full w-24 h-24 mb-4 border-4 border-blue-500 shadow-lg" />
      <div className="text-center">
        <h1 className="text-2xl font-bold">Hussnain Ahmad</h1>
        <p className="text-sm opacity-75">Full Stack Web Developer | Tech Enthusiast</p>
        <p className="mt-2 text-xs font-medium opacity-90 italic">{quote} — {author}</p>
      </div>

      {/* Links Section */}
      <div className="mt-6 w-full max-w-xs">
        {links.map(({ title, url, icon }) => (
          <a
            key={title}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track({ action: "click", category: "link", label: title })}
            className="flex items-center justify-center gap-3 text-center p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all my-2 shadow-md"
          >
            {icon} {title}
          </a>
        ))}
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="mt-4 px-4 py-2 text-sm bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all shadow-md"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* Currently Reading Section */}
      <div className="mt-6 w-full max-w-xs">
        <h1 className="text-center text-3xl my-5 font-bold">Currently Reading</h1>
        <div className={`flex flex-col items-center rounded-lg p-5 shadow-lg transition-all ${
          darkMode ? "bg-gray-800 text-white" : "bg-blue-100 text-gray-900"
        }`}>
          <Image className="mt-3 rounded-md shadow-md" width={120} height={120} src="/book.jpg" alt="Book Cover" />
          <h2 className="text-center text-2xl font-bold mt-4">The Almanack Of Naval Ravikant</h2>
          <div className="flex gap-2 mt-3 flex-wrap justify-center">
            <span className="bg-gray-200 text-gray-800 px-3 py-1 text-sm rounded-full">Philosophy</span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 text-sm rounded-full">Wealth</span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 text-sm rounded-full">Mindset</span>
          </div>
        </div>
      </div>

      {/* Current Project Section */}
      <div className="mt-6 w-full max-w-xs">
        <h1 className="text-center text-3xl my-5 font-bold">Current Project</h1>
        <div className="flex flex-col items-center bg-gray-900 text-white rounded-lg p-5 hover:bg-gray-800 transition-all shadow-lg">
          <h2 className="text-center text-2xl font-bold">Lynk It</h2>
          <span className="text-sm text-gray-300 mt-1 px-3 py-1 bg-blue-600 rounded-full">In Progress 🚀</span>
          <p className="text-center text-sm text-gray-300 mt-2">
            A minimal one-page hub for all my links, projects, and content.
          </p>
          <div className="flex gap-2 mt-3 flex-wrap justify-center">
            <span className="bg-gray-200 text-gray-800 px-3 py-1 text-sm rounded-full">Next.js</span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 text-sm rounded-full">Node</span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 text-sm rounded-full">AWS</span>
          </div>
          <ul className="text-sm text-gray-400 mt-4 list-disc list-inside">
            <li>Personalized link hub</li>
            <li>Minimal & responsive design</li>
            <li>Customizable link categories</li>
          </ul>
          <div className="w-full bg-gray-700 rounded-full h-2.5 mt-4">
            <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "70%" }}></div>
          </div>
          <span className="text-xs text-gray-300 mt-1">70% Complete</span>
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
          <p className="text-xs text-gray-400 mt-4">Planned Release: March 2025</p>
        </div>
      </div>
    </div>
  );
}
