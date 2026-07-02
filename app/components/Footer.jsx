import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo-white.png";
import footerImage from "@/app/assets/images/footer-pic01.png";
import footerLogo from "@/app/assets/images/footer-logo.svg";

export default function Footer() {
  return (
    <footer className="bg-fifth-black text-white md:pt-20">
      <div className="max-w-[2000px] mx-auto px-4 space-y-28 md:space-y-40">
        {/* CONTACT US SECTION */}
        {/* <div className="flex flex-col md:flex-row justify-between items-center gap-x-8">
          <h3 className="text-left font-bold w-auto text-[clamp(32px,5vw,40px)] mb-3 md:mb-0 flex-none">Contact Us</h3>
          <div className="flex justify-evenly text-white pt-8 container mx-auto">
            <a
              target="_blank"
              className="relative pb-0.5 font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-fifth-gold after:origin-left after:scale-x-[0.075] after:transition-all after:duration-500 after:ease-out hover:opacity-[0.9] hover:after:scale-x-100"
              href="mailto:info@vi__six.com"
            >
              info@vi__six.com
            </a>
            <a
              target="_blank"
              className="relative pb-0.5 font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-fifth-gold after:origin-left after:scale-x-[0.075] after:transition-all after:duration-500 after:ease-out hover:opacity-[0.9] hover:after:scale-x-100"
              href="tel:+2125551234"
            >
              212 · 555 · 1234
            </a>
          </div>
        </div> */}

        <div className="flex flex-wrap justify-between">
          <div className="md:w-8/12 w-full">
            <ul className="flex flex-col md:flex-row justify-between items-center w-full gap-y-8 flex-wrap">
              <li className="w-[65%] md:w-[30%] border-b-2 border-fifth-gold pb-2">
                <a href="/" className="capitalize hover:text-fifth-gold transition-colors duration-300 block text-center sm:text-left">
                  Home
                </a>
              </li>
              <li className="w-[65%] md:w-[30%] border-b-2 border-fifth-gold pb-2">
                <a href="#about" className="capitalize hover:text-fifth-gold transition-colors duration-300 block text-center sm:text-left">
                  About
                </a>
              </li>
              <li className="w-[65%] md:w-[30%] border-b-2 border-fifth-gold pb-2">
                <a
                  href="#venues"
                  className="capitalize hover:text-fifth-gold transition-colors duration-300 block text-center sm:text-left"
                >
                  Venues
                </a>
              </li>
              {/* <li className="w-[30%] border-b-2 border-fifth-gold pb-2">
                <a
                  href="#portfolio"
                  className="capitalize hover:text-fifth-gold transition-colors duration-300 block text-center sm:text-left"
                >
                  Portfolio
                </a>
              </li> */}
              {/* <li className="w-[30%] border-b-2 border-fifth-gold pb-2">
                <a href="#team" className="capitalize hover:text-fifth-gold transition-colors duration-300 block text-center sm:text-left">
                  The Team
                </a>
              </li> */}
              {/* <li className="w-[30%] border-b-2 border-fifth-gold pb-2">
                <a
                  href="#contact"
                  className="capitalize hover:text-fifth-gold transition-colors duration-300 block text-center sm:text-left"
                >
                  Book a Call
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-end items-end pb-4">
          <div className="md:w-3/12 w-full">
            {/* <img src="https://vi-six.vercel.app/assets/images/about-image3.jpeg" alt="" /> */}
            <Image src={footerImage} width={1000} height={1000} alt="Footer Image" className="w-full h-auto max-md:px-4" />
          </div>
          <div className="md:w-9/12 flex justify-end w-full mt-8 md:mt-0">
            <Image className="md:w-9/12 h-auto w-full" src={footerLogo} width={1000} height={1000} alt="Fifth Veil Logo" />
          </div>
        </div>
      </div>
    </footer>
  );
}
