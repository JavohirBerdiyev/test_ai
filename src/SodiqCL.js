import React, { useState } from 'react';
import { Instagram, Send, Globe } from 'lucide-react';

const SodiqSchool = () => {
  const [language, setLanguage] = useState('Eng');

  return (
    <div className="bg-navy text-white min-h-screen">
      {/* Header */}
      <header className="bg-navy p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/api/placeholder/40/40" alt="Sodiq School Logo" className="mr-2" />
            <span className="font-bold">SODIQ SCHOOL</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>+998 99 099 78 77</span>
            <span className="text-orange">Mon-Fri | 9:00-18:00</span>
          </div>
          <div className="flex space-x-4">
            <Instagram size={20} />
            <Send size={20} />
            <Globe size={20} />
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white text-navy">
        <div className="container mx-auto flex justify-between items-center p-4">
          <ul className="hidden md:flex space-x-4">
            <li><a href="#" className="hover:text-orange">About us</a></li>
            <li><a href="#" className="hover:text-orange">Team</a></li>
            <li><a href="#" className="hover:text-orange">Results</a></li>
            <li><a href="#" className="hover:text-orange">Opportunities</a></li>
            <li><a href="#" className="hover:text-orange">Contact</a></li>
            <li><a href="#" className="hover:text-orange">News</a></li>
            <li><a href="#" className="hover:text-orange">Personal cabinet</a></li>
            <li><a href="#" className="hover:text-orange">More question</a></li>
          </ul>
          <div className="flex items-center space-x-4">
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-white text-navy border border-navy rounded"
            >
              <option value="Eng">Eng</option>
              <option value="Rus">Rus</option>
              <option value="Uzb">Uzb</option>
            </select>
            <button className="bg-navy text-white px-4 py-2 rounded hover:bg-blue-900">
              APPLY NOW
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-navy to-transparent z-10"></div>
        <img src="/api/placeholder/1200/600" alt="Hero background" className="w-full h-[70vh] object-cover" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center z-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">START FROM<br />KNOWLEDGE</h1>
            <p className="max-w-md mb-8">
              An electronic diary, weekly ratings, the ability to monitor classes and kitchen online. Additional IT clubs and school homeworks.
            </p>
            <button className="bg-orange text-white px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300">
              CONTACT US
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SodiqSchool;