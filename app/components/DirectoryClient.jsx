"use client";

import { useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import Hero from "./Hero";
import ThreeCards from "./ThreeCards";
import StateDropdown from "./StateDropdown";
import CityList from "./CityList";
import { STATE_DATA } from "../data/stateData";

export default function DirectoryClient({ stateSlug }) {
  const router = useRouter();
  const STATE_SUFFIX = "-swinger-clubs";

  const cities = useMemo(() => (stateSlug ? (STATE_DATA[stateSlug] ?? []) : []), [stateSlug]);

  const handleStateChange = useCallback(
    (next) => {
      if (next) router.push(`/${next}${STATE_SUFFIX}`, { scroll: false });
      else router.push("/", { scroll: false });
    },
    [router],
  );

  return (
    <div className="bg-fifth-black">
      <Hero />

      <ThreeCards />

      <section id="city-list" className="py-16 bg-fifth-black lg:py-32">
        <StateDropdown value={stateSlug} onChange={handleStateChange} />

        <div className="mt-4">
          <CityList cities={cities} />
        </div>
      </section>
    </div>
  );
}
