import Image from "next/image";
import pic1 from "@/app/assets/images/three-card01.png";
import pic2 from "@/app/assets/images/three-card02.png";
import pic3 from "@/app/assets/images/three-card03.png";

export default function ThreeCards() {
  return (
    <section className="pt-12 lg:pt-32">
      <div className="w-full px-4 pt-8 pb-2 mx-auto space-y-4 overflow-hidden text-white flex-column">
        <div className="max-w-[1400px] w-full mx-auto flex justify-center items-center">
          <div className="w-full h-full space-y-2">
            <div className="w-full h-px bg-linear-to-l from-fifth-gold via-fifth-black to-fifth-black"></div>
          </div>
          <p className="text-center font-body text-[clamp(16px,3vw,20px)] font-normal tracking-widest uppercase min-w-fit px-2 lg:px-4 leading-none">
            About Us
          </p>
          <div className="w-full h-full space-y-2">
            <div className="w-full h-px bg-linear-to-r from-fifth-gold via-fifth-black to-fifth-black"></div>
          </div>
        </div>

        <p className="font-body text-center text-[clamp(16px,3vw,18px)] max-w-7xl text-pretty text-white tracking-wide">
          Fifth Veil is a curated swinger club and lifestyle venue directory for couples and open-minded adults seeking verified nightlife
          experiences across the United States. Explore upscale swinger clubs, private lifestyle lounges, adult resorts, and exclusive
          events in top cities nationwide.
        </p>

        {/* <div className="inline-flex flex-col w-full max-w-2xl gap-2 md:flex-row">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center btn-blue"
            href="https://www.orlandomagicshop.com/c-11552?sortOption=NewestArrivals/&amp;_s=bm-Magic-CE-WebAd-11.11"
          >
            Shop Now
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center btn-blue"
            href="https://maps.app.goo.gl/9Sw66FQNerW8NTCVA"
          >
            Visit the Team Store
          </a>
        </div> */}

        <div className="px-4 pt-8 mx-auto">
          <div className="mx-auto -space-x-12 flex-center group max-w-fit">
            <Image
              src={pic1}
              alt="2025-26 City Edition Jerseys"
              className="inline-block -rotate-2 w-[145px] sm:w-[225px] md:w-[275px] xl:w-[380px] h-auto border-2 border-black"
            />
            {/* <img
              className="inline-block -rotate-2 w-[145px] sm:w-[225px] md:w-[275px] xl:w-[380px] h-auto border-2 border-black"
              src="https://magicweb.blob.core.windows.net/resources/web/pages/team-store/city/25-26cityedition-collection-v1.jpeg"
              alt="2025-26 City Edition Jerseys"
            /> */}
            <Image
              src={pic2}
              alt="2025-26 City Edition Jerseys"
              className="inline-block z-10 w-[160px] sm:w-[250px] md:w-[300px] xl:w-[400px] h-auto border-2 border-black"
            />
            {/* <img
              className="inline-block z-10 w-[160px] sm:w-[250px] md:w-[300px] xl:w-[400px] h-auto border-2 border-black"
              src="https://magicweb.blob.core.windows.net/resources/web/pages/team-store/city/25-26cityedition-collection-v2.jpeg"
              alt="2025-26 City Edition Jerseys"
            /> */}
            <Image
              src={pic3}
              alt="2025-26 City Edition Jerseys"
              className="inline-block rotate-2 w-[145px] sm:w-[225px] md:w-[275px] xl:w-[380px] h-auto border-2 border-black"
            />
            {/* <img
              className="inline-block rotate-2 w-[145px] sm:w-[225px] md:w-[275px] xl:w-[380px] h-auto border-2 border-black"
              src="https://magicweb.blob.core.windows.net/resources/web/pages/team-store/city/25-26cityedition-collection-v3.jpeg"
              alt="2025-26 City Edition Jerseys"
            /> */}
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-white isolate">
        {/* <div className="flow-root pb-20 lg:pb-40 bg-[url(https://magicweb.blob.core.windows.net/resources/web/pages/team-store/city/cityedition-bg.jpeg)] bg-cover bg-no-repeat bg-center">
          <div className="-mt-32 lg:-mt-56">
            <div className="px-4 mx-auto">
              <div className="mx-auto -space-x-12 flex-center group max-w-fit">
                <img
                  className="inline-block -rotate-2 w-[145px] sm:w-[225px] md:w-[275px] xl:w-[380px] h-auto border-2 border-black rounded-md smooth group-hover:xl:mx-4 group-hover:xl:rotate-0 group-hover:xl:w-[400px]"
                  src="https://magicweb.blob.core.windows.net/resources/web/pages/team-store/city/25-26cityedition-collection-v1.jpeg"
                  alt="2025-26 City Edition Jerseys"
                />
                <img
                  className="inline-block z-10 w-[160px] sm:w-[250px] md:w-[300px] xl:w-[400px] h-auto border-2 border-black rounded-md smooth group-hover:xl:mx-0"
                  src="https://magicweb.blob.core.windows.net/resources/web/pages/team-store/city/25-26cityedition-collection-v2.jpeg"
                  alt="2025-26 City Edition Jerseys"
                />
                <img
                  className="inline-block -rotate-2 w-[145px] sm:w-[225px] md:w-[275px] xl:w-[380px] h-auto border-2 border-black rounded-md smooth group-hover:xl:mx-4 group-hover:xl:rotate-0 group-hover:xl:w-[400px]"
                  src="https://magicweb.blob.core.windows.net/resources/web/pages/team-store/city/25-26cityedition-collection-v3.jpeg"
                  alt="2025-26 City Edition Jerseys"
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
