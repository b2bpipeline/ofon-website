<template>
    <main>
        <!-- Hero -->
        <section class="section bg-c-white pb-0 pt-[40px] xl:min-h-[685px] xl:bg-[url('/img/background.webp')] xl:bg-cover">
            <div class="div flex-col justify-between gap-10 pb-[40px] xl:flex-row xl:items-center xl:justify-center">
                <div class="items-start-center flex flex-col gap-6 text-center xl:max-w-[640px]">
                    <h1 class="font-36 font-bold xl:font-semibold">
                        Say Goodbye to the High Maintenance and Outdated Telephone Systems
                    </h1>
                    <p class="font-16 font-medium">
                        Still use outdated telephone system with higher maintenance? No way! Upgrade to a modern designed of
                        communication and boost the efficiency.
                    </p>
                    <div class="flex justify-center gap-2 xl:gap-3">
                        <p class="font-16 font-bold">Certified Engineer by</p>
                        <img src="/img/microsoft.webp" alt="Image" class="" />
                    </div>
                    <div class="grid grid-cols-1 gap-[16px] xl:mx-auto xl:grid-cols-2">
                        <WhatsAppUs />
                        <a href="#forms" class="btn-outline">Get a Free Audit</a>
                    </div>
                </div>
            </div>
            <img src="/img/hero.webp" alt="Image" class="mx-auto w-full max-w-[640px] xl:hidden" />
        </section>

        <!-- Logo -->
        <CompaniesLogo />

        <!-- A Compled Cloud PBX -->
        <section v-motion-slide-visible-once-right :duration="500" class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="flex flex-col gap-[16px] xl:gap-[24px]">
                    <p class="font-32 font-bold text-c-orange xl:font-semibold">A Complete Cloud PBX Solution & Support</p>
                    <p class="font-14 font-medium">
                        Don't risk non-compliance due to an unreliable phone system. Upgrade to a complete compliant solution that
                        meets all necessary standards, giving you peace of mind and avoiding
                        <span class="font-bold">potential risks or issues:</span>
                    </p>
                    <div class="flex w-full flex-col gap-[8px] xl:gap-[20px]">
                        <div class="flex justify-start gap-4">
                            <img src="/img/support1.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Need Protections and Adjustments with IT Security</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/support2.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Worries about Adjusting Device Setting</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/support3.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Disruption and Disconnected Communication</p>
                        </div>
                    </div>
                </div>
                <img src="/img/solution.webp" alt="Image" />
            </div>
        </section>

        <!-- Join The Future -->
        <section v-motion-slide-visible-once-left :duration="500" class="section bg-c-brown xl:bg-c-white">
            <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
                <div class="xl:rounded-3xl xl:bg-c-brown xl:p-[50px]">
                    <h2 class="font-32 text-center font-bold text-c-white xl:font-semibold">
                        Join the Future of Communication with PBX Solutions
                    </h2>
                    <div class="flex flex-col gap-[24px] xl:my-[16px] xl:grid xl:grid-cols-3 xl:flex-row xl:gap-[60px]">
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/solution1.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
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
                            <img src="/img/solution2.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">Adapt to Network Configuration</p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    Adjusting device settings to fit with the way a network is set up and connects to Wi-Fi.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/solution3.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
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
                    </div>
                </div>
            </div>
        </section>

        <!-- 2 Services -->
        <section v-motion-slide-visible-once-right :duration="500" class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <img src="/img/service1.webp" alt="Image" class="xl:order-1" />
                <div class="flex flex-col gap-[16px] xl:gap-[24px]">
                    <p class="font-32 font-bold text-c-orange xl:font-semibold">Cloud PBX</p>
                    <p class="font-14 font-medium">
                        Join the league of modern businesses thriving with efficient communication solutions. Don't let the fear
                        of missing out on streamlined operations hold you back!
                    </p>
                    <div class="flex w-full flex-col gap-[8px] xl:gap-[20px]">
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Advanced Features</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Low Maintenance</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Seamless Integration</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section v-motion-slide-visible-once-left :duration="500" class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <img src="/img/service3.webp" alt="Image" />
                <div class="flex flex-col gap-[16px] xl:gap-[24px]">
                    <p class="font-32 font-bold text-c-orange xl:font-semibold">Maintenance & Support</p>
                    <p class="font-14 font-medium">
                        Are you constantly playing catch-up with maintenance tasks for your outdated phone system? Let us take
                        care of your legacy phone system and integrate it for better communication.
                    </p>
                    <div class="flex w-full flex-col gap-[8px] xl:gap-[20px]">
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Hardware & Software Maintenance</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Infrastructure Integration</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Improve Call Efficiency</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Supported Technology -->
        <SupportedTechnology />

        <!-- What Makes Us Different -->
        <section v-motion-slide-visible-once-right :duration="500" class="section">
            <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
                <h2 class="font-32 text-center font-bold text-c-orange xl:font-semibold">What Makes Us Different</h2>
                <div class="flex flex-col gap-[24px] xl:grid xl:grid-cols-3 xl:flex-row xl:gap-[60px]">
                    <div class="card-hover flex flex-col gap-[24px] rounded-xl border-[2px] border-c-orange bg-c-white p-[24px]">
                        <img src="/img/different1.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                        <div>
                            <p class="font-16 mb-[8px] font-bold">Modernization of Legacy Systems</p>
                            <p class="font-14 font-medium">
                                We transform outdated phone systems into modern cloud setups, ensuring your communication
                                infrastructure is not only up to date but also scalable and secure.
                            </p>
                        </div>
                    </div>
                    <div class="card-hover flex flex-col gap-[24px] rounded-xl border-[2px] border-c-orange bg-c-white p-[24px]">
                        <img src="/img/different2.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                        <div>
                            <p class="font-16 mb-[8px] font-bold">Unified Communication</p>
                            <p class="font-14 font-medium">
                                Our PBX solution tackles the inefficiency of separate platforms by offering a single, integrated
                                system that enhances both internal and external communications, making the use of
                                <span class="font-bold">Zoom, Microsoft Teams, Webex</span> and other tools more seamless.
                            </p>
                        </div>
                    </div>
                    <div class="card-hover flex flex-col gap-[24px] rounded-xl border-[2px] border-c-orange bg-c-white p-[24px]">
                        <img src="/img/different3.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                        <div>
                            <p class="font-16 mb-[8px] font-bold">CPBX Needs Customization</p>
                            <p class="font-14 font-medium">
                                Recognizing that one size doesn't fit all, we tailor our solutions to meet your business specific
                                operational requirements, ensuring a seamless transition and integration.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Save Cost -->
        <section v-motion-slide-visible-once-left :duration="500" class="section">
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
                        <img src="/img/chartmobile1.webp" alt="Image" class="xl:hidden" />
                        <img src="/img/chartdesktop1.webp" alt="Image" class="hidden xl:flex" />
                    </div>
                    <p class="font-32 font-bold text-c-orange">VS</p>
                    <div class="flex flex-col gap-[24px]">
                        <img src="/img/chartmobile2.webp" alt="Image" class="xl:hidden" />
                        <img src="/img/chartdesktop2.webp" alt="Image" class="hidden xl:flex" />
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA (Connecting Business)-->
        <section v-motion-slide-visible-once-right :duration="500" class="section bg-c-brown">
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
                <div><img src="/img/indonesia.webp" alt="Image" /></div>
            </div>
        </section>

        <!-- Testimonial -->
        <Testimonial />

        <!-- CTA (Join The Future)-->
        <section class="section">
            <div class="div">
                <div class="flex flex-col gap-[24px] rounded-xl bg-c-brown p-[24px] xl:flex-row xl:p-[42px]">
                    <div class="flex flex-col gap-[24px]">
                        <p class="font-32 font-semibold text-c-white">Join the Future of Cloud Communication Now!</p>
                        <p class="font-16 text-c-white">
                            Communicate through place and time with us! Upgrade today to stay ahead of the curve and ensure your
                            business thrives.
                        </p>
                        <a href="#forms" class="btn xl:w-fit">Contact Us</a>
                    </div>
                    <img src="/img/call.webp" alt="Image" />
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
// seo
useSeoMeta({
    title: 'Say Goodbye to the High Maintenance and Outdated Telephone Systems',
    description:
        'Still use outdated telephone system with higher maintenance? No way! Upgrade to a modern designed of communication and boost the efficiency.',
});

// page route
defineI18nRoute({
    paths: {
        en: '/service/cloud-pbx-installation',
        id: '/layanan/jasa-pasang-cloud-pbx',
    },
});
</script>
