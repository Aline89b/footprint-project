import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between shadow-md shadow-orange-300">
      <ul className="flex text-lg font-bold mx-1 items-center justify-center space-x-4">
        <li>
          <Link href="/">
            <Image
              src="/images/logo.svg"
              height={40}
              width={40}
              alt="check your flight footprint"
            />
          </Link>
        </li>
        <li className="hover:text-orange-500">
          <Link href="/form">Calculate footprint</Link>
        </li>
        <li className="hover:text-orange-500">
          <Link href="/jsForm">Keep in touch!</Link>
        </li>
      </ul>
      <div className="flex space-x-3 p-1 mx-1">
        <SocialIcon url="https://github.com/Aline89b/" />
        <SocialIcon url="https://linkedin.com/in/aline-grianti-32a9a9b7/" />
        <SocialIcon url="https://whatsapp.com/wa.me/393283539590" />
      </div>
    </nav>
  );
}
