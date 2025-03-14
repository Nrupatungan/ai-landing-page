"use client";

import Image from 'next/image'
import { motion } from 'framer-motion'
import { images } from '@/data/images';

export const LogoTicker = () => {
  return (
    <section className='py-20 md:py-24'>
      <div className="container">
        <div className='flex items-center gap-5'>
          <div className="flex-1 md:flex-none">
            <h2>Trusted by top innovative teams</h2>
          </div>

          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div className='flex flex-none gap-14 pr-14'
            initial={{
              translateX: "-50%"
            }}
            animate={{
              translateX: "0%",
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
            >
              {[...images, ...images].map((image) => (
                <Image key={image.content.src} src={image.content.src} alt={`${image.content.src.replace('logo-', '').replace('.png', '')} logo`} className='w-auto h-6' width={100} height={24} />
                ))
              }
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
};
