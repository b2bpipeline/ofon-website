<template>
    <main>
        <!-- Hero -->
        <section class="section bg-c-white pb-0 pt-[40px]">
            <div class="div flex-col justify-between gap-10 xl:flex-row xl:items-center xl:pr-0">
                <div class="flex flex-col gap-6 xl:max-w-[480px]">
                    <p class="font-16 font-bold">Ofon Phone System Integration</p>
                    <h1 class="font-36 font-bold xl:font-semibold">Integrate & Manage Any Phone System Seamlessly</h1>
                    <p class="font-16 font-medium">
                        Build your communication infrastructure and become effortlessly productive. Adapts to your needs,
                        providing efficient communication across devices & networks with an efficient budget.
                    </p>
                    <div class="flex items-center gap-2 xl:gap-4">
                        <p class="font-16 font-bold">Certified Engineer by</p>
                        <img src="/img/microsoft.webp" alt="Image" class="" />
                    </div>
                    <div class="grid grid-cols-1 gap-[16px] xl:grid-cols-2">
                        <WhatsAppUs />
                        <a href="#forms" class="btn-outline">Get a Free Audit</a>
                    </div>
                </div>
                <div><img src="/img/lp4-hero.webp" alt="Image" /></div>
            </div>
        </section>

        <!-- Logo -->
        <CompaniesLogo />

        <!-- Connect Any Communication -->
        <section v-motion-slide-visible-once-right :duration="500" class="section">
            <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
                <div class="flex flex-col gap-[16px]">
                    <h2 class="font-32 text-center font-bold text-c-black xl:font-semibold">
                        Connect Any Communication Tool & Platform
                    </h2>
                    <p class="font-16 text-center">
                        Build your communication infrastructure and become effortlessly productive. Whether using traditional
                        landlines or mobile networks, our solution ensures smooth connectivity and unified management.
                    </p>
                </div>
                <div class="flex flex-col gap-[24px] xl:grid xl:grid-cols-3 xl:flex-row xl:gap-[36px]">
                    <div class="card-hover flex flex-col gap-[24px] rounded-xl border-[2px] border-c-orange bg-c-white p-[24px]">
                        <img src="/img/lp4-feat1.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                        <div>
                            <p class="font-16 mb-[8px] font-bold">Integration between PBX Phone Systems</p>
                            <p class="font-14 font-medium">
                                Bridges the gap between different PBX/PABX systems to simplified operations without the need for
                                complex configurations.
                            </p>
                        </div>
                        <div class="my-[16px] flex flex-wrap items-center gap-[16px]">
                            <img src="/img/sm-logo1.webp" alt="Image" />
                            <img src="/img/sm-logo2.webp" alt="Image" />
                            <img src="/img/sm-logo3.webp" alt="Image" />
                            <img src="/img/sm-logo4.webp" alt="Image" />
                            <img src="/img/sm-logo5.webp" alt="Image" />
                        </div>
                    </div>
                    <div class="card-hover flex flex-col gap-[24px] rounded-xl border-[2px] border-c-orange bg-c-white p-[24px]">
                        <img src="/img/lp4-feat2.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                        <div>
                            <p class="font-16 mb-[8px] font-bold">Integration to Unified Communication Platform</p>
                            <p class="font-14 font-medium">
                                Brings together various communication tools—voice, video, messaging, and collaboration—into a
                                single, cohesive and secure platform.
                            </p>
                        </div>
                        <div class="my-[16px] flex flex-col items-start gap-[16px]">
                            <div class="flex gap-[8px]">
                                <img src="/img/xs-logo1.webp" alt="Image" />
                                <p class="font-14 font-semibold">Microsoft Teams Integration</p>
                            </div>
                            <div class="flex gap-[8px]">
                                <img src="/img/xs-logo2.webp" alt="Image" />
                                <p class="font-14 font-semibold">Cisco Webex Integration</p>
                            </div>
                            <div class="flex gap-[8px]">
                                <img src="/img/xs-logo3.webp" alt="Image" />
                                <p class="font-14 font-semibold">Zoom Integration</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-hover flex flex-col gap-[24px] rounded-xl border-[2px] border-c-orange bg-c-white p-[24px]">
                        <img src="/img/lp4-feat3.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                        <div>
                            <p class="font-16 mb-[8px] font-bold">Integration to CRM Software</p>
                            <p class="font-14 font-medium">
                                Connects communication systems to empower your sales and support teams with the tools they need to
                                deliver and drive customer satisfaction.
                            </p>
                        </div>
                        <div class="my-[16px] flex flex-col items-start gap-[16px]">
                            <div class="flex gap-[8px]">
                                <img src="/img/xs-logo4.webp" alt="Image" />
                                <p class="font-14 font-semibold">Salesforce Integration</p>
                            </div>
                            <div class="flex gap-[8px]">
                                <img src="/img/xs-logo5.webp" alt="Image" />
                                <p class="font-14 font-semibold">Hubspot Integration</p>
                            </div>
                            <div class="flex gap-[8px]">
                                <img src="/img/xs-logo6.webp" alt="Image" />
                                <p class="font-14 font-semibold">Zoho Integration</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 2 Services -->
        <section v-motion-slide-visible-once-left :duration="500" class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="flex flex-col gap-[16px] xl:gap-[24px]">
                    <p class="font-32 font-bold text-c-orange xl:font-semibold">Multi-vendor Phone System Integration</p>
                    <p class="font-14 font-medium">
                        Whether you’re using a traditional PBX, VoIP, or any existing infrastructure, our solution is for optimal
                        performance even with a multi-vendor environment.
                    </p>
                    <div class="flex w-full flex-col gap-[8px] xl:gap-[20px]">
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">System Design and Implementation</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Integration with Existing Infrastructure</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Training and Support</p>
                        </div>
                    </div>
                </div>
                <img src="/img/service3.webp" alt="Image" class="xl:order-1" />
            </div>
        </section>
        <section v-motion-slide-visible-once-right :duration="500" class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="flex flex-col gap-[16px] xl:order-1 xl:gap-[24px]">
                    <p class="font-32 font-bold text-c-orange xl:font-semibold">Connect to Cloud PBX</p>
                    <p class="font-14 font-medium">
                        Whether you are a small business or a large company that requires advanced technology, we’re here to
                        connect and improve collaboration while simplifying management by making it to the cloud.
                    </p>
                    <div class="flex w-full flex-col gap-[8px] xl:gap-[20px]">
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Cost Saving</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Flexibility and Reliability</p>
                        </div>
                        <div class="flex justify-start gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">Advanced Features</p>
                        </div>
                    </div>
                </div>
                <img src="/img/service1.webp" alt="Image" />
            </div>
        </section>

        <!-- Boost Productivity -->
        <section v-motion-slide-visible-once-left :duration="500" class="section bg-c-brown xl:bg-c-white">
            <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
                <div class="xl:rounded-3xl xl:bg-c-brown xl:p-[50px]">
                    <h2 class="font-32 text-center font-bold text-c-white xl:font-semibold">
                        Boost Productivity of Key Business Operations with Ofon
                    </h2>
                    <div class="flex flex-col gap-[24px] xl:my-[16px] xl:grid xl:grid-cols-3 xl:flex-row xl:gap-[60px]">
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/lp4-solution1.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">
                                    Integration for Customer Service
                                </p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    With real-time access to customer data and interaction history, your agents can deliver
                                    personalized and efficient support.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/lp4-solution2.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">
                                    Simplify Management Team Operation
                                </p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    Reduce administrative routine tasks, and change to real-time access information to focus on
                                    strategic initiatives to get better collaboration.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/lp4-solution3.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">Connect to Popular Sales CRM</p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    Empower your sales team with the tools to deliver personalized and effective engagement, drive
                                    higher conversion rates, and increase customer satisfaction.
                                </p>
                            </div>
                        </div>
                    </div>
                    <a href="#forms" class="btn mx-auto w-fit">Contact Us</a>
                </div>
            </div>
        </section>

        <!-- Why Choose Ofon -->
        <section v-motion-slide-visible-once-right :duration="500" class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="flex flex-col gap-[16px] xl:order-1 xl:gap-[24px]">
                    <p class="font-32 font-bold text-c-black xl:font-semibold">Why Choose Ofon to Integrate Your Phone System</p>
                    <p class="font-14 font-medium">
                        Easily integrate various phone systems to gain smooth communication across your organization with our
                        professional teams at an efficient cost.
                    </p>
                    <div class="flex w-full flex-col gap-[8px] xl:gap-[20px]">
                        <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange p-[16px]">
                            <img src="/img/lp4-point1.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-14 font-bold">Certified Technicians</p>
                                <p class="font-12">
                                    Our professional Microsoft Certified Engineer are ready to support your needs.
                                </p>
                            </div>
                        </div>
                        <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange p-[16px]">
                            <img src="/img/lp4-point2.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-14 font-bold">Cost Efficiency</p>
                                <p class="font-12">Achieve optimal cost efficiency to save and improve financial performance.</p>
                            </div>
                        </div>
                        <div class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange p-[16px]">
                            <img src="/img/lp4-point3.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-14 font-bold">Customized Solution</p>
                                <p class="font-12">Our team collaborates to design a solution that is suitable to your needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/img/lp4-why.webp" alt="Image" />
            </div>
        </section>

        <!-- Supported (Logo) -->
        <SupportedTechnology />

        <!-- CTA (28+ Years) -->
        <section class="section bg-c-white">
            <div class="div flex-col justify-between gap-10 xl:flex-row xl:items-center xl:gap-[120px]">
                <div class="flex flex-col gap-6 xl:max-w-[480px]">
                    <h2 class="font-32 font-bold xl:font-semibold">28+ Years Experience in Telecommunication Expertise</h2>
                    <p class="font-16 font-medium">Our long-standing commitment can grow your telecommunications strategy.</p>
                    <div class="flex items-center gap-2 xl:gap-4">
                        <p class="font-16 font-bold">Certified Engineer by</p>
                        <img src="/img/microsoft.webp" alt="Image" class="" />
                    </div>
                    <a href="#forms" class="btn">Read Case Study</a>
                </div>
                <div><img src="/img/lp4-testi.webp" alt="Image" /></div>
            </div>
        </section>

        <!-- CTA (Ready To Integrate) -->
        <section class="section">
            <div class="div">
                <div class="flex flex-col gap-[24px] rounded-xl bg-c-brown p-[24px] xl:flex-row xl:p-[42px]">
                    <div class="flex flex-col gap-[24px]">
                        <p class="font-32 font-semibold text-c-white">
                            Ready to Integrate Your Phone System? Get a Free Quick Audit!
                        </p>
                        <p class="font-16 text-c-white">
                            Get the best communication infrastructure by clicking the button below!
                        </p>
                        <a href="#forms" class="btn xl:w-fit">Contact Us</a>
                    </div>
                    <img src="/img/lp4-cta.webp" alt="Image" />
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
    title: 'Integrate & Manage Any Phone System Seamlessly',
    description:
        'Build your communication infrastructure and become effortlessly productive. Adapts to your needs, providing efficient communication across devices & networks with an efficient budget.',
});
</script>
