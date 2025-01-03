import React from 'react';
import { useTranslations } from 'next-intl';
import { Bricolage_Grotesque } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';



const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: '200',
});

const LeadGeneration: React.FC = () => {
  const tLeadGeneration = useTranslations('LeadGeneration');
  return (
    <div id='leadgeneration'>
      <div className="relative w-full h-[1600px] sm:h-[85vh] md:h-[100vh] overflow-hidden bg-[#3795BD]">
        {/* Video de fondo */}
        <Image
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] object-cover opacity-10"
          src="/assets/LeadGeneration-bg.gif"
          width={800}
          height={800}
          alt="Walo B2B socio estrategico para construir relaciones solidas"
          unoptimized
        />

        {/* Contenido centrado */}
        <div
          className={`relative z-10 flex items-center justify-center h-full text-white ${bricolageGrotesque.className}`}
        >
          <div className='absolute w-full z-10 flex flex-col items-center justify-center text-white'>
            <div className='flex flex-col items-center w-[80vw] sm:w-[60vw]pb-0 sm:pb-14 '>
              <div className=' text-[40px] sm:text-[53px] font-bold'>{tLeadGeneration("title")}</div>
              <div className='text-[20px] sm:text-[26px] text-center'><i>{tLeadGeneration("subtitle")}</i></div>
            </div>
            <div className='flex flex-col sm:flex-row gap-10 text-[16px] text-center w-[55vw]'>
              <div className='flex flex-col items-center justify-center'>
                <div className='pb-6'>
                  <Image
                    className='rounded-full'
                    src="/assets/analisis.png"
                    width={150}
                    height={150}
                    alt="Walo B2B socio estrategico para construir relaciones solidas"
                  />
                </div>
                <div>
                {tLeadGeneration("card1")}
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <div className='pb-6'>
                  <Image
                    className='rounded-full'
                    src="/assets/estrategias.png"
                    width={150}
                    height={150}
                    alt="Walo B2B socio estrategico para construir relaciones solidas"
                  />
                </div>
                <div>
                {tLeadGeneration("card2")}
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <div className='pb-6'>
                  <Image
                    className='rounded-full'
                    src="/assets/avanzado.png"
                    width={150}
                    height={150}
                    alt="Walo B2B socio estrategico para construir relaciones solidas"
                  />
                </div>
                <div>
                {tLeadGeneration("card3")}
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <div className='pb-6'>
                  <Image
                    className='rounded-full'
                    src="/assets/seguimiento.png"
                    width={150}
                    height={150}
                    alt="Walo B2B socio estrategico para construir relaciones solidas"
                  />
                </div>
                <div>
                {tLeadGeneration("card4")}
                </div>
              </div>
            </div>
            <div className='flex justify-end w-[50vw] pt-14 pb-10'>
              <Link href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0zaXal35TIzaCVYRmZ44Aw4hqRd8_a7zfYi7PFJmvl4R4CVd4RH2VfzQGAvvLma8IdMw4Jp_eV?gv=true" target='_blank' className='text-[16px]'>
                <div className='bg-[#6A49C6] hover:bg-[#1a5a75] text-white pl-10 pr-10 pt-4 pb-4'>
                {tLeadGeneration("agendarUnaCita")}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadGeneration;
