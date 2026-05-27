import { notFound, redirect } from "next/navigation";
import DirectoryClient from "../components/DirectoryClient";
import { STATE_DATA } from "../data/stateData";

export default async function StatePage({ params }) {
  const { state: rawState } = await params;
  const STATE_SUFFIX = "-swinger-clubs";

  if (typeof rawState !== "string" || !rawState) notFound();

  // Legacy URLs: `/<state>` -> redirect to canonical SEO URL.
  if (Object.hasOwn(STATE_DATA, rawState)) {
    redirect(`/${rawState}${STATE_SUFFIX}`);
  }

  // Flexible URLs: `/<state>-swinger-clubs...` should resolve to `<state>`.
  const resolvedStateSlug =
    Object.keys(STATE_DATA)
      .sort((a, b) => b.length - a.length)
      .find((slug) => rawState.startsWith(`${slug}${STATE_SUFFIX}`)) ?? null;

  if (!resolvedStateSlug) notFound();
  return <DirectoryClient stateSlug={resolvedStateSlug} />;
}
