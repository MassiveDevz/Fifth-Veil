import Image from "next/image";
import heroImage from "@/app/assets/images/hero-pic.png";

export default function Hero() {
  return (
    <section className="w-full px-1 pb-20 pt-4 bg-fifth-black max-w-[2000px] mx-auto">
      <div className="flex flex-wrap">
        <div className="md:w-6/12 px-1 lg:px-3">
          <div className="left-side flex flex-col items-[unset] justify-between h-full">
            <div className="flex justify-between items-center w-full">
              <div className="self-baseline">
                <a href="#">
                  <Image className="w-60  h-auto" src="/logo-white.png" width={1000} height={1000} alt="Fifth Veil Logo" />
                </a>
              </div>

              {/* <!-- Desktop Nav --> */}
              <nav className="hidden md:block text-end">
                <div>
                  <a href="index.html">
                    <p className="uppercase font-medium transition-all ease-in-out duration-300 text-white hover:text-fifth-gold">Home</p>
                  </a>
                  <a href="index.html#about">
                    <p className="uppercase font-medium transition-all ease-in-out duration-300 text-white hover:text-fifth-gold">About</p>
                  </a>
                  <a href="index.html#services">
                    <p className="uppercase font-medium transition-all ease-in-out duration-300 text-white hover:text-fifth-gold">
                      services
                    </p>
                  </a>
                  <a href="index.html#portfolio">
                    <p className="uppercase font-medium transition-all ease-in-out duration-300 text-white hover:text-fifth-gold">
                      portfolio
                    </p>
                  </a>
                  <a href="index.html#team">
                    <p className="uppercase font-medium transition-all ease-in-out duration-300 text-white hover:text-fifth-gold">
                      the team
                    </p>
                  </a>
                  <a href="index.html#contact">
                    <p className="uppercase font-medium transition-all ease-in-out duration-300 text-white hover:text-fifth-gold">
                      contact
                    </p>
                  </a>
                </div>
              </nav>
            </div>

            <div className="text-center py-20 space-y-4 lg:flex lg:justify-between lg:items-start lg:gap-x-8 lg:text-start lg:py-0">
              <div>
                <h1 className="text-xl text-white max-w-3xl tracking-wide font-light">
                  Explore exclusive swinger clubs, private lifestyle venues, and upscale adult events across the United States. Fifth Veil
                  connects couples with verified nightlife and trusted lifestyle destinations.
                </h1>

                <div className="mt-8">
                  <p className="text-sm text-center text-fifth-gold italic">The deeper you go, the less you return.</p>
                </div>
              </div>

              {/* <div>
                <p className="text-xs text-fifth-gold italic">The deeper you go, the less you return.</p>
              </div> */}
            </div>

            <div className="flex">
              <figure className="md:w-3/5 w-8/12">
                <video autoPlay muted loop playsInline className="w-full">
                  <source src="https://www.pexels.com/download/video/14423724/" type="video/mp4" />
                  {/* <source src="https://www.pexels.com/download/video/18089934/" type="video/mp4" /> */}
                  {/* <source src="https://www.pexels.com/download/video/14555206/" type="video/mp4" /> */}
                  {/* <source src="https://www.pexels.com/download/video/3363552/" type="video/mp4" /> */}
                  {/* <source src="https://www.pexels.com/download/video/19862408/" type="video/mp4" /> */}
                  {/* <source src="https://www.pexels.com/download/video/3603859/" type="video/mp4" /> */}
                  {/* <source src="https://www.pexels.com/download/video/14987955/" type="video/mp4" /> */}
                  {/* <source src="https://www.pexels.com/download/video/5645653/" type="video/mp4" /> */}
                  {/* <source src="https://www.pexels.com/download/video/14556518/" type="video/mp4" /> */}
                  {/* <source src="https://www.pexels.com/download/video/9076116/" type="video/mp4" /> */}
                  {/* <source src="https://www.pexels.com/download/video/9076120/" type="video/mp4" /> */}
                  {/* <source src="https://www.pexels.com/download/video/9076354/" type="video/mp4" /> */}
                </video>
              </figure>

              <span className="w-fit flex flex-col justify-center items-end self-end ml-auto space-y-2">
                <p className="text-white text-right font-medium text-base max-w-[240px] leading-tight">
                  Explore lifestyle clubs and private experiences near you.
                </p>
                <a
                  className="relative pb-0.5 font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-fifth-gold after:origin-left after:scale-x-[0.075] after:transition-all after:duration-500 after:ease-out hover:opacity-[0.9] hover:after:scale-x-100 text-white"
                  href="/#city-list"
                >
                  Uncover the Veil
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex w-6/12 items-center justify-end max-h-[95vh] px-1 lg:px-3">
          <Image className="w-full h-full object-cover" src={heroImage} width={1200} height={1200} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
}
