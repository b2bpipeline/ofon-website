<template>
    <main>
        <!-- Mobile -->
        <section class="mobile section fixed z-50 bg-[#F6F7F8] py-[8px] shadow-xl">
            <div class="div flex-row items-center justify-between">
                <div class="flex gap-[16px]">
                    <!-- <p class="font-14 font-semibold text-c-orange">{{ $t('c_navbar_1') }}</p>
                    <p class="font-14 font-semibold text-c-orange">{{ $t('c_navbar_2') }}</p> -->
                </div>
                <div class="flex gap-[16px]">
                    <div class="flex items-center gap-[10px]">
                        <img class="rounded-full" src="/img/en.webp" alt="Image" />
                        <a :href="switchLocalePath('en')" class="font-14 font-semibold text-c-orange">EN</a>
                    </div>
                    <div class="flex items-center gap-[10px]">
                        <img class="rounded-full" src="/img/id.webp" alt="Image" />
                        <a :href="switchLocalePath('id')" class="font-14 font-semibold text-c-orange">ID</a>
                    </div>
                </div>
            </div>
        </section>
        <section
            class="mobile section fixed top-[36px] z-50 flex w-full flex-wrap border-b-2 border-[#eee] bg-white py-1 text-sm sm:flex-nowrap sm:justify-start sm:py-1"
        >
            <div class="mx-auto w-full px-[16px] py-[8px] sm:max-xl:max-w-[640px] xl:max-w-[1440px] xl:px-[120px] xl:py-[16px]">
                <div class="relative xl:flex xl:items-center">
                    <!-- 1 -->
                    <div class="flex items-center justify-between">
                        <!-- LOGO -->
                        <a :href="localePath('/')"><img src="/img/ofon.webp" alt="Image" /></a>
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
                                    {{ $t('c_nav_1') }}
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
                                    class="hs-dropdown-menu sm: start-0 z-10 hidden w-fit min-w-60 rounded-lg border-[#eee] bg-white py-2 opacity-0 transition-[height] duration-300 ease-in-out before:absolute hs-dropdown-open:opacity-100 sm:px-2 sm:shadow-md sm:transition-[opacity,margin] sm:duration-[150ms] xl:left-[45%] xl:top-[36px] xl:border xl:p-[16px]"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="hs-mega-menu"
                                >
                                    <div class="grid gap-[8px] sm:grid sm:grid-cols-2">
                                        <div class="flex flex-col">
                                            <p class="font-12 p-[4px] font-bold xl:p-[8px]">{{ $t('c_nav_2') }}</p>
                                            <a
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :href="localePath('/service/pbx-maintenance-service-support')"
                                                >{{ $t('c_nav_3') }}
                                            </a>
                                            <a
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :href="localePath('/service/cloud-pbx-installation')"
                                                >{{ $t('c_nav_4') }}</a
                                            >
                                            <a
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :href="localePath('/service/phone-system-integration')"
                                                >{{ $t('c_nav_5') }}</a
                                            >
                                        </div>
                                        <div class="flex flex-col">
                                            <p class="font-12 p-[4px] font-bold xl:p-[8px]">{{ $t('c_nav_6') }}</p>
                                            <a
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :href="localePath('/product/telephone')"
                                                >{{ $t('c_nav_7') }}
                                            </a>
                                            <a
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :href="localePath('/product/internet')"
                                                >{{ $t('c_nav_8') }}</a
                                            >
                                            <a
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :href="localePath('/product/sip-trunk')"
                                                >{{ $t('c_nav_9') }}</a
                                            >
                                            <a
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :href="localePath('/product/meeting-setup')"
                                                >{{ $t('c_nav_10') }}</a
                                            >
                                            <a
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :href="localePath('/product/cloud-pbx')"
                                                >{{ $t('c_nav_11') }}</a
                                            >
                                            <a
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :href="localePath('/product/webcall')"
                                                >Webcall</a
                                            >
                                            <a
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :href="localePath('/product/voice-api')"
                                                >Voice API</a
                                            >
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
                                    {{ $t('c_nav_25') }}
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
                                    class="hs-dropdown-menu sm: start-0 z-10 hidden w-fit min-w-60 rounded-lg border-[#eee] bg-white py-2 opacity-0 transition-[height] duration-300 ease-in-out before:absolute hs-dropdown-open:opacity-100 sm:px-2 sm:shadow-md sm:transition-[opacity,margin] sm:duration-[150ms] xl:left-[61%] xl:top-[36px] xl:border xl:p-[16px]"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="hs-mega-menu"
                                >
                                    <div class="grid gap-[8px] sm:grid sm:grid-cols-1">
                                        <div class="flex flex-col">
                                            <a
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                href="/blog"
                                                >{{ $t('c_nav_26') }}
                                            </a>
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
                                    {{ $t('c_nav_28') }}
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
                                    class="hs-dropdown-menu sm: start-0 z-10 hidden w-fit min-w-60 rounded-lg border-[#eee] bg-white py-2 opacity-0 transition-[height] duration-300 ease-in-out before:absolute hs-dropdown-open:opacity-100 sm:px-2 sm:shadow-md sm:transition-[opacity,margin] sm:duration-[150ms] xl:left-[72%] xl:top-[36px] xl:border xl:p-[16px]"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="hs-mega-menu"
                                >
                                    <div class="grid gap-[8px] sm:grid sm:grid-cols-1">
                                        <div class="flex flex-col">
                                            <a
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :href="localePath('about-us')"
                                                >{{ $t('c_nav_29') }}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- CONTACT US -->
                            <a id="contact-us" :href="localePath('contact-us')" class="btn font-12 text-white">{{
                                $t('c_navbar_3')
                            }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Mobile -->

        <!-- Desktop -->
        <section class="desktop section fixed z-50 bg-[#F6F7F8] py-[8px] shadow-xl">
            <div class="div flex-row items-center justify-between">
                <div class="flex gap-[16px]">
                    <UBreadcrumb :links="links" />
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
            class="desktop section fixed top-[36px] z-50 flex w-full flex-wrap border-b-2 border-[#eee] bg-white py-1 text-sm sm:flex-nowrap sm:justify-start sm:py-1"
        >
            <div class="mx-auto w-full px-[16px] py-[8px] sm:max-xl:max-w-[640px] xl:max-w-[1440px] xl:px-[120px] xl:py-[16px]">
                <div class="relative xl:flex xl:items-center">
                    <!-- 1 -->
                    <div class="flex items-center justify-between">
                        <!-- LOGO -->
                        <a :href="localePath('/')"><img src="/img/ofon.webp" alt="Image" /></a>
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
                                    {{ $t('c_nav_1') }}
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
                                    class="hs-dropdown-menu sm: start-0 z-10 hidden w-fit min-w-60 rounded-lg border-[#eee] bg-white py-2 opacity-0 transition-[height] duration-300 ease-in-out before:absolute hs-dropdown-open:opacity-100 sm:px-2 sm:shadow-md sm:transition-[opacity,margin] sm:duration-[150ms] xl:left-[45%] xl:top-[36px] xl:border xl:p-[16px]"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="hs-mega-menu"
                                >
                                    <div class="grid gap-[8px] sm:grid sm:grid-cols-2">
                                        <div class="flex flex-col">
                                            <p class="font-12 p-[4px] font-bold xl:p-[8px]">{{ $t('c_nav_2') }}</p>
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('/service/pbx-maintenance-service-support')"
                                                >{{ $t('c_nav_3') }}
                                            </NuxtLink>
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('/service/cloud-pbx-installation')"
                                                >{{ $t('c_nav_4') }}</NuxtLink
                                            >
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('/service/phone-system-integration')"
                                                >{{ $t('c_nav_5') }}</NuxtLink
                                            >
                                        </div>
                                        <div class="flex flex-col">
                                            <p class="font-12 p-[4px] font-bold xl:p-[8px]">{{ $t('c_nav_6') }}</p>
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('/product/telephone')"
                                                >{{ $t('c_nav_7') }}
                                            </NuxtLink>
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('/product/internet')"
                                                >{{ $t('c_nav_8') }}</NuxtLink
                                            >
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('/product/sip-trunk')"
                                                >{{ $t('c_nav_9') }}</NuxtLink
                                            >
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('/product/meeting-setup')"
                                                >{{ $t('c_nav_10') }}</NuxtLink
                                            >
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('/product/cloud-pbx')"
                                                >{{ $t('c_nav_11') }}</NuxtLink
                                            >
                                            <a
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :href="localePath('/product/webcall')"
                                                >Webcall</a
                                            >
                                            <a
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :href="localePath('/product/voice-api')"
                                                >Voice API</a
                                            >
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
                                    {{ $t('c_nav_25') }}
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
                                    class="hs-dropdown-menu sm: start-0 z-10 hidden w-fit min-w-60 rounded-lg border-[#eee] bg-white py-2 opacity-0 transition-[height] duration-300 ease-in-out before:absolute hs-dropdown-open:opacity-100 sm:px-2 sm:shadow-md sm:transition-[opacity,margin] sm:duration-[150ms] xl:left-[61%] xl:top-[36px] xl:border xl:p-[16px]"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="hs-mega-menu"
                                >
                                    <div class="grid gap-[8px] sm:grid sm:grid-cols-1">
                                        <div class="flex flex-col">
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                to="/blog"
                                                >{{ $t('c_nav_26') }}
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
                                    {{ $t('c_nav_28') }}
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
                                    class="hs-dropdown-menu sm: start-0 z-10 hidden w-fit min-w-60 rounded-lg border-[#eee] bg-white py-2 opacity-0 transition-[height] duration-300 ease-in-out before:absolute hs-dropdown-open:opacity-100 sm:px-2 sm:shadow-md sm:transition-[opacity,margin] sm:duration-[150ms] xl:left-[72%] xl:top-[36px] xl:border xl:p-[16px]"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="hs-mega-menu"
                                >
                                    <div class="grid gap-[8px] sm:grid sm:grid-cols-1">
                                        <div class="flex flex-col">
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('about-us')"
                                                >{{ $t('c_nav_29') }}
                                            </NuxtLink>
                                            <NuxtLink
                                                class="font-12 rounded-lg p-[4px] font-medium hover:bg-[#eee] xl:p-[8px]"
                                                :to="localePath('board-of-directors')"
                                                >{{ $t('c_nav_31') }}
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

        <!-- Desktop -->
        <div class="h-[102px] xl:h-[117px]"></div>
    </main>
</template>

<script setup>
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const links = useBreadcrumbItems();
</script>

<style scoped>
.text-primary-500 {
    color: orangered;
}

#contact-us {
    color: white;
    text-decoration: none;
}

.router-link-exact-active {
    color: #f25921;
    text-decoration: underline;
    font-weight: 600;
}

.desktop {
    display: flex;
}

.mobile {
    display: none;
}

@media (max-width: 1280px) {
    .desktop {
        display: none;
    }

    .mobile {
        display: flex;
    }
}
</style>
