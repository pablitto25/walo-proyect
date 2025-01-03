// components/Header.tsx
import React from 'react';
import { useTranslations } from 'next-intl';

import { Bricolage_Grotesque } from 'next/font/google';
import Image from 'next/image';

const bricolageGrotesque = Bricolage_Grotesque({
    subsets: ['latin'],
    weight: '200', // Regular 400
});

const SobreNosotros: React.FC = () => {
    const tSobreNosotros = useTranslations('SobreNosotros');
    return (
        <div id="sobre-nosotros" className={`w-full bg-[#F7F7F8] ${bricolageGrotesque.className}`}>
            <div className='container mx-auto p-4 sm:p-24 '>
                <div className='flex items-center justify-center text-[30px] sm:text-[58px] font-bold text-[#3A1078] pb-4'>
                    <span>{tSobreNosotros("title")}</span>
                </div>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='col-span-2 w-[400px] sm:w-[740px]'>
                        <p className='text-[#3A1078] text-[18px] sm:text-[24px] font-medium'>
                        {tSobreNosotros("subtitle")}
                        </p>
                        <div className='flex flex-col sm:flex-row gap-10 sm:gap-20 pt-8'>
                            <div className='p-10 text-[19px] bg-[#57B0D9] rounded-[60] w-[320px] h-[300px] text-[#3A1078]'>
                                <p className='font-bold text-[#3A1078] pb-3 text-[22px]'>{tSobreNosotros("card1Title")}</p>
                                {tSobreNosotros("card1Description")}
                            </div>
                            <div className='p-10 text-[19px] bg-[#57B0D9] rounded-[60] w-[320px] h-[300px] text-[#3A1078]'>
                                <p className='font-bold text-[#3A1078] pb-3 text-[22px]'>{tSobreNosotros("card2Title")}</p>
                                {tSobreNosotros("card2Description")}
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 pt-8 hidden sm:block'>
                        <Image
                            src="/assets/SobreNosotrosLogo.png"
                            width={470}
                            height={475}
                            alt="Walo B2B socio estrategico para construir relaciones solidas"
                        />
                    </div>
                </div>
                <div className='col-span-1 pt-8 block sm:hidden'>
                    <Image
                        src="/assets/SobreNosotrosLogo.png"
                        width={400}
                        height={400}
                        alt="Walo B2B socio estrategico para construir relaciones solidas"
                    />
                </div>
            </div>
        </div>
    );
};

export default SobreNosotros;
