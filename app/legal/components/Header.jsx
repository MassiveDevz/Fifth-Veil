import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/app/components/MobileMenu";

export default function Header() {
  return (
    <header className="max-w-[1600px] mx-auto pt-4 px-4 pb-24">
      <div className="w-full">
        <div className="flex flex-col h-full justify-between">
          <div className="flex justify-between items-center">
            <div className="self-baseline">
              <Link href="/">
                <Image className="w-60  h-auto" src="/logo-white.png" width={1000} height={1000} alt="Fifth Veil Logo" />
              </Link>
            </div>

            {/* <!-- Desktop Nav --> */}
            <nav className="hidden md:block text-end">
              <div>
                <Link href="/">
                  <p className="uppercase font-medium transition-all ease-in-out duration-300 text-white hover:text-fifth-gold">Home</p>
                </Link>
                <Link href="/#about">
                  <p className="uppercase font-medium transition-all ease-in-out duration-300 text-white hover:text-fifth-gold">About</p>
                </Link>
                <Link href="/#venues">
                  <p className="uppercase font-medium transition-all ease-in-out duration-300 text-white hover:text-fifth-gold">Venues</p>
                </Link>
                {/* <a href="index.html">
                    <p className="uppercase font-medium transition-all ease-in-out duration-300 text-white hover:text-fifth-gold">Home</p>
                  </a> */}
                {/* <a href="index.html#about">
                    <p className="uppercase font-medium transition-all ease-in-out duration-300 text-white hover:text-fifth-gold">About</p>
                  </a> */}
                {/* <a href="index.html#services">
                    <p className="uppercase font-medium transition-all ease-in-out duration-300 text-white hover:text-fifth-gold">
                      services
                    </p>
                  </a> */}
                {/* <a href="index.html#portfolio">
                    <p className="uppercase font-medium transition-all ease-in-out duration-300 text-white hover:text-fifth-gold">
                      portfolio
                    </p>
                  </a> */}
                {/* <a href="index.html#team">
                    <p className="uppercase font-medium transition-all ease-in-out duration-300 text-white hover:text-fifth-gold">
                      the team
                    </p>
                  </a> */}
                {/* <a href="index.html#contact">
                    <p className="uppercase font-medium transition-all ease-in-out duration-300 text-white hover:text-fifth-gold">
                      contact
                    </p>
                  </a> */}
              </div>
            </nav>

            <div className="block md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
