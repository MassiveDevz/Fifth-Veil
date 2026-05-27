import Image from "next/image";

export default function Header() {
  return (
    <header className="max-w-[2000px] mx-auto pt-4 px-4 pb-24">
      <div className="w-full">
        <div className="flex flex-col h-full justify-between">
          <div className="flex justify-between items-center">
            <div className="self-baseline">
              <a href="index.html">
                <Image className="w-60  h-auto" src="/logo-white.png" width={1000} height={1000} alt="Fifth Veil Logo" />;
              </a>
            </div>

            {/* <!-- Desktop Nav --> */}
            <nav className="hidden md:block text-end text-white">
              <div>
                <a href="index.html">
                  <p className="uppercase font-semibold transition-all ease-in-out duration-300 hover:text-theme-green">Home</p>
                </a>
                <a href="index.html#about">
                  <p className="uppercase font-semibold transition-all ease-in-out duration-300 hover:text-theme-green">About</p>
                </a>
                <a href="index.html#services">
                  <p className="uppercase font-semibold transition-all ease-in-out duration-300 hover:text-theme-green">services</p>
                </a>
                <a href="index.html#portfolio">
                  <p className="uppercase font-semibold transition-all ease-in-out duration-300 hover:text-theme-green">portfolio</p>
                </a>
                <a href="index.html#team">
                  <p className="uppercase font-semibold transition-all ease-in-out duration-300 hover:text-theme-green">the team</p>
                </a>
                <a href="index.html#contact">
                  <p className="uppercase font-semibold transition-all ease-in-out duration-300 hover:text-theme-green">contact</p>
                </a>
              </div>
            </nav>

            {/* <!-- Mobile Nav --> */}
            <nav className="relative z-30 md:hidden">
              {/* <!-- Dropdown Menu --> */}
              <div
                id="mobileMenu"
                className="fixed left-0 -top-[200%] w-full h-full bg-white overflow-hidden opacity-100 z-20 transition-all duration-700 ease-linear"
              >
                <ul className="w-full h-full pt-10 flex flex-col items-center justify-evenly transition-all ease-in-out duration-300">
                  {/* <!-- Navigation Links --> */}
                  <div className="flex flex-col justify-center items-start w-full text-3xl px-2">
                    <a href="index.html" className="transition-all duration-300 hover:text-theme-green text-3xl font-medium">
                      Home
                    </a>
                    <a href="index.html#about" className="transition-all duration-300 hover:text-theme-green text-3xl font-medium">
                      About
                    </a>
                    <a href="index.html#services" className="transition-all duration-300 hover:text-theme-green text-3xl font-medium">
                      Services
                    </a>
                    <a href="index.html#portfolio" className="transition-all duration-300 hover:text-theme-green text-3xl font-medium">
                      Portfolio
                    </a>
                    <a href="index.html#team" className="transition-all duration-300 hover:text-theme-green text-3xl font-medium">
                      The Team
                    </a>
                    <a href="index.html#contact" className="transition-all duration-300 hover:text-theme-green text-3xl font-medium">
                      Contact
                    </a>
                  </div>

                  {/* <!-- Social Links --> */}
                  <div className="w-full flex justify-around items-center text-xl">
                    <a href="https://www.instagram.com/" target="_blank" className="text-base font-semibold hover:text-theme-green">
                      / IG
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" className="text-base font-semibold hover:text-theme-green">
                      / FB
                    </a>
                    <a href="https://x.com/" target="_blank" className="text-base font-semibold hover:text-theme-green">
                      / X
                    </a>
                    <a href="https://www.tiktok.com/" target="_blank" className="text-base font-semibold hover:text-theme-green">
                      / TT
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" className="text-base font-semibold hover:text-theme-green">
                      / YT
                    </a>
                  </div>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
