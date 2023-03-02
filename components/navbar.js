import Link from 'next/link'
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image';

export default function  Navbar(){
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  

  return (
    <nav className=' flex justify-between bg-[#E4D4DA]'>
      <ul className='flex text-lg font-bold mx-1 items-center justify-center space-x-4'>
        <li>
          <Link 
            href="/"
            >
            <Image 
                src="/images/logo.svg" 
                height={38}
                width={38}
                alt="check your flight footprint"
                />
          </Link>
        </li>
        <li className='hover:text-pink-500'>
          <Link 
            href="/form"
            
          >
            Calculate footprint
          </Link>
        </li>
        <li className='hover:text-pink-500'>
          <Link 
            href="/jsForm">
             Keep in touch!
          </Link>
        </li>
      </ul>
      <div className='flex space-x-3 p-1 mx-1'> 
        <SocialIcon  url="https://github.com/Aline89b/" />
        <SocialIcon  url="https://linkedin.com/in/aline-grianti-32a9a9b7/" />
        <SocialIcon url="https://whatsapp.com/wa.me/393283539590" />
      </div>
    </nav>
  );
}