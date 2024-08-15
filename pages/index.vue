<template>
    <main>
        <!-- Hero -->
        <section class="section bg-c-white pb-0 pt-[40px] xl:min-h-[685px] xl:bg-[url('/img/new-bg.webp')] xl:bg-cover">
            <div class="div flex-col justify-between gap-10 pb-[40px] xl:flex-row xl:items-center xl:justify-center">
                <div class="items-start-center flex flex-col gap-6 text-center xl:mt-[60px] xl:max-w-[640px]">
                    <h1 class="font-36 font-bold xl:font-semibold">Leading the Way in Telephony Innovation in Indonesia</h1>
                    <p class="font-16 font-medium">
                        As a Pioneer of Telephony Solution Innovation in Indonesia, we empower your businesses communication with
                        our advanced & innovative services.
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

        <!-- Complete Phone -->
        <section class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="xl:order-1">
                    <p class="font-32 mb-[16px] font-bold text-c-orange xl:mb-[24px] xl:font-semibold">
                        A Complete Phone System & PBX Solution
                    </p>
                    <p class="font-16 font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum metus eu dapibus vulputate. Sed
                        tristique vel mauris ac blandit. Fusce congue a sapien sed dictum.
                    </p>
                    <div class="mt-[20px] flex w-full flex-col gap-[12px] xl:gap-[20px]">
                        <div class="flex items-start gap-[8px] rounded-lg border-2 border-c-orange p-[16px]">
                            <img src="/img/comp1.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">Maintain Legacy Phone System</p>
                                <p class="font-14">
                                    Your phone system are getting old? Let us take care of yours to keep it runs like new.
                                </p>
                                <p class="font-14 font-semibold text-c-orange">Learn More ></p>
                            </div>
                        </div>
                        <div class="flex items-start gap-[8px] rounded-lg border-2 border-c-orange p-[16px]">
                            <img src="/img/comp2.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">Migrate Traditional/On-premise to Cloud PBX</p>
                                <p class="font-14">
                                    Ready to step up for better solution? Upgrade your PBX to cloud technology and save your cost.
                                </p>
                                <p class="font-14 font-semibold text-c-orange">Learn More ></p>
                            </div>
                        </div>
                        <div class="flex items-start gap-[8px] rounded-lg border-2 border-c-orange p-[16px]">
                            <img src="/img/comp3.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">Integrate Multiple Communication Platform</p>
                                <p class="font-14">
                                    Unify any communication tool and platform to feel the seamless integration in your business.
                                </p>
                                <p class="font-14 font-semibold text-c-orange">Learn More ></p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/img/woman-phone.webp" alt="Image" />
            </div>
        </section>

        <!-- 1 Headling + 3 Section -->
        <section class="section pb-[32px] xl:pb-[0]">
            <div class="div flex flex-col items-center">
                <p class="font-32 mb-[16px] text-center font-bold text-c-black xl:mb-[24px] xl:font-semibold">
                    All-in-One Telephony Service:
                    <br />Maintenance, Migration, & Integration
                </p>
                <p class="font-16 text-center font-medium">
                    We’re dedicated to understanding your unique situation and getting what you need. From maintenance and support
                    to integration and migration, we've got your multi-vendor PBX covered.
                </p>
            </div>
        </section>
        <section class="section bg-c-yellow-light xl:bg-c-white">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div
                    class="flex w-full flex-col items-center gap-[32px] bg-c-yellow-light xl:flex-row xl:rounded-3xl xl:p-[40px]"
                >
                    <div class="flex flex-col">
                        <p class="font-32 mb-[16px] font-bold text-c-orange xl:mb-[24px] xl:font-semibold">
                            Phone System Maintenance & Support
                        </p>
                        <p class="font-14 font-medium">
                            Optimize your budget by outsourcing the operation and maintenance of your legacy telephony
                            infrastructure to our expert team.
                        </p>
                        <div class="mt-[20px] flex w-full flex-col gap-[8px] xl:gap-[16px]">
                            <div class="flex items-center gap-4">
                                <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                                <p class="font-16 font-bold">Hardware & Software Maintenance</p>
                            </div>
                            <div class="flex items-center gap-4">
                                <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                                <p class="font-16 font-bold">Experienced Technicians</p>
                            </div>
                            <div class="flex items-center gap-4">
                                <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                                <p class="font-16 font-bold">Improve Call Efficiency</p>
                            </div>
                        </div>
                        <a href="#forms" class="btn-outline mt-[24px] w-fit xl:mt-[32px]">Learn More</a>
                    </div>
                    <img src="/img/service4.webp" alt="Image" />
                </div>
            </div>
        </section>
        <section class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="xl:order-1">
                    <p class="font-32 mb-[16px] font-bold text-c-orange xl:mb-[24px] xl:font-semibold">Cloud PBX Migration</p>
                    <p class="font-14 font-medium">
                        Join the league of modern businesses thriving with efficient communication solutions. Don't let the fear
                        of missing out on streamlined operations hold you back!
                    </p>
                    <div class="mt-[20px] flex w-full flex-col gap-[8px] xl:gap-[20px]">
                        <div class="flex items-center gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Cost Saving</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Flexibility and Reliability</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Advanced Features & Integrations</p>
                        </div>
                    </div>
                    <a href="#forms" class="btn-outline mt-[24px] w-fit xl:mt-[32px]">Learn More</a>
                </div>
                <img src="/img/service1.webp" alt="Image" />
            </div>
        </section>
        <section class="section bg-c-yellow-light xl:bg-c-white">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div
                    class="flex w-full flex-col items-center gap-[32px] bg-c-yellow-light xl:flex-row xl:rounded-3xl xl:p-[40px]"
                >
                    <div class="flex flex-col">
                        <p class="font-32 mb-[16px] font-bold text-c-orange xl:mb-[24px] xl:font-semibold">
                            Phone System Integration
                        </p>
                        <p class="font-14 font-medium">
                            Using multiple technologies in your phone system? Unify all branches and user extensions into a
                            single, enterprise-class telephony system with our integration solution.
                        </p>
                        <div class="mt-[20px] flex w-full flex-col gap-[8px] xl:gap-[16px]">
                            <div class="flex items-center gap-4">
                                <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                                <p class="font-16 font-bold">System Design and Implementation</p>
                            </div>
                            <div class="flex items-center gap-4">
                                <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                                <p class="font-16 font-bold">Integration with Existing Infrastructure</p>
                            </div>
                            <div class="flex items-center gap-4">
                                <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                                <p class="font-16 font-bold">Unified Telecommunication</p>
                            </div>
                        </div>
                        <a href="#forms" class="btn-outline mt-[24px] w-fit xl:mt-[32px]">Learn More</a>
                    </div>
                    <img src="/img/service3.webp" alt="Image" />
                </div>
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
                    <img src="/img/hello.webp" alt="Image" />
                </div>
            </div>
        </section>

        <!-- What Make Us Different -->
        <section class="section bg-c-brown xl:bg-c-white">
            <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
                <div class="xl:rounded-3xl xl:bg-c-brown xl:p-[50px]">
                    <h2 class="font-32 text-center font-bold text-c-white xl:font-semibold">What Makes Us Different</h2>
                    <div class="flex flex-col gap-[24px] xl:my-[16px] xl:grid xl:grid-cols-3 xl:flex-row xl:gap-[60px]">
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/diff1.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">Cost Efficiency</p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    Save a significant amount of money up to 60% compared to other providers. Reduce maintenance
                                    costs while maintaining high standards of service.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/diff2.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">Certified Expert Team</p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    Our professionals dedicated to providing maintenance and support for your phone system. Ensure
                                    that your system runs smoothly and effectively.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/diff3.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">Modernization of Legacy Systems</p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    We transform outdated phone systems into modern cloud setups, ensuring your communication
                                    infrastructure up to date, scalable, and secure.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/diff4.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">PBX Needs Customization</p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    No pressure to upgrade. We focus on your needs and tailor our solutions to meet your business
                                    specific requirements, ensuring a seamless transition and integration.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/diff5.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">Unified Communication</p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    Our solution tackles the inefficiency of separated platforms by offering a single integrated
                                    system, making the use of Zoom, Teams, Webex and other tools more seamless.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/diff6.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">Guaranteed Multi-vendor Parts</p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    Offered to be compatible with various brands or models from different systems to make sure
                                    your communication feel seamless.
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
                        <img src="/img/chartmobile1.webp" alt="Image" class="xl:hidden" />
                        <img src="/img/chartdesktop1.webp" alt="Image" class="hidden xl:flex" />
                    </div>
                    <p class="font-32 font-bold text-c-orange">VS</p>
                    <div class="flex flex-col gap-[24px]">
                        <img src="/img/chartmobile2.webp" alt="Image" class="xl:hidden" />
                        <img src="/img/chartdesktop2.webp" alt="Image" class="hidden xl:flex" />
                    </div>
                </div>
                <a href="#forms" class="btn-outline mx-auto">Calculate Your Saving</a>
            </div>
        </section>

        <!-- Testimonial -->
        <CaseStudy />

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
                    <div class="grid grid-cols-2 items-center gap-[16px]">
                        <WhatsAppUs />
                        <a href="#forms" class="btn-outline">Get a Free Audit</a>
                    </div>
                </div>
                <div><img src="/img/indonesia.webp" alt="Image" /></div>
            </div>
        </section>

        <!-- Testimonial -->
        <Testimonial />

        <!-- CTA (Get A Free) -->
        <section class="section">
            <div class="div">
                <div class="flex flex-col items-center gap-[24px] rounded-xl bg-c-brown p-[24px] xl:flex-row xl:p-[42px]">
                    <div class="flex flex-col gap-[24px]">
                        <p class="font-32 font-semibold text-c-white">Get a Free Quick Audit!</p>
                        <p class="font-16 text-c-white">Contact us and find the best communication solution for your business!</p>
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
useSeoMeta({
    title: 'Home',
    description: 'Say Goodbye to the High Maintenance and Outdated Telephone Systems',
});
</script>
