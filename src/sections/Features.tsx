"use client"

import productImage from '@/assets/product-image.png'
import { useState } from 'react';
import { useMotionTemplate, useMotionValue, motion, animate, ValueAnimationTransition } from 'framer-motion';
import { tabs } from '@/data/tabs';
import FeaturesTab from '@/components/FeaturesTab';

export const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectedTab = (index: number) => {
    setSelectedTab(index)

    const animateOptions: ValueAnimationTransition = {
      duration: 2,
      ease: 'easeInOut',
    }

    animate(backgroundSizeX, [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX], animateOptions)

    animate(backgroundPositionX, [backgroundPositionX.get(), tabs[index].backgroundPositionX], animateOptions)

    animate(backgroundPositionY, [backgroundPositionY.get(), tabs[index].backgroundPositionY], animateOptions)
  }

  return (
    <section className='py-20 md:py-24'>
      <div className="container">
        <h2 className='text-5xl md:text-6xl text-center font-medium tracking-tighter'>Elevate your SEO efforts.</h2>
        <p className='text-white/70 text-lg md:text-xl text-center tracking-tight mt-5 max-w-xl mx-auto'>From small startups to large enterprises, our AI-driven tool has revolutionized the way businesses approach SEO.</p>
        <div className="mt-10 flex flex-col gap-3 lg:flex-row">
          {tabs.map((tab, tabIndex) => (
            <FeaturesTab 
            {...tab} 
            onClick={() => handleSelectedTab(tabIndex)} 
            key={tab.title} 
            selected={selectedTab === tabIndex}
            />
          ))}
        </div>
        <div className='mt-3 border border-white/15 rounded-xl p-2.5'>
          <motion.div className="border border-white/20 aspect-video bg-cover" 
          style={{
            backgroundPosition,
            backgroundSize,
            backgroundImage: `url(${productImage.src})`,
          }}></motion.div>
        </div>
      </div>
    </section>
  )
};
