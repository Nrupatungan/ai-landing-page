"use client"

import { ComponentPropsWithoutRef, useEffect, useRef, useState } from 'react';
import  { DotLottieCommonPlayer, DotLottiePlayer } from '@dotlottie/react-player'
import { useMotionTemplate, useMotionValue, motion, animate, ValueAnimationTransition } from 'framer-motion';
import { tabs, tabsProps } from '@/data/tabs';

const FeaturesTab = (props: tabsProps[number] & ComponentPropsWithoutRef<'div'> & { selected : boolean}) => {
  const dotlottieRef = useRef<DotLottieCommonPlayer>(null);
  const tabRef = useRef<HTMLDivElement>(null);

  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  const handleMouseEnter = () => {
    if(dotlottieRef.current === null) return;
    dotlottieRef.current?.seek(0);
    dotlottieRef.current?.play();
  }

  useEffect(() => {
    if(!tabRef.current || !props.selected) return;

    xPercentage.set(0);
    yPercentage.set(0);
    const {height, width} = tabRef.current?.getBoundingClientRect();
    const circumference = height * 2 + width * 2;
    const times = [0, width/circumference, (width + height) / circumference, (width * 2 + height) / circumference, 1];

    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop"
    }

    animate(xPercentage, [0, 100, 100, 0, 0], options)
    animate(yPercentage, [0, 0, 100, 100, 0], options)
  }, [props.selected])

  return (
    <div onMouseEnter={handleMouseEnter} key={props.title} className='flex border border-white/15 p-2.5 rounded-xl gap-2.5 items-center lg:flex-1 relative' ref={tabRef} onClick={props.onClick}>
      {props.selected && (
        <motion.div className='absolute inset-0 -m-px border border-[#A369FF] rounded-xl'
          style={{
            maskImage
          }}
        ></motion.div>
      )}
      <div className='h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center'>
        <DotLottiePlayer 
          src={props.icon}
          className='h-5 w-5'
          ref={dotlottieRef}
        />
      </div>
      <div className='font-medium'>{props.title}</div>
      {props.isNew && (
        <div className='text-xs text-black bg-[#8c44ff] py-0.5 px-2 rounded-full font-semibold'>new</div>
      )}
  </div>)
}

export default FeaturesTab