// components/Header.tsx
import React from 'react';
import { useTranslations } from 'next-intl';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: '600', // Regular 400
});



const Hablemos: React.FC = () => {
    const tHablemos = useTranslations('Hablemos');
    return (
        <div id='hablemos' className={`mx-auto w-full h-full flex flex-col sm:flex-row justify-center gap-20 items-center p-8 sm:p-40`}>
            <div>
                <Image
                    className='rounded-tl-[100px] rounded-br-[100px]'
                    src="/assets/hablemos.webp"
                    width={600}
                    height={600}
                    alt="Walo B2B socio estrategico para construir relaciones solidas"
                />
            </div>
            <div>
                <div className='flex flex-col text-[#3795BD] text-[20px]'>
                    <div className='pb-10 text-[50px] font-bold'>{tHablemos("title")}</div>
                    <div className='font-bold'>{tHablemos("title2")}</div>
                    <div>{tHablemos("email")}</div>
                    <br />
                    <div className='font-bold'>{tHablemos("title3")}</div>
                    <div>
                        <Link href={"https://wa.link/n8k531"} target='_blank'>
                            {tHablemos("telefono")}
                        </Link>

                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex gap-10 p-10'>
                            <div>
                                <Link href={"https://www.linkedin.com/company/walo-consulting-argentina/"} target='_blank'>
                                    <Image
                                        src="/assets/linkdin.webp"
                                        width={35}
                                        height={35}
                                        alt="Walo B2B socio estrategico para construir relaciones solidas"
                                    />
                                </Link>
                            </div>
                            <div>
                                <Link href={"https://www.facebook.com/profile.php?id=61569427075240"} target='_blank'>
                                    <Image
                                        src="/assets/facebook.png"
                                        width={35}
                                        height={35}
                                        alt="Walo B2B socio estrategico para construir relaciones solidas"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className=''>
                            <Link href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0zaXal35TIzaCVYRmZ44Aw4hqRd8_a7zfYi7PFJmvl4R4CVd4RH2VfzQGAvvLma8IdMw4Jp_eV?gv=true" target='_blank' className='text-[20px]'><div className='bg-[#3795bd] hover:bg-[#1a5a75] pl-10 pr-10 pt-4 pb-4 text-white text-center rounded-lg'>
                                {tHablemos("agendarUnaCita")}
                            </div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hablemos;
