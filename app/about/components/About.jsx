export default function About() {
  return (
    <>
      <section className="text-white">
        <div className="max-w-[2000px] mx-auto px-4">
          {/* <!-- Heading --> */}
          <div className="mb-12">
            <div className="md:flex justify-evenly flex-wrap gap-4 mb-4 text-center space-y-2 md:space-y-0 text-sm font-light italic tracking-wider text-fifth-gold">
              <p>Swingers</p>
              <p>ENM</p>
              <p>Lifestyle</p>
            </div>
            <h2 className="text-center pb-12 border-b-2 border-fifth-gold font-light uppercase text-[clamp(64px,calc(90vw/6),300px)] leading-[0.9] mx-auto">
              About <br /> Fifth Veil
            </h2>
          </div>

          {/* <!-- About Copy --> */}
          <div>
            <div className="flex flex-wrap -mx-4 w-full justify-between">
              <div className="px-4 font-bold text-lg">About Us</div>
              {/* <div className="w-full md:w-1/2 px-4 font-bold text-lg">About Us</div> */}
              <div className="w-full md:w-3/4 px-4">
                {/* <div className="w-full md:w-1/2 px-4"> */}
                <p className="font-medium">
                  Fifth Veil is a curated swinger club and lifestyle venue directory for couples and open-minded adults seeking verified
                  nightlife experiences across the United States. Explore exclusive swinger clubs, private lifestyle lounges, upscale adult
                  resorts, and trusted lifestyle destinations in top cities nationwide.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-fifth-black text-white">
            <div className="max-w-[2000px] mx-auto px-4">
              {/* <!-- Heading --> */}
              {/* <div className="lg:w-1/2 mx-auto mb-10">
            <h3 className="text-3xl font-semibold mb-6">Introducing the New Bison Studio Website</h3>
            <div className="flex space-x-6">
              <p className="text-xs">05.01.2025</p>
            </div>
          </div> */}

              {/* <!-- Main Image --> */}
              <div className="md:max-h-[70vh] overflow-hidden my-10 object-cover">
                <img
                  src="https://vi-six.vercel.app/assets/images/portfolio-project-image1.jpeg"
                  alt=""
                  className="object-cover h-full max-h-[inherit] w-full"
                />
              </div>

              {/* <!-- Details --> */}
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-end -mx-4">
                  <div className="w-full md:w-3/4">
                    <div className="mb-12 space-y-4">
                      <p>
                        Welcome to Fifth Veil — a curated destination for discovering verified swinger clubs, private lifestyle venues,
                        upscale adult resorts, and exclusive nightlife experiences across the United States.
                      </p>

                      <p>
                        Built for couples and open-minded adults, Fifth Veil was created to make exploring the lifestyle easier, safer, and
                        more refined. Our goal is to connect users with trusted venues, private events, and curated experiences in major
                        cities and popular nightlife destinations nationwide.
                      </p>

                      <p>
                        Whether you’re searching for upscale swinger clubs in Miami, private lifestyle lounges in Orlando, exclusive couples
                        events in Las Vegas, or trusted adult nightlife experiences near you, Fifth Veil helps simplify discovery through
                        organized, location-based listings and curated recommendations.
                      </p>

                      <p>
                        We believe the lifestyle should feel welcoming, discreet, and elevated — not overwhelming or difficult to navigate.
                        That’s why we focus on quality venues, clear information, and a modern discovery experience designed around privacy,
                        trust, and exploration.
                      </p>

                      <div>
                        <h4 className="mb-4">Our Directory Includes:</h4>
                        <ul className="list-disc pl-6 pb-8 marker:text-fifth-gold space-y-2">
                          <li>Verified swinger clubs and lifestyle venues</li>
                          <li>Private adult events and themed parties</li>
                          <li>Couples-friendly nightlife experiences</li>
                          <li>Lifestyle resorts and travel destinations</li>
                          <li>Curated club listings across top U.S. cities</li>
                        </ul>
                      </div>

                      <p>
                        As Fifth Veil continues to grow, our mission remains the same: helping couples and lifestyle explorers discover
                        trusted experiences, exclusive venues, and unforgettable nights behind the veil.
                      </p>

                      <img src="https://vi-six.vercel.app/assets/images/portfolio-project-image2.jpeg" alt="" className="w-full h-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
