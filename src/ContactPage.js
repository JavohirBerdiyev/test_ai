import React from 'react';
import { Facebook, Instagram, MessageCircle, Youtube } from 'lucide-react';

const AssosContactPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <button className="text-purple-500 mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-2xl font-bold">A'assos</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-purple-500">Asosiy</a></li>
              <li><a href="#" className="hover:text-purple-500">Kurslar</a></li>
              <li><a href="#" className="hover:text-purple-500">Biz bilan aloqa</a></li>
              <li><a href="#" className="hover:text-purple-500">Biz haqimizda</a></li>
            </ul>
          </nav>
          <button className="bg-gray-700 px-4 py-2 rounded">Tizimga kirish</button>
        </div>
      </header>

      <main className="container mx-auto mt-8 px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Biz bilan aloqa</h2>
            <p className="mb-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Aloqa uchun 24/7</h3>
              <p className="text-2xl">+998 97 628 28 82</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Elekton manzilimiz</h3>
              <p className="text-2xl text-gray-400">Help@loremipsum.uz</p>
            </div>
          </div>

          <form className="md:w-1/2 mt-8 md:mt-0">
            <h3 className="text-xl font-bold mb-4">Taklif yoki jalobangiz bo'lsa bizga yozing!</h3>
            <div className="space-y-4">
              <input type="text" placeholder="Ismingiz*" className="w-full bg-gray-800 p-2 rounded" />
              <input type="text" placeholder="Familyangiz*" className="w-full bg-gray-800 p-2 rounded" />
              <input type="tel" placeholder="Telefon raqamingiz*" className="w-full bg-gray-800 p-2 rounded" defaultValue="+998" />
              <textarea placeholder="Taklif yoki muammo" className="w-full bg-gray-800 p-2 rounded h-32" />
              <button type="submit" className="w-full bg-purple-600 py-2 rounded font-bold">Yuborish</button>
            </div>
          </form>
        </div>
      </main>

      <footer className="bg-gray-800 mt-16 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">A'assos</h2>
              <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <p>+998 97 628 28 82</p>
              <p>Fakea.the@gmail.com</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-4">Asosiy</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-purple-500">Kurslar</a></li>
                  <li><a href="#" className="hover:text-purple-500">Lorem ipsum</a></li>
                  <li><a href="#" className="hover:text-purple-500">Lorem ipsum</a></li>
                  <li><a href="#" className="hover:text-purple-500">Hamkorlar</a></li>
                  <li><a href="#" className="hover:text-purple-500">Lorem ipsum</a></li>
                  <li><a href="#" className="hover:text-purple-500">Biz haqimizda</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Kurslar</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-purple-500">Frontend kursi</a></li>
                  <li><a href="#" className="hover:text-purple-500">Backend kursi</a></li>
                  <li><a href="#" className="hover:text-purple-500">Suniy intellekt kursi</a></li>
                  <li><a href="#" className="hover:text-purple-500">Web dizayn kursi</a></li>
                  <li><a href="#" className="hover:text-purple-500">Grafik dizayn kursi</a></li>
                  <li><a href="#" className="hover:text-purple-500">Motion dizayn kursi</a></li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Ijtimoiy tarmoqlar</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-purple-500"><Facebook /></a>
                <a href="#" className="hover:text-purple-500"><Instagram /></a>
                <a href="#" className="hover:text-purple-500"><MessageCircle /></a>
                <a href="#" className="hover:text-purple-500"><Youtube /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500">
            Barcha huquqlar himoyalangan 2024
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AssosContactPage;