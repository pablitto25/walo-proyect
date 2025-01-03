// components/Header.tsx
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Bricolage_Grotesque } from 'next/font/google';

const bricolageGrotesque = Bricolage_Grotesque({
    subsets: ['latin'],
    weight: '300', // Regular 400
});

const Cards: React.FC = () => {
    const t = useTranslations('Home');
    return (

        <div className={`container mx-auto grid grid-rows-10 grid-flow-row sm:grid-flow-col gap-8 pt-14 px-14 pb-14 sm:pt-24 sm:px-24 sm:pb-0 h-[auto] sm:h-[100vh] text-[30px] leading-[1] ${bricolageGrotesque.className}`}>
            <div className="row-span-3 bg-[#AC53E5] flex flex-col justify-between rounded-xl text-white p-6 relative h-[20vh] sm:h-[24vh]">
                <div className="flex justify-center">
                    <Image
                        className="bg-[#F9F9F9] rounded-full absolute -top-[8%]"
                        src="/assets/logo-walo.webp"
                        width={80}
                        height={80}
                        alt="Walo B2B socio estrategico para construir relaciones solidas"
                    />
                </div>
                <div className='pl-4'>
                    <span>Ideas sólidas,<br /> conexiones<br /> fuertes</span>
                </div>
            </div>
            <div className="row-span-5 sm:row-span-6 bg-[#4E31AA] flex flex-col justify-end rounded-xl text-white p-6 gap-4 h-[40vh] sm:h-[53vh]">
                <div className={`text-[35px] leading-[1] flex justify-center`}>
                    <span>GENERACION <br /> DE DEMANDA</span>
                </div>
                <div className=''>
                    <Image
                        src="/assets/right.png"
                        width={60}
                        height={60}
                        alt="Walo B2B socio estrategico para construir relaciones solidas"
                    />
                </div>
            </div>
            <div className="row-span-6 sm:row-span-4 bg-[#F7F7F8] flex flex-col justify-between rounded-xl text-[#4E31AA] p-6">
                <div className='flex justify-end'>
                    <Image
                        src="/assets/plus.svg"
                        width={28}
                        height={28}
                        alt="Walo B2B socio estrategico para construir relaciones solidas"
                    />
                </div>
                <div>
                    <span>Sobre Nosotros</span>
                </div>
            </div>
            <div className="row-span-8 sm:row-span-5 bg-[#3795BD] flex flex-col justify-between rounded-xl text-white p-6">
                <div className='flex justify-end'>
                    <Image
                        src="/assets/plus-white.svg"
                        width={28}
                        height={28}
                        alt="Walo B2B socio estrategico para construir relaciones solidas"
                    />
                </div>
                <div>
                    <span>E-mail marketing</span>
                </div>
            </div>
            <div className="row-span-8 sm:row-span-4 bg-[#4E31AA] flex flex-col justify-between rounded-xl text-white p-6">
                <div className='flex justify-end'>
                    <Image
                        src="/assets/plus-white.svg"
                        width={28}
                        height={28}
                        alt="Walo B2B socio estrategico para construir relaciones solidas"
                    />
                </div>
                <div>
                    <span>¿Por qué <br /> elegirnos?</span>
                </div>
            </div>
            <div className="row-span-8 sm:row-span-5 bg-[#F7F7F7] flex flex-col justify-between rounded-xl text-[#4E31AA] p-6">
                <div className='flex justify-end'>
                    <Image
                        src="/assets/plus.svg"
                        width={28}
                        height={28}
                        alt="Walo B2B socio estrategico para construir relaciones solidas"
                    />
                </div>
                <div>
                    <span>Reserva tu cita<br /> va al calendar</span>
                </div>
            </div>
            <div className="row-span-6 sm:row-span-3 bg-[#3795BD] flex flex-col justify-between rounded-xl text-white p-6">
                <div className='flex justify-end'>
                    <Image
                        src="/assets/plus-white.svg"
                        width={28}
                        height={28}
                        alt="Walo B2B socio estrategico para construir relaciones solidas"
                    />
                </div>
                <div>
                    <span>Capacitaciones</span>
                </div>
            </div>
            <div className="row-span-8 sm:row-span-6 bg-[#AC52E5] flex flex-col justify-between rounded-xl text-white p-6">
                <div className='flex justify-end'>
                    <Image
                        src="/assets/plus-white.svg"
                        width={28}
                        height={28}
                        alt="Walo B2B socio estrategico para construir relaciones solidas"
                    />
                </div>
                <div>
                    <span>Contactanos</span>
                </div>
            </div>
        </div>
    );
};

export default Cards;
