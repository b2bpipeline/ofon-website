<template>
    <main>
        <section class="section fixed z-50 bg-[#F6F7F8] py-[8px] shadow-xl">
            <div class="div flex-row items-center justify-between">
                <div class="flex gap-[16px]">
                    <p class="font-14 font-semibold text-c-orange">{{ $t('c_navbar_1') }}</p>
                    <p class="font-14 font-semibold text-c-orange">{{ $t('c_navbar_2') }}</p>
                </div>
                <div class="flex gap-[16px]">
                    <div class="flex items-center gap-[10px]">
                        <img class="rounded-full" src="/img/en.webp" alt="Image" />
                        <NuxtLink :to="switchLocalePath('en')" class="font-14 font-semibold text-c-orange">EN</NuxtLink>
                    </div>
                    <div class="flex items-center gap-[10px]">
                        <img class="rounded-full" src="/img/id.webp" alt="Image" />
                        <NuxtLink :to="switchLocalePath('id')" class="font-14 font-semibold text-c-orange">ID</NuxtLink>
                    </div>
                </div>
            </div>
        </section>
        <section
            class="section fixed top-[36px] z-50 flex w-full flex-wrap border-b-2 border-[#eee] bg-white py-1 text-sm sm:flex-nowrap sm:justify-start sm:py-1"
        >
            <div class="mx-auto w-full px-[16px] py-[8px] sm:max-xl:max-w-[640px] xl:max-w-[1440px] xl:px-[120px] xl:py-[16px]">
                <div class="relative xl:flex xl:items-center">
                    <!-- 1 -->
                    <div class="flex items-center justify-between">
                        <!-- LOGO -->
                        <NuxtLink :to="localePath('/')"><img src="/img/ofon.webp" alt="Image" /></NuxtLink>
                        <div class="xl:hidden">
                            <button
                                type="button"
                                class="hs-collapse-toggle inline-flex items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white p-2 text-gray-800 shadow-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                                id="hs-navbar-basic-usage-collapse"
                                aria-expanded="false"
                                aria-controls="hs-navbar-basic-usage"
                                aria-label="Toggle navigation"
                                data-hs-collapse="#hs-navbar-basic-usage"
                            >
                                <svg
                                    class="size-4 shrink-0 hs-collapse-open:hidden"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <line x1="3" x2="21" y1="6" y2="6" />
                                    <line x1="3" x2="21" y1="12" y2="12" />
                                    <line x1="3" x2="21" y1="18" y2="18" />
                                </svg>
                                <svg
                                    class="hidden size-4 shrink-0 hs-collapse-open:block"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <!-- 2 -->
                    <div
                        id="hs-navbar-basic-usage"
                        class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 xl:block"
                        aria-labelledby="hs-navbar-basic-usage-collapse"
                    >
                        <div
                            class="mt-5 flex flex-col gap-y-3 xl:mt-0 xl:flex-row xl:items-center xl:justify-end xl:gap-[10px] xl:gap-y-0 xl:ps-5"
                        >
                            <!-- MEGA MENU: SOLUTION -->
                            <div
                                class="hs-dropdown [--adaptive:none] [--is-collapse:true] [--strategy:static] sm:[--is-collapse:false] sm:[--strategy:absolute] sm:[--trigger:hover]"
                            >
                                <button
                                    id="hs-mega-menu"
                                    type="button"
                                    class="hs-dropdown-toggle font-12 flex w-full items-center font-semibold hover:text-c-orange sm:p-2"
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                    aria-label="Mega Menu"
                                >
                                    Solutions
                                    <svg
                                        class="ml-1 size-4 shrink-0 duration-300 hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:rotate-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </button>

                                <div
                                    class="hs-dropdown-menu sm: start-0 top-full z-10 hidden w-full min-w-60 rounded-lg border-[#eee] bg-white py-2 opacity-0 transition-[height] duration-300 ease-in-out before:absolute hs-dropdown-open:opacity-100 sm:px-2 sm:shadow-md sm:transition-[opacity,margin] sm:duration-[150ms] xl:border xl:p-[16px]"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="hs-mega-menu"
                                >
                                    <div class="grid gap-[8px] sm:grid sm:grid-cols-3">
                                        <div class="flex flex-col">
                                            <p class="font-12 p-[4px] font-bold xl:p-[8px]">Services</p>
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('/service/pbx-maintenance-service-support')"
                                                >Phone System Maintenance & Support
                                            </NuxtLink>
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('/service/cloud-pbx-installation')"
                                                >Cloud PBX Migration</NuxtLink
                                            >
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('/service/phone-system-integration')"
                                                >Phone System Integration</NuxtLink
                                            >
                                        </div>
                                        <div class="flex flex-col">
                                            <p class="font-12 p-[4px] font-bold xl:p-[8px]">Product</p>
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('/product/telephone')"
                                                >Telephone
                                            </NuxtLink>
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('/product/internet')"
                                                >Internet</NuxtLink
                                            >
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('/product/sip-trunk')"
                                                >SIP Trunk</NuxtLink
                                            >
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('/product/meeting-setup')"
                                                >Meeting Setup</NuxtLink
                                            >
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('/product/cloud-pbx')"
                                                >Cloud PBX</NuxtLink
                                            >
                                        </div>
                                        <div class="flex flex-col">
                                            <p class="font-12 p-[4px] font-bold xl:p-[8px]">Use Cases</p>
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('/use-case/maintain-legacy-phone-system')"
                                                >Maintain Legacy Phone System
                                            </NuxtLink>
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('/use-case/migrate-on-premise')"
                                                >Migrate On-premise to Cloud PBX</NuxtLink
                                            >
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('/use-case/integrate-all-communication')"
                                                >Integrate All Communication Platforms</NuxtLink
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- MEGA MENU: INDUSTRIES -->
                            <div
                                class="hs-dropdown [--adaptive:none] [--is-collapse:true] [--strategy:static] sm:[--is-collapse:false] sm:[--strategy:absolute] sm:[--trigger:hover]"
                            >
                                <button
                                    id="hs-mega-menu"
                                    type="button"
                                    class="hs-dropdown-toggle font-12 flex w-full items-center font-semibold hover:text-c-orange sm:p-2"
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                    aria-label="Mega Menu"
                                >
                                    Industries
                                    <svg
                                        class="ml-1 size-4 shrink-0 duration-300 hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:rotate-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </button>

                                <div
                                    class="hs-dropdown-menu sm: start-0 top-full z-10 hidden w-full min-w-60 rounded-lg border-[#eee] bg-white py-2 opacity-0 transition-[height] duration-300 ease-in-out before:absolute hs-dropdown-open:opacity-100 sm:px-2 sm:shadow-md sm:transition-[opacity,margin] sm:duration-[150ms] xl:border xl:p-[16px]"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="hs-mega-menu"
                                >
                                    <div class="grid gap-[8px] sm:grid sm:grid-cols-1">
                                        <div class="flex flex-col">
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('/industry/finance')"
                                                >Finance & Banking
                                            </NuxtLink>
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('/industry/manufacturing')"
                                                >Manufacturing
                                            </NuxtLink>
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('/industry/oil-and-gas')"
                                                >Oil & Gas
                                            </NuxtLink>
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('/industry/hospitality')"
                                                >Hospitality</NuxtLink
                                            >
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('/industry/healthcare')"
                                                >Healthcare</NuxtLink
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- MEGA MENU: SUCCESS STORIES -->
                            <div
                                class="hs-dropdown [--adaptive:none] [--is-collapse:true] [--strategy:static] sm:[--is-collapse:false] sm:[--strategy:absolute] sm:[--trigger:hover]"
                            >
                                <button
                                    id="hs-mega-menu"
                                    type="button"
                                    class="hs-dropdown-toggle font-12 flex w-full items-center font-semibold hover:text-c-orange sm:p-2"
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                    aria-label="Mega Menu"
                                >
                                    Success Stories
                                    <svg
                                        class="ml-1 size-4 shrink-0 duration-300 hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:rotate-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </button>

                                <div
                                    class="hs-dropdown-menu sm: start-0 top-full z-10 hidden w-full min-w-60 rounded-lg border-[#eee] bg-white py-2 opacity-0 transition-[height] duration-300 ease-in-out before:absolute hs-dropdown-open:opacity-100 sm:px-2 sm:shadow-md sm:transition-[opacity,margin] sm:duration-[150ms] xl:border xl:p-[16px]"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="hs-mega-menu"
                                >
                                    <div class="grid gap-[8px] sm:grid sm:grid-cols-1">
                                        <div class="flex flex-col">
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('case-study')"
                                                >Case Studies
                                            </NuxtLink>
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('testimonial')"
                                                >Testimonials
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- MEGA MENU: RESOURCES -->
                            <div
                                class="hs-dropdown [--adaptive:none] [--is-collapse:true] [--strategy:static] sm:[--is-collapse:false] sm:[--strategy:absolute] sm:[--trigger:hover]"
                            >
                                <button
                                    id="hs-mega-menu"
                                    type="button"
                                    class="hs-dropdown-toggle font-12 flex w-full items-center font-semibold hover:text-c-orange sm:p-2"
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                    aria-label="Mega Menu"
                                >
                                    Resources
                                    <svg
                                        class="ml-1 size-4 shrink-0 duration-300 hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:rotate-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </button>

                                <div
                                    class="hs-dropdown-menu sm: start-0 top-full z-10 hidden w-full min-w-60 rounded-lg border-[#eee] bg-white py-2 opacity-0 transition-[height] duration-300 ease-in-out before:absolute hs-dropdown-open:opacity-100 sm:px-2 sm:shadow-md sm:transition-[opacity,margin] sm:duration-[150ms] xl:border xl:p-[16px]"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="hs-mega-menu"
                                >
                                    <div class="grid gap-[8px] sm:grid sm:grid-cols-1">
                                        <div class="flex flex-col">
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                to="/blog"
                                                >Blog
                                            </NuxtLink>
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('calculators')"
                                                >Calculators
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- MEGA MENU: ABOUT US -->
                            <div
                                class="hs-dropdown [--adaptive:none] [--is-collapse:true] [--strategy:static] sm:[--is-collapse:false] sm:[--strategy:absolute] sm:[--trigger:hover]"
                            >
                                <button
                                    id="hs-mega-menu"
                                    type="button"
                                    class="hs-dropdown-toggle font-12 flex w-full items-center font-semibold hover:text-c-orange sm:p-2"
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                    aria-label="Mega Menu"
                                >
                                    About Us
                                    <svg
                                        class="ml-1 size-4 shrink-0 duration-300 hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:rotate-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </button>

                                <div
                                    class="hs-dropdown-menu sm: start-0 top-full z-10 hidden w-full min-w-60 rounded-lg border-[#eee] bg-white py-2 opacity-0 transition-[height] duration-300 ease-in-out before:absolute hs-dropdown-open:opacity-100 sm:px-2 sm:shadow-md sm:transition-[opacity,margin] sm:duration-[150ms] xl:border xl:p-[16px]"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="hs-mega-menu"
                                >
                                    <div class="grid gap-[8px] sm:grid sm:grid-cols-1">
                                        <div class="flex flex-col">
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('about-us')"
                                                >Our Story
                                            </NuxtLink>
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('gallery')"
                                                >Gallery
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- CONTACT US -->
                            <NuxtLink id="contact-us" :to="localePath('contact-us')" class="btn font-12 text-white">{{
                                $t('c_navbar_3')
                            }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="h-[102px] xl:h-[119px]"></div>

        <!-- <div class="font-12 fixed flex flex-col bg-c-white opacity-80">
            <NuxtLink class="font-14 font-semibold" :to="localePath('/')">Home</NuxtLink>
            <NuxtLink class="font-14 font-semibold" :to="localePath('about-us')">About Us</NuxtLink>
            <NuxtLink class="font-14 font-semibold" :to="localePath('contact-us')">Contact Us</NuxtLink>
            <NuxtLink class="font-14 font-semibold" :to="localePath('thank-you')">Thank You</NuxtLink>
            <NuxtLink class="font-14 font-semibold" :to="localePath('solutions')">Solutions</NuxtLink>
            <NuxtLink class="font-14 font-semibold" :to="localePath('/solutions/migrate-on-premise-pbx-to-cloud-pbx')"
                >Solutions / Migrate On Premise</NuxtLink
            >
            <NuxtLink class="font-14 font-semibold" :to="localePath('/solutions/integrate-all-communication-channel')"
                >Solutions / Integrate Communication Channel</NuxtLink
            >
            <NuxtLink class="font-14 font-semibold" :to="localePath('/solutions/integrate-all-communication-device')"
                >Solutions / Integrate Communication Device</NuxtLink
            >
            <NuxtLink class="font-14 font-semibold" :to="localePath('service')">Service</NuxtLink>
            <NuxtLink class="font-14 font-semibold" :to="localePath('/service/pbx-maintenance-service-support')"
                >Service / PBX Maintenance Support /
            </NuxtLink>
            <NuxtLink class="font-14 font-semibold" :to="localePath('/service/pbx-maintenance-service-support/cisco')"
                >Service / PBX Maintenance Support / Cisco</NuxtLink
            >
            <NuxtLink class="font-14 font-semibold" :to="localePath('/service/pbx-maintenance-service-support/panasonic')"
                >Service / PBX Maintenance Support / Panasonic</NuxtLink
            >
            <NuxtLink class="font-14 font-semibold" :to="localePath('/service/pbx-maintenance-service-support/nec')"
                >Service / PBX Maintenance Support / NEC</NuxtLink
            >
            <NuxtLink class="font-14 font-semibold" :to="localePath('/service/pbx-maintenance-service-support/avaya')"
                >Service / PBX Maintenance Support / Avaya</NuxtLink
            >
            <NuxtLink class="font-14 font-semibold" :to="localePath('/service/pbx-maintenance-service-support/arcatel')"
                >Service / PBX Maintenance Support / Arcatel</NuxtLink
            >
            <NuxtLink class="font-14 font-semibold" :to="localePath('/service/cloud-pbx-installation')"
                >Service / Cloud PBX Installation</NuxtLink
            >
            <NuxtLink class="font-14 font-semibold" :to="localePath('/service/phone-system-integration')"
                >Service / Phone System Integration</NuxtLink
            >
            <NuxtLink class="font-14 font-semibold" :to="localePath('/service/phone-system-integration/microsoft-teams')"
                >Service / Phone System Integration / Microsoft Teams</NuxtLink
            >
            <NuxtLink class="font-14 font-semibold" :to="localePath('/service/phone-system-integration/cisco')"
                >Service / Phone System Integration / Cisco</NuxtLink
            >
            <NuxtLink class="font-14 font-semibold" :to="localePath('/service/phone-system-integration/zoom')"
                >Service / Phone System Integration / Zoom</NuxtLink
            >
            <NuxtLink class="font-14 font-semibold" :to="localePath('industry')">Industry</NuxtLink>
            <NuxtLink class="font-14 font-semibold" :to="localePath('/industry/finance')">Industry / Finance</NuxtLink>
            <NuxtLink class="font-14 font-semibold" :to="localePath('/industry/manufacturing')"
                >Industry / Manufacturing</NuxtLink
            >
            <NuxtLink class="font-14 font-semibold" :to="localePath('/industry/hospitality')">Industry / Hospitality</NuxtLink>
            <NuxtLink class="font-14 font-semibold" :to="localePath('/industry/healthcare')">Industry / Healthcare</NuxtLink>
            <NuxtLink class="font-14 font-semibold" :to="localePath('review')">Review</NuxtLink>
            <NuxtLink class="font-14 font-semibold" :to="localePath('testimonial')">Testimonial</NuxtLink>
            <NuxtLink class="font-14 font-semibold" :to="localePath('case-study')">Case Study</NuxtLink>
            <NuxtLink class="font-14 font-semibold" :to="localePath('/case-study/hospital')">Case Study / Hospital</NuxtLink>
            <NuxtLink class="font-14 font-semibold" :to="localePath('/case-study/oil-and-gas')"
                >Case Study / Oil And Gas</NuxtLink
            >
            <NuxtLink class="font-14 font-semibold" :to="localePath('/case-study/finance')">Case Study / Finance</NuxtLink>
            <NuxtLink class="font-14 font-semibold" :to="localePath('/case-study/banking')">Case Study / Banking</NuxtLink>
            <NuxtLink class="font-14 font-semibold" :to="localePath('/case-study/hospitality')"
                >Case Study / Hospitality</NuxtLink
            >
        </div> -->
    </main>
</template>

<script setup>
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
</script>

<style scoped>
#contact-us {
    color: white;
    text-decoration: none;
}

.router-link-exact-active {
    color: #f25921;
    text-decoration: underline;
    font-weight: 600;
}
</style>
