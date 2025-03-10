import Button from "@/components/Button";
import starBackground from '@/assets/stars.png';
import gridLines from '@/assets/grid-lines.png'

export const CallToAction = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="border border-white/15 py-24 rounded-xl overflow-hidden relative" 
        style={{
          backgroundImage: `url(${starBackground.src})`,
        }}>
          <div className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]" style={{
            backgroundImage: `url(${gridLines.src})`
          }}></div>
          <div className="relative">
            <h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-center max-w-md mx-auto">AI-driven SEO for everyone.</h2>
            <p className="mt-5 text-lg md:text-xl tracking-tight text-white/70 px-4 text-center max-w-xs mx-auto">Achieve clear, impactful results without the complexity.</p>
            <div className="flex justify-center mt-5 md:mt-7">
              <Button>Join waitlist</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};
