'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import programming from '@/app/assets/programming.svg';

export default function Hero() {
    return (
        <div className="text-left px-10 sm:px-16 md:px-[15%] pt-[65%] sm:pt-[40%] md:pt-[22%] lg:pt-[15%] 2xl:pt-[17%] min-h-screen relative md:flex">
            <div className="my-2 mb-8 lg:mb-5">
                <h3 className="sm:text-xl md:text-xl lg:text-2xl text-slate">
                    Hi, my name is
                </h3>
                <motion.h1
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-[3.5rem] md:text-[5rem] 2xl:text-[7rem]"
                >
                    <span className="text-green shade">Nawin Kim</span>
                </motion.h1>
            </div>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="w-3/4 md:w-2/4"
            >
                <Image src={programming} alt="main-img" />
            </motion.div>
        </div>
    );
}
