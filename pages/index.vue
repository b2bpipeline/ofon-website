<template>
    <main>
        <!-- Hero -->
        <section class="section bg-c-white pb-0 pt-[40px] xl:min-h-[685px] xl:bg-[url('/img/new-bg.png')] xl:bg-cover">
            <div class="div flex-col justify-between gap-10 pb-[40px] xl:flex-row xl:items-center xl:justify-center">
                <div class="items-start-center flex flex-col gap-6 text-center xl:mt-[60px] xl:max-w-[640px]">
                    <h1 class="font-36 font-bold xl:font-semibold">Leading the Way in Telephony Innovation in Indonesia</h1>
                    <p class="font-16 font-medium">
                        As a Pioneer of Telephony Solution Innovation in Indonesia, we empower your businesses communication with
                        our advanced & innovative services.
                    </p>
                    <div class="flex justify-center gap-2 xl:gap-3">
                        <p class="font-16 font-bold">Certified Engineer by</p>
                        <img src="/img/microsoft.png" class="" />
                    </div>
                    <div class="grid grid-cols-1 gap-[16px] xl:mx-auto xl:grid-cols-2">
                        <WhatsAppUs />
                        <a href="#forms" class="btn-outline">Get a Free Audit</a>
                    </div>
                </div>
            </div>
            <img src="/img/hero.png" class="mx-auto w-full max-w-[640px] xl:hidden" />
        </section>

        <!-- Logo -->
        <CompaniesLogo />

        <!-- Cloud PBX -->
        <section class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="xl:order-1">
                    <p class="font-32 mb-[16px] font-bold text-c-orange xl:mb-[24px] xl:font-semibold">Ofon Cloud PBX</p>
                    <p class="font-14 font-medium">
                        Join the league of modern businesses thriving with efficient communication solutions. Don't let the fear
                        of missing out on streamlined operations hold you back!
                    </p>
                    <div class="mt-[20px] flex w-full flex-col gap-[8px] xl:gap-[20px]">
                        <div class="flex items-center gap-4">
                            <img src="/img/checklist.png" class="h-fit" />
                            <p class="font-16 font-bold">Cost Saving</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <img src="/img/checklist.png" class="h-fit" />
                            <p class="font-16 font-bold">Flexibility and Reliability</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <img src="/img/checklist.png" class="h-fit" />
                            <p class="font-16 font-bold">Advanced Features & Integrations</p>
                        </div>
                    </div>
                </div>
                <img src="/img/service1.png" />
            </div>
        </section>

        <!-- Supported Technology -->
        <SupportedTechnology />

        <!-- CTA (Want A Refresh) -->
        <section class="section">
            <div class="div flex flex-col gap-[40px] xl:grid xl:grid-cols-3 xl:gap-[60px]">
                <div class="flex flex-col gap-[12px] xl:col-span-2 xl:gap-[24px]">
                    <h2 class="font-32 font-bold">Want to Refresh Your Phone System? Get a Free Quick Audit!</h2>
                    <p class="font-14">
                        No matter what phone system you use, we have solution to make your phone system running like new.
                    </p>
                    <a href="#forms" class="btn w-fit">Contact Us</a>
                </div>
                <div>
                    <img src="/img/hello.png" />
                </div>
            </div>
        </section>

        <!-- Join The Future -->
        <section class="section bg-c-brown xl:bg-c-white">
            <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
                <div class="xl:rounded-3xl xl:bg-c-brown xl:p-[50px]">
                    <h2 class="font-32 text-center font-bold text-c-white xl:font-semibold">
                        Join the Future of Communication with PBX Solutions
                    </h2>
                    <div class="flex flex-col gap-[24px] xl:my-[16px] xl:grid xl:grid-cols-3 xl:flex-row xl:gap-[60px]">
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/solution1.png" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">
                                    Compliance to IT Security Policies
                                </p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    Keep digital information safe from threats like hacking or data breaches with proper safety
                                    guidelines in a workplace to prevent accidents and keep everyone secure.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/solution2.png" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">Adapt to Network Configuration</p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    Adjusting device settings to fit with the way a network is set up and connects to Wi-Fi.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/solution3.png" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">
                                    Integrate to Other Softwares & Platform
                                </p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    Making different programs and systems to work together smoothly. Sharing information and work
                                    together, making your tasks easier and more efficient.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/solution3.png" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">
                                    Integrate to Other Softwares & Platform
                                </p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    Making different programs and systems to work together smoothly. Sharing information and work
                                    together, making your tasks easier and more efficient.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/solution1.png" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">
                                    Compliance to IT Security Policies
                                </p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    Keep digital information safe from threats like hacking or data breaches with proper safety
                                    guidelines in a workplace to prevent accidents and keep everyone secure.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/solution2.png" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">Adapt to Network Configuration</p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    Adjusting device settings to fit with the way a network is set up and connects to Wi-Fi.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Save Cost -->
        <section class="section">
            <div class="div flex flex-col gap-[40px] xl:gap-[80px]">
                <div class="flex flex-col gap-[24px] text-center">
                    <h2 class="font-32 font-bold text-c-black">Save Cost Up to 60% by Upgrading to Cloud PBX</h2>
                    <p class="font-16 mx-auto max-w-[1080px]">
                        Analyze the budget to optimize your company's communication strategies.
                        <span class="font-bold"> Assumed installation for 10 branch offices with 10 DID 10 CC offices each.</span>
                    </p>
                </div>
                <div class="xl:gap-[40 px] flex flex-col gap-[24px] text-center xl:flex-row xl:items-center">
                    <div class="flex flex-col gap-[24px]">
                        <img src="/img/chartmobile1.png" class="xl:hidden" />
                        <img src="/img/chartdesktop1.png" class="hidden xl:flex" />
                    </div>
                    <p class="font-32 font-bold text-c-orange">VS</p>
                    <div class="flex flex-col gap-[24px]">
                        <img src="/img/chartmobile2.png" class="xl:hidden" />
                        <img src="/img/chartdesktop2.png" class="hidden xl:flex" />
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA (Connecting Business)-->
        <section class="section bg-c-brown">
            <div class="div flex-col justify-between gap-10 xl:flex-row xl:items-center">
                <div class="flex flex-col gap-6 xl:max-w-[480px]">
                    <h2 class="font-32 font-bold text-c-white xl:font-semibold">
                        Connecting Business Communication Across the Island
                    </h2>
                    <p class="font-16 font-medium text-c-white">
                        Our services give all across the places to connect and grow businesses strongly.
                    </p>
                    <div class="flex justify-between">
                        <div class="flex flex-col items-center">
                            <p class="font-32 text-center font-bold text-c-yellow">20</p>
                            <p class="font-14 text-center font-bold text-c-white">Big Cities</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <p class="font-32 text-center font-bold text-c-yellow">3299</p>
                            <p class="font-14 text-center font-bold text-c-white">Customers</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <p class="font-32 text-center font-bold text-c-yellow">28+</p>
                            <p class="font-14 text-center font-bold text-c-white">Years Experience</p>
                        </div>
                    </div>

                    <a href="#forms" class="btn">Contact Us</a>
                </div>
                <div><img src="/img/indonesia.png" /></div>
            </div>
        </section>

        <!-- Testimonial -->
        <Testimonial />

        <!-- CTA (Avoid Misunderstandings) -->
        <section class="section">
            <div class="div">
                <div class="flex flex-col gap-[24px] rounded-xl bg-c-brown p-[24px] xl:flex-row xl:p-[42px]">
                    <div class="flex flex-col gap-[24px]">
                        <p class="font-32 font-semibold text-c-white">Avoid Misunderstandings and Switch with Ofon!</p>
                        <p class="font-16 text-c-white">
                            Need to optimize the way your business communicate? Contact us and get a free audit.
                        </p>
                        <a href="#forms" class="btn xl:w-fit">Contact Us</a>
                    </div>
                    <img src="/img/call.png" />
                </div>
            </div>
        </section>

        <!-- Forms -->
        <Forms />

        <!-- FAQ -->
        <FAQ />
    </main>
</template>

<script setup>
useSeoMeta({
    title: 'Ofon | Home',
    ogTitle: 'Ofon | Home',
    description: 'Ofon | Home',
    ogDescription: 'Ofon | Home',
});
</script>
