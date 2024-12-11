<template>
    <main>
        <section class="section bg-c-brown">
            <div class="div flex-col items-start justify-start">
                <img src="/img/ofon.webp" class="mb-[32px]" alt="Images" />
                <div class="flex flex-col gap-[32px] xl:grid xl:grid-cols-4 xl:gap-[64px]">
                    <div class="flex flex-col gap-[16px] xl:col-span-2 xl:max-w-[360px]">
                        <p class="font-14 font-semibold text-c-white">PT Batam Bintan Telekomunikasi</p>
                        <p class="font-14 font-light text-c-white">
                            {{ $t('c_footer_1') }}
                        </p>
                        <div class="flex items-start gap-[8px]">
                            <img src="/img/location.webp" alt="Image" />
                            <p class="font-14 font-light text-c-white">
                                Menara Batavia Lt. 12A, Jl. K.H. Mas Mansyur No.Kav. 126, Karet Tengsin, Tanah Abang, Kota Jakarta
                                Pusat, Daerah Khusus Jakarta 10250
                            </p>
                        </div>
                        <a href="mailto:marketing@ofon.co.id" target="_blank" class="flex items-start gap-[8px]">
                            <img src="/img/mail.webp" alt="Image" />
                            <p class="font-14 font-light text-c-white">marketing@ofon.co.id</p>
                        </a>
                        <a href="tel:02139710000" target="_blank" class="flex items-start gap-[8px]">
                            <img src="/img/phone.webp" alt="Image" />
                            <p class="font-14 font-light text-c-white">(021) 3971 0000</p>
                        </a>
                    </div>
                    <div class="flex flex-col gap-[8px]">
                        <!-- Service -->
                        <NuxtLink :to="localePath('service')" class="font-14 mb-[8px] font-bold text-c-white">
                            {{ $t('c_footer_2') }}</NuxtLink
                        >
                        <NuxtLink
                            :to="localePath('/service/pbx-maintenance-service-support')"
                            class="font-14 font-light text-c-white"
                        >
                            {{ $t('c_footer_3') }}</NuxtLink
                        >
                        <NuxtLink :to="localePath('/service/cloud-pbx-installation')" class="font-14 font-light text-c-white">
                            {{ $t('c_footer_4') }}</NuxtLink
                        >
                        <NuxtLink :to="localePath('/service/phone-system-integration')" class="font-14 font-light text-c-white">
                            {{ $t('c_footer_5') }}</NuxtLink
                        >

                        <!-- Product -->
                        <NuxtLink :to="localePath('')" class="font-14 mb-[8px] mt-[24px] font-bold text-c-white">
                            {{ $t('c_footer_6') }}</NuxtLink
                        >
                        <NuxtLink :to="localePath('/product/telephone')" class="font-14 font-light text-c-white">
                            {{ $t('c_footer_7') }}</NuxtLink
                        >
                        <NuxtLink :to="localePath('/product/internet')" class="font-14 font-light text-c-white">
                            {{ $t('c_footer_8') }}</NuxtLink
                        >
                        <NuxtLink :to="localePath('/product/sip-trunk')" class="font-14 font-light text-c-white">
                            {{ $t('c_footer_9') }}</NuxtLink
                        >
                        <NuxtLink :to="localePath('/product/meeting-setup')" class="font-14 font-light text-c-white">
                            {{ $t('c_footer_10') }}</NuxtLink
                        >
                        <NuxtLink :to="localePath('/product/cloud-pbx')" class="font-14 font-light text-c-white">
                            Cloud PBX</NuxtLink
                        >

                        <!-- Use Case -->
                        <NuxtLink :to="localePath('')" class="font-14 mb-[8px] mt-[24px] font-bold text-c-white">
                            {{ $t('c_footer_11') }}</NuxtLink
                        >
                        <NuxtLink
                            :to="localePath('/use-case/maintain-legacy-phone-system')"
                            class="font-14 font-light text-c-white"
                        >
                            {{ $t('c_footer_12') }}</NuxtLink
                        >
                        <NuxtLink :to="localePath('/use-case/migrate-on-premise')" class="font-14 font-light text-c-white">
                            {{ $t('c_footer_13') }}</NuxtLink
                        >
                        <NuxtLink
                            :to="localePath('/use-case/integrate-all-communication')"
                            class="font-14 font-light text-c-white"
                        >
                            {{ $t('c_footer_14') }}</NuxtLink
                        >
                    </div>
                    <div class="flex flex-col gap-[8px]">
                        <!-- Industries -->
                        <NuxtLink :to="localePath('industry')" class="font-14 mb-[8px] font-bold text-c-white">
                            {{ $t('c_footer_15') }}</NuxtLink
                        >
                        <NuxtLink :to="localePath('/industry/finance')" class="font-14 font-light text-c-white">
                            {{ $t('c_footer_16') }}</NuxtLink
                        >
                        <NuxtLink :to="localePath('/industry/manufacturing')" class="font-14 font-light text-c-white">
                            {{ $t('c_footer_17') }}</NuxtLink
                        >
                        <NuxtLink :to="localePath('/industry/oil-and-gas')" class="font-14 font-light text-c-white">
                            {{ $t('c_footer_18') }}</NuxtLink
                        >
                        <NuxtLink :to="localePath('/industry/hospitality')" class="font-14 font-light text-c-white">
                            {{ $t('c_footer_19') }}</NuxtLink
                        >
                        <NuxtLink :to="localePath('/industry/healthcare')" class="font-14 font-light text-c-white">
                            {{ $t('c_footer_20') }}</NuxtLink
                        >

                        <!-- Resources -->
                        <NuxtLink :to="localePath('')" class="font-14 mb-[8px] mt-[24px] font-bold text-c-white">
                            {{ $t('c_footer_21') }}</NuxtLink
                        >
                        <NuxtLink to="/blog" class="font-14 font-light text-c-white"> {{ $t('c_footer_22') }}</NuxtLink>
                        <NuxtLink :to="localePath('case-study')" class="font-14 font-light text-c-white">
                            {{ $t('c_footer_23') }}</NuxtLink
                        >
                        <NuxtLink :to="localePath('testimonial')" class="font-14 font-light text-c-white">
                            {{ $t('c_footer_24') }}</NuxtLink
                        >
                        <NuxtLink :to="localePath('calculators')" class="font-14 font-light text-c-white">
                            {{ $t('c_footer_25') }}</NuxtLink
                        >

                        <!-- About -->
                        <NuxtLink :to="localePath('')" class="font-14 mb-[8px] mt-[24px] font-bold text-c-white">
                            {{ $t('c_footer_26') }}</NuxtLink
                        >
                        <NuxtLink :to="localePath('about-us')" class="font-14 font-light text-c-white">
                            {{ $t('c_footer_27') }}</NuxtLink
                        >
                        <NuxtLink :to="localePath('gallery')" class="font-14 font-light text-c-white">
                            {{ $t('c_footer_28') }}</NuxtLink
                        >
                        <NuxtLink :to="localePath('contact-us')" class="font-14 font-light text-c-white">
                            {{ $t('c_footer_29') }}</NuxtLink
                        >
                        <NuxtLink to="/privacy-policy-igo" class="font-14 font-light text-c-white">
                            {{ $t('c_footer_30') }}</NuxtLink
                        >
                        <NuxtLink to="/privacy-policy-website" class="font-14 font-light text-c-white">
                            {{ $t('c_footer_31') }}</NuxtLink
                        >
                    </div>
                </div>
                <div class="my-[40px] h-[2px] w-full bg-c-white"></div>
                <div class="flex w-full flex-col justify-between gap-[16px] xl:flex-row">
                    <div class="flex gap-[24px]">
                        <a href="https://www.facebook.com/profile.php?id=100063769320090" target="_blank"
                            ><img src="/img/facebook.webp" alt="Image"
                        /></a>
                        <a href="https://www.instagram.com/ofon.id/" target="_blank"
                            ><img src="/img/instagram.webp" alt="Image"
                        /></a>
                        <a href="https://x.com/ofon_id?lang=en" target="_blank"><img src="/img/twitter.webp" alt="Image" /></a>
                        <a href="https://www.linkedin.com/company/ofon/?originalSubdomain=id" target="_blank"
                            ><img src="/img/linkedin.webp" alt="Image"
                        /></a>
                    </div>
                    <p class="font-12 font-light text-c-white">Ofon @2024. All rights reserved.</p>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
const localePath = useLocalePath();
</script>
