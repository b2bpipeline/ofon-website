<template>
    <main>
        <!-- Hero (Enhance) -->
        <section class="section bg-c-white pb-0 pt-[40px]">
            <div class="div flex-col justify-between gap-10 xl:flex-row xl:items-center xl:pr-0">
                <div class="flex flex-col gap-6 xl:max-w-[480px]">
                    <p class="font-16 font-bold">Ofon SIP Trunk</p>
                    <h1 class="font-32 font-bold xl:font-semibold">Enhance Your Business Phone Capabilities</h1>
                    <p class="font-16 font-medium">
                        Enjoy business phone calls over the internet with more efficient and cost-effective VoIP technology.
                    </p>

                    <div class="grid grid-cols-1 gap-[16px] xl:grid-cols-2">
                        <WhatsAppUs />
                        <NuxtLink :to="localePath('contact-us')" class="btn-outline">Contact Us</NuxtLink>
                    </div>
                </div>
                <div><img src="/img/siptrunk1.webp" alt="Image" /></div>
            </div>
        </section>

        <!-- Logo -->
        <CompaniesLogo />

        <!-- A Flexible -->
        <section class="section pb-[32px] xl:pb-[0]">
            <div class="div flex flex-col items-center">
                <p class="font-32 mb-[16px] text-center font-bold text-c-black xl:mb-[24px] xl:font-semibold">
                    A Flexible & Reliable SIP Trunk Solution
                </p>
                <p class="font-16 text-center font-medium">
                    Ofon SIP Trunk enables businesses to make phone calls over the internet, replacing traditional phone lines
                    with more efficient and cost-effective VoIP technology. It provides unlimited flexibility and scalability,
                    with seamless integration into existing communication systems, making business communication more modern,
                    fast, and reliable.
                </p>
            </div>
        </section>
        <section class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="div flex flex-col gap-[16px] rounded-2xl border-2 border-[#E1E3E6] p-[24px]">
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">
                            Mulai dari 10 nomor telepon tetap kode area geografis <br />* Dapat ditambah hingga 2.000 nomor
                            telepon
                        </p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">Mulai dari 10 concurrent call <br />* Dapat ditambah hingga 2.000 concurrent call</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">Menggunakan protocol SIP (Session Initiation Protocol)</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">High availability crystal-clear voice</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">Delivery menggunakan jaringan Internet Protocol (IP)</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">Web-access call detail record</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">Customer care 24 jam</p>
                    </div>
                    <div class="mx-auto flex items-center gap-[8px]">
                        <p class="font-14 font-medium">Start from</p>
                        <p class="font-24 font-bold text-c-orange">Rp 1.500.000</p>
                        <p class="font-14 font-medium">/ month</p>
                    </div>
                    <NuxtLink :to="localePath('contact-us')" class="btn">Get It Now</NuxtLink>
                </div>
                <img src="/img/siptrunk2.webp" alt="Image" class="xl:order-1" />
            </div>
        </section>

        <!-- Why Should Choose -->
        <section class="section bg-c-yellow-light">
            <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
                <div class="flex flex-col gap-[32px] xl:gap-[60px] xl:rounded-3xl xl:bg-c-yellow-light xl:py-[50px]">
                    <h2 class="font-32 text-center font-bold text-c-black xl:font-semibold">Why Should Choose Ofon SIP Trunk?</h2>
                    <div class="flex flex-col gap-[24px] xl:grid xl:grid-cols-4 xl:flex-row xl:gap-[40px]">
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/siptrunk3.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">Flexible & Scalable</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    Easily expand or adapt your communication channels as your business grows, without the need
                                    for new hardware.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/siptrunk4.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">High Quality Audio</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    Enjoy crystal clear audio quality for all your calls, ensuring professional communication with
                                    partners and customers.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/siptrunk5.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">
                                    Service Level Agreement (SLA) 99%
                                </p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    Ensure reliable performance with a 99% uptime guarantee, keeping your business connected at
                                    all times.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/siptrunk6.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">Integration with VoIP</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    Integrate seamlessly with a variety of VoIP-based systems and platforms, simplifying
                                    communications and reducing infrastructure costs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA (Save Device) -->
        <section class="section">
            <div class="div flex flex-col gap-[40px] xl:grid xl:grid-cols-3 xl:gap-[60px]">
                <div class="flex flex-col gap-[12px] xl:col-span-2 xl:gap-[24px]">
                    <h2 class="font-32 font-bold">Save Device Maintenance Costs with Cloud PBX</h2>
                    <p class="font-16">
                        Ofon Cloud PBX provides a more modern and cost-effective business telephone service with more integrations
                        and features.
                    </p>
                    <NuxtLink :to="localePath('/service/cloud-pbx-installation')" class="btn-outline w-fit"
                        >Ofon Cloud PBX</NuxtLink
                    >
                </div>
                <div>
                    <img src="/img/siptrunk7.webp" alt="Image" />
                </div>
            </div>
        </section>

        <!-- CTA (Connecting Business)-->
        <section class="section bg-c-brown">
            <div class="div flex-col justify-between gap-10 xl:flex-row xl:items-center">
                <div class="flex flex-col gap-6 xl:max-w-[480px]">
                    <h2 class="font-32 font-bold text-c-white xl:font-semibold">
                        {{ $t('home_connecting_1') }}
                    </h2>
                    <p class="font-16 font-medium text-c-white">
                        {{ $t('home_connecting_2') }}
                    </p>
                    <div class="flex justify-between">
                        <div class="flex flex-col items-center">
                            <p class="font-32 text-center font-bold text-c-yellow">{{ $t('home_connecting_3') }}</p>
                            <p class="font-14 text-center font-bold text-c-white">{{ $t('home_connecting_4') }}</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <p class="font-32 text-center font-bold text-c-yellow">{{ $t('home_connecting_5') }}</p>
                            <p class="font-14 text-center font-bold text-c-white">{{ $t('home_connecting_6') }}</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <p class="font-32 text-center font-bold text-c-yellow">{{ $t('home_connecting_7') }}</p>
                            <p class="font-14 text-center font-bold text-c-white">{{ $t('home_connecting_8') }}</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 items-center gap-[16px]">
                        <WhatsAppUs />
                        <NuxtLink :to="localePath('contact-us')" class="btn-outline"> {{ $t('home_connecting_cta') }}</NuxtLink>
                    </div>
                </div>
                <div><img src="/img/indonesia.webp" alt="Image" /></div>
            </div>
        </section>

        <!-- Testimonial -->
        <Testimonial />

        <!-- CTA (Enhance) -->
        <section class="section">
            <div class="div">
                <div class="flex flex-col items-center gap-[24px] rounded-xl bg-c-brown p-[24px] xl:flex-row xl:p-[42px]">
                    <div class="flex flex-col gap-[24px]">
                        <p class="font-32 font-semibold text-c-white">Enhance Your Business Phone Capabilities Now!</p>
                        <p class="font-16 text-c-white">
                            Strengthen your communications infrastructure with cost-effective and scalable voice services.
                        </p>
                        <NuxtLink :to="localePath('contact-us')" class="btn xl:w-fit">Contact Us</NuxtLink>
                    </div>
                    <img src="/img/siptrunk8.webp" alt="Image" />
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
// initiate dynamic meta snippets
const { t } = useI18n();
const title = ref(t('product_sip_trunk_title'));
const description = ref(t('product_sip_trunk_description'));

// seo
useSeoMeta({
    title: title,
    description: description,
});

// page routing
// defineI18nRoute({
//     paths: {
//         en: '/product/sip-trunk',
//         id: '/produk/sip-trunk',
//     },
// });
</script>
