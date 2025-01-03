// components/Header.tsx
import React from 'react';
import { useTranslations } from 'next-intl';

import { Bricolage_Grotesque } from 'next/font/google';
import { DM_Sans } from 'next/font/google';
import Link from 'next/link';

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: '200', // Regular 400
});

const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: '500', // Regular 400
});

const Capacitacion: React.FC = () => {
  const tCapacitaciones = useTranslations('Capacitaciones');
  return (
    <div>
      <div id='capacitacion' className="relative w-full h-full sm:h-screen overflow-hidden">
        {/* Video de fondo */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="./assets/video/capacitacion-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Contenido del encabezado */}
        <div className={`relative z-10 flex flex-col sm:flex-row items-center justify-stretch sm:justify-around h-full text-white bg-black bg-opacity-30 p-10 sm:p-0 ${bricolageGrotesque.className}`}>
          <div className='flex flex-col w-full sm:w-[50vw]'>
            <div className={`text-[45px] sm:text-[70px] ${dm_sans.className}`}>{tCapacitaciones("title")}</div>
            <div className='text-[20px] sm:text-[35px] md:text-[30px]'>{tCapacitaciones("subtitle")}</div>
            <div className='text-[20px] sm:text-[35px] md:text-[30px]'>
              <ul className="list-disc">
                <li>{tCapacitaciones("list1")}</li>
                <li>{tCapacitaciones("list2")}</li>
                <li>{tCapacitaciones("list3")}</li>
                <li>{tCapacitaciones("list4")}</li>
              </ul>
            </div>
            <div className='italic text-[20px] sm:text-[35px] md:text-[30px] flex justify-center leading-[2]'>
              "{tCapacitaciones("other1")}
              <br />
              {tCapacitaciones("other2")}"
            </div>
          </div>
          <div className='mt-0 sm:mt-[45vh]'>
            <Link href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0zaXal35TIzaCVYRmZ44Aw4hqRd8_a7zfYi7PFJmvl4R4CVd4RH2VfzQGAvvLma8IdMw4Jp_eV?gv=true" target='_blank' className='text-[16px]'><div className='bg-[#3795bd] hover:bg-[#1a5a75] pl-10 pr-10 pt-4 pb-4'>
              {tCapacitaciones("agendarUnaCita")}
            </div></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capacitacion;
