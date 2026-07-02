"use client";

import { useMemo, useCallback, useRef, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Hero from "./Hero";
import ThreeCards from "./ThreeCards";
import StateDropdown from "./StateDropdown";
import CityList from "./CityList";
import { STATE_DATA } from "../data/stateData";

export default function DirectoryClient({ stateSlug }) {
  const router = useRouter();
  const STATE_SUFFIX = "-swinger-clubs";
  const cityListRef = useRef(null);

  const cities = useMemo(() => (stateSlug ? (STATE_DATA[stateSlug] ?? []) : []), [stateSlug]);

  useLayoutEffect(() => {
    if (!stateSlug || !cityListRef.current) return;

    const { top } = cityListRef.current.getBoundingClientRect();
    // City list top is on screen — stay anchored at the dropdown while results expand below
    if (top >= 0) return;

    cityListRef.current.scrollIntoView({ behavior: "instant", block: "start" });
  }, [stateSlug]);

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

      <section id="venues" className="py-16 bg-fifth-black lg:py-32">
        <StateDropdown value={stateSlug} onChange={handleStateChange} />

        <div ref={cityListRef} className="mt-4 scroll-mt-8">
          <CityList cities={cities} stateSlug={stateSlug} />
        </div>
      </section>
    </div>
  );
}
