// components/Header.tsx
import React from 'react';
import { useTranslations } from 'next-intl';

import Image from 'next/image';
import Link from 'next/link';



const EmailMarketing: React.FC = () => {
    const tEmailMarketing = useTranslations('EmailMarketing');
    return (
        <div id='emailMarketing' className={`mx-auto flex flex-col justify-center items-center w-full h-full bg-[#401368] pt-10 sm:pt-0`}>
            <div className='flex flex-col sm:flex-row items-center justify-between bg-[#401368] text-white w-3/4 p-0 sm:p-14'>
                <div className='w-full sm:w-[50vw]'>
                    <div className='text-[70px] font-bold leading-[1] pb-8'>
                        <span>{tEmailMarketing("title")}</span><br />
                        <span>{tEmailMarketing("title2")}</span>
                    </div>
                    <div className='text-[20px]'>
                        <p>
                            {tEmailMarketing("description1")}
                        </p><br />
                    </div>
                    <div className='text-[20px]'>
                        <p>
                            {tEmailMarketing("description2")}
                        </p>
                    </div>
                </div>
                <div>
                    <Image
                        className='-top-4 transform translate-y-[15%]'
                        src="/assets/email.webp"
                        width={600}
                        height={600}
                        alt="Walo B2B socio estrategico para construir relaciones solidas"
                    />
                </div>
            </div>
            <div className='flex justify-end w-full p-16 bg-[#3795BD]'>
                <Link href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0zaXal35TIzaCVYRmZ44Aw4hqRd8_a7zfYi7PFJmvl4R4CVd4RH2VfzQGAvvLma8IdMw4Jp_eV?gv=true" target='_blank' className='text-[16px]'>
                    <div className='bg-[#6A49C6] hover:bg-[#1a5a75] text-white pl-10 pr-10 pt-4 pb-4 transform translate-x-[-20%] sm:translate-x-[-110%]'>
                        {tEmailMarketing("agendarUnaCita")}
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default EmailMarketing;
