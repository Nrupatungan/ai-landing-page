import acmeLogo from '@/assets/logo-acme.png'
import apexLogo from '@/assets/logo-apex.png'
import celestialLogo from '@/assets/logo-celestial.png'
import quantumLogo from '@/assets/logo-quantum.png'
import pulseLogo from '@/assets/logo-pulse.png' 
import echoLogo from '@/assets/logo-echo.png'
import Image from 'next/image'

export const LogoTicker = () => {
  return (
    <section className='py-20 md:py-24'>
      <div className="container">
        <div className='flex items-center gap-5'>
          <div className="flex-1 md:flex-none">
            <h2>Trusted by top innovative teams</h2>
          </div>

          <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className='flex flex-none gap-14'>
              {[acmeLogo,apexLogo,celestialLogo,quantumLogo,pulseLogo,echoLogo].map((logo) => (
                <Image key={logo.src} src={logo} alt={`${logo.src.replace('logo-', '').replace('.png', '')} logo`} className='w-auto h-6' width={100} height={24} />
              ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};
