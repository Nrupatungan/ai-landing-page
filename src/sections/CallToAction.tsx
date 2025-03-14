"use client"

import Button from "@/components/Button";
import starBackground from '@/assets/stars.png';
import gridLines from '@/assets/grid-lines.png'
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import { RefObject, useEffect, useRef } from "react";

const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event: MouseEvent) => {
    if(!to.current) return;
    const { top, left } = to.current?.getBoundingClientRect();
    mouseX.set(event.x - left);
    mouseY.set(event.y - top)
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    }
  }, [])

  return [mouseX, mouseY];
}

export const CallToAction = () => {
    const sectionRef = useRef(null);
    const borderedDivRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
      target: sectionRef,
      offset: ['start end', 'end start']
    })
  
    const backgroundPositionY = useTransform(scrollYProgress, [0,1], [-150,150]);

    const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);

    const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <section className="py-20 md:py-24" ref={sectionRef}>
      <div className="container">
        <motion.div className="border border-white/15 py-24 rounded-xl overflow-hidden relative group" 
        style={{
          backgroundImage: `url(${starBackground.src})`,
          backgroundPositionY
        }}
        animate={{
          backgroundPositionX: starBackground.width
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 90
        }}
        ref={borderedDivRef}
        >
          <div className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700" 
          style={{
            backgroundImage: `url(${gridLines.src})`
          }}></div>
          
          <motion.div className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700" 
          style={{
            maskImage,
            backgroundImage: `url(${gridLines.src})`
          }}></motion.div>

          <div className="relative">
            <h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-center max-w-md mx-auto">AI-driven SEO for everyone.</h2>
            <p className="mt-5 text-lg md:text-xl tracking-tight text-white/70 px-4 text-center max-w-xs mx-auto">Achieve clear, impactful results without the complexity.</p>
            <div className="flex justify-center mt-5 md:mt-7">
              <Button>Join waitlist</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
};
