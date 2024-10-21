<template>
    <main>
        <!-- Hero (Your Best) -->
        <section class="section bg-c-white pb-0 pt-[40px]">
            <div class="div flex-col justify-between gap-10 xl:flex-row xl:items-center xl:pr-0">
                <div class="flex flex-col gap-6 xl:max-w-[480px]">
                    <p class="font-16 font-bold">{{ $t('telephone_hero_0') }}</p>
                    <h1 class="font-32 font-bold xl:font-semibold">{{ $t('telephone_hero_1') }}</h1>
                    <p class="font-16 font-medium">
                        {{ $t('telephone_hero_2') }}
                    </p>

                    <div class="grid grid-cols-1 gap-[16px] xl:grid-cols-2">
                        <WhatsAppUs />
                        <NuxtLink :to="localePath('contact-us')" class="btn-outline">{{ $t('telephone_hero_3') }}</NuxtLink>
                    </div>
                </div>
                <div><img src="/img/telephone1.webp" alt="Image" /></div>
            </div>
        </section>

        <!-- Logo -->
        <CompaniesLogo />

        <!-- Best Package -->
        <section class="section pb-[32px] xl:pb-[0]">
            <div class="div flex flex-col items-center">
                <p class="font-32 mb-[16px] text-center font-bold text-c-black xl:mb-[24px] xl:font-semibold">
                    {{ $t('telephone_package_1') }}
                </p>
                <p class="font-16 text-center font-medium">
                    {{ $t('telephone_package_2') }}
                </p>
            </div>
        </section>
        <section class="section">
            <div class="div grid grid-cols-1 flex-col items-start gap-[40px] xl:grid-cols-3">
                <div class="div flex flex-col gap-[16px] rounded-2xl border-2 border-[#E1E3E6] p-[24px]">
                    <p class="font-24 mb-[8px] text-center font-bold text-c-black xl:font-semibold">
                        {{ $t('telephone_package_3') }}
                    </p>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">{{ $t('telephone_package_4') }}</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">{{ $t('telephone_package_5') }}</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">{{ $t('telephone_package_6') }}</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">{{ $t('telephone_package_7') }}</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">{{ $t('telephone_package_8') }}</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">{{ $t('telephone_package_9') }}</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">{{ $t('telephone_package_10') }}</p>
                    </div>
                    <div class="mx-auto flex flex-col items-center">
                        <p class="font-14 font-medium">{{ $t('telephone_package_start') }}</p>
                        <p class="font-24 font-bold text-c-orange">Rp 35.000</p>
                        <p class="font-14 font-medium">{{ $t('telephone_package_permonth') }}</p>
                    </div>
                    <NuxtLink :to="localePath('contact-us')" class="btn">{{ $t('telephone_package_cta') }}</NuxtLink>
                </div>
                <div class="div flex flex-col gap-[16px] rounded-2xl border-2 border-[#E1E3E6] p-[24px]">
                    <p class="font-24 mb-[8px] text-center font-bold text-c-black xl:font-semibold">
                        {{ $t('telephone_package_11') }}
                    </p>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">{{ $t('telephone_package_12') }}</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">{{ $t('telephone_package_13') }}</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">{{ $t('telephone_package_14') }}</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">{{ $t('telephone_package_15') }}</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">{{ $t('telephone_package_16') }}</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">{{ $t('telephone_package_17') }}</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">{{ $t('telephone_package_18') }}</p>
                    </div>
                    <div class="mx-auto flex flex-col items-center">
                        <p class="font-14 font-medium">{{ $t('telephone_package_start') }}</p>
                        <p class="font-24 font-bold text-c-orange">Rp 60.000</p>
                        <p class="font-14 font-medium">{{ $t('telephone_package_permonth') }}</p>
                    </div>
                    <NuxtLink :to="localePath('contact-us')" class="btn">{{ $t('telephone_package_cta') }}</NuxtLink>
                </div>
                <div class="div flex flex-col gap-[16px] rounded-2xl border-2 border-[#E1E3E6] p-[24px]">
                    <p class="font-24 mb-[8px] text-center font-bold text-c-black xl:font-semibold">
                        {{ $t('telephone_package_19') }}
                    </p>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">{{ $t('telephone_package_20') }}</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">{{ $t('telephone_package_21') }}</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">{{ $t('telephone_package_22') }}</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">{{ $t('telephone_package_23') }}</p>
                    </div>
                    <div class="mx-auto flex flex-col items-center">
                        <p class="font-14 font-medium">{{ $t('telephone_package_start') }}</p>
                        <p class="font-24 font-bold text-c-orange">Rp 240.000</p>
                        <p class="font-14 font-medium">{{ $t('telephone_package_permonth') }}</p>
                    </div>
                    <NuxtLink :to="localePath('contact-us')" class="btn">{{ $t('telephone_package_cta') }}</NuxtLink>
                </div>
            </div>
        </section>

        <!-- Prefix Area Code -->
        <PrefixArea />

        <!-- Why Choose Ofon SIP -->
        <section class="section bg-c-yellow-light">
            <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
                <div class="flex flex-col gap-[32px] xl:gap-[60px] xl:rounded-3xl xl:bg-c-yellow-light xl:py-[50px]">
                    <h2 class="font-32 text-center font-bold text-c-black xl:font-semibold">{{ $t('telephone_why_1') }}</h2>
                    <div class="flex flex-col gap-[24px] xl:grid xl:grid-cols-4 xl:flex-row xl:gap-[40px]">
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/siptrunk3.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('telephone_why_2') }}</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('telephone_why_3') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/siptrunk4.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('telephone_why_4') }}</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('telephone_why_5') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/siptrunk5.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">
                                    {{ $t('telephone_why_6') }}
                                </p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('telephone_why_7') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img src="/img/siptrunk6.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('telephone_why_8') }}</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('telephone_why_9') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA (Need More Solution) -->
        <section class="section">
            <div class="div flex flex-col gap-[40px] xl:grid xl:grid-cols-3 xl:gap-[60px]">
                <div class="flex flex-col gap-[12px] xl:col-span-2 xl:gap-[24px]">
                    <h2 class="font-32 font-bold">{{ $t('telephone_save_1') }}</h2>
                    <p class="font-16">
                        {{ $t('telephone_save_2') }}
                    </p>
                    <NuxtLink :to="localePath('/service/cloud-pbx-installation')" class="btn-outline w-fit">
                        Ofon SIP Trunk ></NuxtLink
                    >
                </div>
                <div>
                    <img src="/img/telephone2.webp" alt="Image" />
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
                        <p class="font-32 font-semibold text-c-white">{{ $t('telephone_cta_1') }}</p>
                        <p class="font-16 text-c-white">
                            {{ $t('telephone_cta_2') }}
                        </p>
                        <NuxtLink :to="localePath('contact-us')" class="btn xl:w-fit">{{ $t('telephone_cta_3') }}</NuxtLink>
                    </div>
                    <img src="/img/telephone3.webp" alt="Image" />
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
// initiate dynamic meta snippets
const { t } = useI18n();
const title = ref(t('product_telephone_title'));
const description = ref(t('product_telephone_description'));

// seo
useSeoMeta({
    title: title,
    description: description,
});

// page routing
// defineI18nRoute({
//     paths: {
//         en: '/product/telephone',
//         id: '/produk/telepon',
//     },
// });
</script>
