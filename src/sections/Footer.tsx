import LogoIcon from '@/assets/logo.svg'
import SocialX from '@/assets/social-x.svg'
import SocialInstagram from '@/assets/social-instagram.svg'
import SocialYoutube from '@/assets/social-youtube.svg'
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className='flex items-center lg:flex-1 gap-2 lg:justify-start'>
            <LogoIcon className="h-6 w-6" />
            <h3 className='font-medium'>AI Startup Landing Page</h3>
          </div>
          <nav className='flex flex-col lg:flex-row lg:flex-1 items-start lg:justify-center lg:items-center gap-5 lg:gap-7 text-xs md:text-sm text-white/70 mt-5 lg:mt-0'>
            <a href="#" className='hover:text-white transition'>Features</a>
            <a href="#" className='hover:text-white transition'>Developers</a>
            <a href="#" className='hover:text-white transition'>Company</a>
            <a href="#" className='hover:text-white transition'>Blog</a>
            <a href="#" className='hover:text-white transition'>Changelog</a>
          </nav>
          <div className='flex gap-5 items-center mt-5 lg:mt-0 text-white/40 lg:flex-1 lg:justify-end'>
            <SocialX className='hover:text-white transition cursor-pointer'/>
            <SocialInstagram className='hover:text-white transition cursor-pointer'/>
            <SocialYoutube className='hover:text-white transition cursor-pointer'/>
          </div>
        </div>
      </div>
    </footer>
  )
};
