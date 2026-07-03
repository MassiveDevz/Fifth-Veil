"use client";

import Image from "next/image";
import Link from "next/link";
import { STATE_LABELS } from "../data/stateData";

export default function CityList({ cities, stateSlug }) {
  if (!cities?.length) {
    return <p className="text-gray-500 font-body text-center">Select a state above to see experiences.</p>;
  }

  const getSocialLabel = (platform) => {
    if (!platform) return "";
    const normalized = String(platform).toLowerCase();
    if (normalized === "x/twitter" || normalized === "twitter" || normalized === "x") return "X/Twitter";
    return normalized.replace(/^\w/, (c) => c.toUpperCase());
  };

  return (
    <>
      <section className="py-12 text-white">
        <h2 className="text-fifth-gold text-center text-[clamp(24px,3vw,48px)] font-bold mb-8 uppercase tracking-wide">
          {STATE_LABELS[stateSlug] ?? stateSlug} venues
        </h2>
        <ul className="max-w-[1800px] md:space-y-8 mx-auto px-4">
          {cities.map((city) => (
            <li key={city.club_name} className="border-t-2 border-gray-100/35">
              <div>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] w-full p-4">
                  <div className="md:pr-24 max-md:mx-auto">
                    <h2 className="font-heading font-extrabold text-fifth-gold text-[clamp(20px,3vw,28px)] max-md:mb-8 ">
                      {city.club_name}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-[1.25fr_1fr] w-full gap-16">
                    <ul className="space-y-4">
                      <li className="flex justify-between">
                        <p>Website/</p>
                        {city.website_url && (
                          <a
                            href={city.website_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-right border-b border-fifth-gold hover:text-white/70 transition-all ease-in-out duration-300"
                          >
                            {city.website_url.replace("https://", "").replace("http://", "").replace("www.", "")}
                          </a>
                        )}
                        {/* <p className="text-right">{city.phone_number}</p> */}
                      </li>
                      <li className="flex justify-between">
                        <p>Phone/</p>
                        {city.phone_number && (
                          <a
                            href={`tel:${city.phone_number}`}
                            className="text-right border-b border-fifth-gold hover:text-white/70 transition-all ease-in-out duration-300"
                          >
                            {city.phone_number}
                          </a>
                        )}
                      </li>
                      <li className="flex justify-between">
                        <p>Email/</p>
                        {city.email_address && (
                          <a
                            href={`mailto:${city.email_address}`}
                            className="text-right border-b border-fifth-gold hover:text-white/70 transition-all ease-in-out duration-300"
                          >
                            {city.email_address}
                          </a>
                        )}
                      </li>
                      <li className="flex justify-between">
                        <p>Address/</p>
                        <p className="text-right max-w-96">{city.address}</p>
                      </li>
                    </ul>

                    {/* <!-- Part --> */}
                    <div className="flex flex-col justify-between space-y-8">
                      {/* <div className="min-h-[stretch] flex flex-col justify-between space-y-8"> */}
                      {city.about && <p className="text-base">{city.about}</p>}

                      <div className="mt-auto">
                        {Array.isArray(city.social_media) && city.social_media.length > 0 && (
                          <ul className="flex items-center justify-center space-x-8">
                            {city.social_media
                              .map((entry) => {
                                if (!entry || typeof entry !== "object") return null;
                                const [platform, url] = Object.entries(entry)[0] ?? [];
                                if (!platform || !url) return null;
                                return { platform, url };
                              })
                              .filter(Boolean)
                              .map(({ platform, url }) => (
                                <li key={`${city.club_name}-${platform}-${url}`}>
                                  <Link
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative pb-0.5 font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-fifth-gold after:origin-left after:scale-x-[0.1] after:transition-all after:duration-500 after:ease-out hover:opacity-[0.9] hover:after:scale-x-100"
                                  >
                                    {getSocialLabel(platform)}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Premium content. Need to build this out in json */}
                {city.premium && (
                  <div className="flex justify-between px-4 py-16">
                    <div className="self-end max-w-sm">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nisi vitae corporis natus autem iure! Incidunt
                        voluptate autem eius dolorum.
                      </p>
                    </div>

                    <img
                      className="w-5/12 h-auto"
                      src="https://cdn.nba.com/teams/uploads/sites/1610612753/2025/09/visit-orlando_fan-experience.jpeg"
                      alt=""
                    />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
