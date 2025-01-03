// components/Header.tsx
import React from 'react';
import { useTranslations } from 'next-intl';

import { Montserrat } from 'next/font/google';
import { DM_Sans } from 'next/font/google';
import Image from 'next/image';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: '200', // Regular 400
});

const dm_sans = DM_Sans({
    subsets: ['latin'],
    weight: '600', // Regular 400
});

const Elegirnos: React.FC = () => {
    const tPorQueElegirnos = useTranslations('PorQueElegirnos');
    return (
        <div id='elegirnos' className={`mx-auto w-full h-full flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-32 bg-[#A52FD6] text-white pr-6 pl-6 pt-6 sm:p-0 ${montserrat.className}`}>
            <div className='flex flex-col gap-10'>
                <div className={`text-[40px] sm:text-[50px] font-bold leading-[1] ${dm_sans.className}`}>
                    {tPorQueElegirnos("title")}
                </div>
                <div className='flex jusfity-center items-center text-[18px] sm:text-[24px] gap-4 font-bold'>
                    <div>
                        <Image
                            src="/assets/colaboration.png"
                            width={114}
                            height={84}
                            alt="Walo B2B socio estrategico para construir relaciones solidas"
                        />
                    </div>
                    <div>{tPorQueElegirnos("subtitle1")}</div>
                </div>
                <div className='flex jusfity-center items-center text-[18px] sm:text-[24px] gap-4 font-bold'>
                    <div>
                        <Image
                            src="/assets/experts.webp"
                            width={114}
                            height={84}
                            alt="Walo B2B socio estrategico para construir relaciones solidas"
                        />
                    </div>
                    <div>{tPorQueElegirnos("subtitle2")}</div>
                </div>
                <div className='flex jusfity-center items-center text-[18px] sm:text-[24px] gap-4 font-bold'>
                    <div>
                        <Image
                            src="/assets/check_image.png"
                            width={114}
                            height={83}
                            alt="Walo B2B socio estrategico para construir relaciones solidas"
                        />
                    </div>
                    <div>{tPorQueElegirnos("subtitle3")}</div>
                </div>
            </div>
            <div>
                <Image
                    src="/assets/img-analytics.png"
                    width={683}
                    height={768}
                    alt="Walo B2B socio estrategico para construir relaciones solidas"
                />
            </div>
        </div>
    );
};

export default Elegirnos;
