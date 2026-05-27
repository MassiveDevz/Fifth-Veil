export default function SearchWrapper() {
  return (
    <section class="py-16 bg-black lg:py-32">
      <div class="bg-black ">
        <div class="px-6 mx-auto lg:px-8 max-w-[2000px]">
          <div class="gap-16 mx-auto">
            <div class="grid lg:grid-cols-[35%_65%]">
              <div class="relative order-2 lg:order-[unset] mt-8 lg:mt-0">
                <div class="space-y-4 lg:sticky top-8">
                  <img
                    class="w-full h-auto rounded-md lg:w-8/12"
                    src="https://magicweb.blob.core.windows.net/resources/web/pages/groups/website/group-outings-faq-pic.jpeg"
                    alt="Group Outings Frequently Asked Questions"
                  />
                  <p class="text-white text-[clamp(16px,3vw,20px)] font-body max-w-sm">
                    Still have questions? Discover if an Orlando Magic group experience is the perfect choice for you!
                  </p>
                  <a
                    class="magic-btn-blue hover:bg-white hover:text-black"
                    href="https://omagic.az1.qualtrics.com/jfe/form/SV_cI9mgNzNYRro3HL?source=group&amp;Q_JFE=qdg"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
              <div class="lg:px-8">
                <h2 class="text-[clamp(44px,8vw,88px)] text-white/95 font-heading font-extrabold uppercase leading-none">
                  Frequently <br /> Asked <span class="italic text-magic-silver">Questions</span>
                </h2>
                <div id="accordionFlushExample" class="mt-8 space-y-2" data-twe-collapse-init="true">
                  <div class="bg-black">
                    <h2 class="mb-0" id="flush-heading1">
                      <button
                        class="group relative flex w-full items-center rounded-none border-0 bg-black py-4 font-body text-left text-[clamp(16px,3vw,18px)] text-gray-200 transition  focus:outline-none [overflow-anchor:none]  [&amp;:not([data-twe-collapse-collapsed])]:bg-black [&amp;:not([data-twe-collapse-collapsed])]:border-b font-semibold hover:text-magic-blue border-b border-gray-700/70"
                        type="button"
                        data-twe-collapse-init="true"
                        data-twe-target="#flush-collapse1"
                        aria-expanded="false"
                        aria-controls="flush-collapse1"
                      >
                        <p class="transition duration-200 ease-in-out translate-x-0 group-hover:translate-x-1">Where can I park?</p>
                        <span class="w-5 h-5 transition-transform duration-200 ease-in-out ms-auto shrink-0 group-aria-expanded:rotate-180">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                          </svg>
                        </span>
                      </button>
                    </h2>
                    <div
                      id="flush-collapse1"
                      class="hidden transition-all duration-300 ease-in-out border-0"
                      data-twe-collapse-item="true"
                      aria-labelledby="flush-heading1"
                      data-twe-parent="#accordionFlushExample"
                    >
                      <div class="px-5 py-4 text-base text-gray-200 font-body">
                        The Kia Center is pleased to offer our guests reserved/pre-paid parking in the ThreatLocker Garage (400 West South
                        St.). Reserved/pre-paid parking can be purchased through ticketmaster.com, Ticketmaster charge-by-phone 800-745-3000
                        and/or the Kia Center Box Office by Ticketmaster during regular box office hours. Purchases must be made by 5:00 pm,
                        the day prior to the event.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
