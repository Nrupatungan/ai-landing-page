"use client"

import { testimonials } from "@/data/testimonials";
import Image from "next/image";
import { motion } from "framer-motion";

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium">Beyond Expectations.</h2>
        <p className="mt-5 text-center text-lg md:text-xl tracking-tight text-white/70 max-w-xs mx-auto">Our revolutionary AI SEO tools have transformed our client&apos;s strategies.</p>

        <div className="flex overflow-hidden mt-10 pl-5 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div className="flex gap-5 pr-5 flex-none"
          initial={{
            translateX: "-50%",
          }}
          animate={{
            translateX: "0%"
          }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }}
          >
              {[...testimonials, ...testimonials].map((testimonial)  => (
                <div key={testimonial.name} className="border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xs md:max-w-md flex-none">
                  <p className="text-lg md:text-2xl tracking-tight">{testimonial.text}</p>
                  <div className="flex items-center gap-3 mt-5">
                    <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-overlay before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
                      <Image src={testimonial.avatarImg} alt={`Avatar for ${testimonial.name}`} height={44} width={44} className="rounded-lg grayscale border border-white/30" />
                    </div>
                    <div>
                      <div>{testimonial.name}</div>
                      <div className="text-white/50 text-sm">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
        </div>
      </div>
    </section>
  )
};
