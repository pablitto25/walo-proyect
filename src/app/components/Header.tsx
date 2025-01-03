"use client"
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Bricolage_Grotesque } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import arrow_white from '../../../public/assets/right-arrow-white.png';
import arrow_1 from '../../../public/assets/right-arrow-1.png';
import arrow_2 from '../../../public/assets/right-arrow-2.png';
import arrow_3 from '../../../public/assets/right-arrow-3.png';

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: '200', // Regular 400
});

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('Home');
  const tNavbar = useTranslations('Navbar');
  return (
    <header className="relative w-full h-screen overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="./assets/video/video_header.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Barra de navegación */}
      <nav className="absolute top-0 left-0 w-full z-20 flex flex-col sm:flex-row items-start sm:items-center justify-center space-x-20 p-4 sm:p-8 text-white text-[20px]">
        {/* Logo */}
        <Image
          className="bg-[#F9F9F9] rounded-full"
          src="/assets/logo-walo.webp"
          width={70}
          height={70}
          alt="Logo"
        />
        <Link href={"#sobre-nosotros"} className="pb-2 sm:pb-0" onClick={(e) => {
          e.preventDefault();
          const target = document.querySelector("#sobre-nosotros");
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}>
          <div className='bg-[#3A1078] flex items-center justify-center pl-4 pr-4 pt-1.5 pb-1.5 rounded-full space-x-12 sm:space-x-6 '>
            <div>
              {tNavbar("sobreNosotros")}
            </div>
            <div className='bg-white p-1.5 rounded-full'>
              <Image
                className="bg-white"
                src={arrow_1}
                width={16}
                height={16}
                alt="Logo"
              />
            </div>
          </div>
        </Link>
        <Link href={"#elegirnos"} className='pb-2 sm:pb-0' onClick={(e) => {
          e.preventDefault();
          const target = document.querySelector("#elegirnos");
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}>
          <div className='bg-[#A52FD6] flex items-center justify-center pl-4 pr-4 pt-1.5 pb-1.5 rounded-full space-x-2'>
            <div>
              {tNavbar("elegirnos")}
            </div>
            <div className='bg-white p-1.5 rounded-full'>
              <Image
                className="bg-white"
                src={arrow_2}
                width={16}
                height={16}
                alt="Logo"
              />
            </div>
          </div>
        </Link>
        <div
          className="relative inline-block pb-2 sm:pb-0"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {/* Botón principal */}
          <div className="bg-[#3795BD] flex items-center justify-center pl-4 pr-4 pt-1.5 pb-1.5 rounded-full space-x-[26vw] sm:space-x-16 cursor-pointer">
            <div>
              {tNavbar("servicios")}
            </div>
            <div className="bg-white p-1.5 rounded-full">
              <Image
                className="bg-[#F9F9F9]"
                src={arrow_3}
                width={16}
                height={16}
                alt="Logo"
              />
            </div>
          </div>

          {/* Dropdown menu */}
          {isOpen && (
            <div className="relative sm:absolute left-0 rounded-lg z-10 w-48">
              <ul className="text-gray-700">
                <li className="px-4 py-2 cursor-pointer text-white hover:text-gray-400">
                  <Link href="#leadgeneration">{tNavbar("leadGeneration")}</Link>
                </li>
                <li className="px-4 py-2 cursor-pointer text-white hover:text-gray-400">
                  <Link href="#capacitacion" onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector("#capacitacion");
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}>{tNavbar("capacitaciones")}</Link>
                </li>
                <li className="px-4 py-2 cursor-pointer text-white hover:text-gray-400">
                  <Link href="#emailMarketing">{tNavbar("emailMarketing")}</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <Link href="#hablemos" className='pb-2 sm:pb-0'>
          <div className='bg-[#F7F7F8] text-[#3795BD] flex items-center justify-center pl-4 pr-4 pt-1.5 pb-1.5 rounded-full space-x-[18vw] sm:space-x-12'>
            <div>
              {tNavbar("contactanos")}
            </div>
            <div className='bg-[#3795BD] p-2 rounded-full'>
              <Image
                className="bg-[#3795BD]"
                src={arrow_white}
                width={14}
                height={14}
                alt="Logo"
              />
            </div>
          </div>
        </Link>

      </nav>

      {/* Contenido centrado */}
      <div
        className={`relative z-10 flex items-center justify-center h-full text-white bg-black bg-opacity-50 ${bricolageGrotesque.className}`}
      >
        <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-center">
          {t("headerTitle")}
          <br />
          {t("headerSecondTitle")}
        </span>
      </div>
    </header>
  );
};

export default Header;
