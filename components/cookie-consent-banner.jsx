"use client";

import { useCallback, useState, useSyncExternalStore } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { cn } from "@/lib/utils";

const COOKIE_NAME = "cookie_consent";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

function getConsentCookie() {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function setConsentCookie(value) {
  document.cookie = `${COOKIE_NAME}=${value}; max-age=31536000; path=/; sameSite=lax`;
}

export default function CookieConsentBanner() {
  const [localConsent, setLocalConsent] = useState(null);
  const storedConsent = useSyncExternalStore(
    () => () => {},
    getConsentCookie,
    () => null,
  );
  const consent = localConsent ?? storedConsent;

  const handleAccept = useCallback(() => {
    setConsentCookie("accepted");
    setLocalConsent("accepted");
  }, []);

  const handleDecline = useCallback(() => {
    setConsentCookie("declined");
    setLocalConsent("declined");
  }, []);

  return (
    <>
      {consent === "accepted" && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}

      {!consent && (
        <div
          className={cn(
            "**:data-[slot=card]:bg-fifth-black **:data-[slot=card]:border **:data-[slot=card]:border-fifth-gold/40 **:data-[slot=card]:text-white",
            "**:data-[slot=card-title]:text-white **:data-[slot=card-description]:text-white/70",
            "**:data-[variant=default]:bg-fifth-gold **:data-[variant=default]:text-black **:data-[variant=default]:hover:bg-fifth-gold/90",
            "**:data-[variant=secondary]:border-transparent **:data-[variant=secondary]:bg-transparent **:data-[variant=secondary]:text-white/70 **:data-[variant=secondary]:hover:bg-white/10",
          )}
        >
          <CookieConsent
            variant="default"
            learnMoreHref="/legal/cookie-policy"
            description="We use cookies to ensure you get the best experience on our website. For more information on how we use cookies, please see our cookie policy."
            onAcceptCallback={handleAccept}
            onDeclineCallback={handleDecline}
            className="bottom-4 right-4 left-auto m-4 sm:left-auto sm:right-4 sm:bottom-4 w-full sm:max-w-md"
          />
        </div>
      )}
    </>
  );
}
