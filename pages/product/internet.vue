<template>
    <main>
        <!-- Hero (Enjoy A Fast) -->
        <section class="section bg-c-white pb-0 pt-[40px]">
            <div class="div flex-col justify-between gap-10 xl:flex-row xl:items-center xl:pr-0">
                <div class="flex flex-col gap-6 xl:max-w-[480px]">
                    <p class="font-16 font-bold">{{ $t('internet_1') }}</p>
                    <h1 class="font-32 font-bold xl:font-semibold">{{ $t('internet_2') }}</h1>
                    <p class="font-16 font-medium">
                        {{ $t('internet_3') }}
                    </p>
                    <div class="grid grid-cols-1 gap-[16px] xl:grid-cols-2">
                        <WhatsAppUs />
                        <NuxtLink :to="localePath('contact-us')" class="btn-outline">{{ $t('internet_4') }}</NuxtLink>
                    </div>
                </div>
                <div><img src="/img/internet1.webp" alt="Image" /></div>
            </div>
        </section>

        <!-- Logo -->
        <CompaniesLogo />

        <!-- Ofon O2 Dedicated -->
        <section class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="flex flex-col gap-[24px]">
                    <div class="flex flex-col">
                        <p class="font-32 mb-[16px] text-left font-bold text-c-orange xl:mb-[24px] xl:font-semibold">
                            {{ $t('internet_o2_1') }}
                        </p>
                        <p class="font-14 text-left font-medium">
                            {{ $t('internet_o2_2') }}
                        </p>
                    </div>
                    <div class="grid grid-cols-1 gap-[16px] xl:grid-cols-2">
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/internet3.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('internet_o2_3') }}</p>
                                <p class="font-12">{{ $t('internet_o2_4') }}</p>
                            </div>
                        </div>
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/internet4.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('internet_o2_5') }}</p>
                                <p class="font-12">{{ $t('internet_o2_6') }}</p>
                            </div>
                        </div>
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/internet5.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('internet_o2_7') }}</p>
                                <p class="font-12">{{ $t('internet_o2_8') }}</p>
                            </div>
                        </div>
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/internet6.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('internet_o2_9') }}</p>
                                <p class="font-12">{{ $t('internet_o2_10') }}</p>
                            </div>
                        </div>
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/internet7.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('internet_o2_11') }}</p>
                                <p class="font-12">{{ $t('internet_o2_12') }}</p>
                            </div>
                        </div>
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/internet8.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('internet_o2_13') }}</p>
                                <p class="font-12">{{ $t('internet_o2_14') }}</p>
                            </div>
                        </div>
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/internet9.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('internet_o2_15') }}</p>
                                <p class="font-12">{{ $t('internet_o2_16') }}</p>
                            </div>
                        </div>
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/internet10.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('internet_o2_17') }}</p>
                                <p class="font-12">
                                    {{ $t('internet_o2_18') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/img/internet2.webp" alt="Image" class="xl:order-1" />
            </div>
        </section>

        <!-- Improve Your Business -->
        <section class="section bg-c-yellow-light">
            <div class="div flex flex-col gap-[40px] xl:grid xl:grid-cols-3 xl:gap-[60px]">
                <div class="flex flex-col gap-[12px] xl:col-span-2 xl:gap-[24px]">
                    <h2 class="font-32 font-bold">{{ $t('internet_imp_1') }}</h2>
                    <div class="flex items-center gap-[8px]">
                        <p class="font-16 font-bold">{{ $t('internet_imp_2') }}</p>
                        <p class="font-32 font-bold text-c-orange">Rp 200.000</p>
                        <p class="font-16 font-bold">{{ $t('internet_imp_3') }}</p>
                    </div>
                    <p class="font-14">
                        {{ $t('internet_imp_4') }}
                    </p>
                    <NuxtLink :to="localePath('/service/cloud-pbx-installation')" class="btn w-fit">Ofon Cloud PBX</NuxtLink>
                </div>
                <div>
                    <img src="/img/internet11.webp" alt="Image" />
                </div>
            </div>
        </section>

        <!-- Ofon O3 Broadband -->
        <section class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="flex flex-col gap-[24px] xl:order-1">
                    <div class="flex flex-col">
                        <p class="font-32 mb-[16px] text-left font-bold text-c-orange xl:mb-[24px] xl:font-semibold">
                            {{ $t('internet_o3_1') }}
                        </p>
                        <p class="font-14 text-left font-medium">
                            {{ $t('internet_o3_2') }}
                        </p>
                    </div>
                    <div class="grid grid-cols-1 gap-[16px] xl:grid-cols-2">
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/internet13.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('internet_o3_3') }}</p>
                                <p class="font-12">{{ $t('internet_o3_4') }}</p>
                            </div>
                        </div>
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/internet14.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('internet_o3_5') }}</p>
                                <p class="font-12">{{ $t('internet_o3_6') }}</p>
                            </div>
                        </div>
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/internet15.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('internet_o3_7') }}</p>
                                <p class="font-12">{{ $t('internet_o3_8') }}</p>
                            </div>
                        </div>
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/internet16.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('internet_o3_9') }}</p>
                                <p class="font-12">{{ $t('internet_o3_10') }}</p>
                            </div>
                        </div>
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/internet17.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('internet_o3_11') }}</p>
                                <p class="font-12">{{ $t('internet_o3_12') }}</p>
                            </div>
                        </div>
                        <div
                            class="card-hover flex items-start gap-[16px] rounded-xl border-2 border-c-orange bg-c-white p-[16px]"
                        >
                            <img src="/img/internet18.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('internet_o3_13') }}</p>
                                <p class="font-12">
                                    {{ $t('internet_o3_14') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/img/internet12.webp" alt="Image" />
            </div>
        </section>

        <!-- The Best Package -->
        <section class="section bg-c-yellow-light">
            <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
                <div class="flex flex-col items-center gap-[24px] xl:grid xl:grid-cols-3 xl:flex-row xl:gap-[24px]">
                    <div class="flex flex-col gap-[24px]">
                        <h2 class="font-32 text-left font-bold text-c-black xl:font-semibold">
                            {{ $t('internet_pack_1') }}
                        </h2>
                        <p class="font-16 text-left font-medium">
                            {{ $t('internet_pack_2') }}
                        </p>
                        <a href="#" class="btn-outline w-fit"> {{ $t('internet_pack_3') }}</a>
                    </div>
                    <div class="div flex flex-col gap-[16px] rounded-2xl border-2 border-[#E1E3E6] bg-c-white p-[24px]">
                        <p class="font-24 mb-[8px] text-center font-bold text-c-black xl:font-semibold">
                            {{ $t('internet_pack_4') }}
                        </p>
                        <div class="flex items-start gap-[8px]">
                            <img src="/img/checklist.webp" alt="Image" />
                            <p class="font-14">{{ $t('internet_pack_5') }}</p>
                        </div>
                        <div class="flex items-start gap-[8px]">
                            <img src="/img/checklist.webp" alt="Image" />
                            <p class="font-14">{{ $t('internet_pack_6') }}</p>
                        </div>
                        <div class="mx-auto flex flex-col items-center">
                            <p class="font-14 font-medium">{{ $t('internet_pack_start') }}</p>
                            <p class="font-24 font-bold text-c-orange">Rp 160.000</p>
                            <p class="font-14 font-medium">{{ $t('internet_pack_month') }}</p>
                        </div>
                        <NuxtLink :to="localePath('contact-us')" class="btn"> {{ $t('internet_pack_cta') }}</NuxtLink>
                    </div>
                    <div class="div flex flex-col gap-[16px] rounded-2xl border-2 border-[#E1E3E6] bg-c-white p-[24px]">
                        <p class="font-24 mb-[8px] text-center font-bold text-c-black xl:font-semibold">
                            {{ $t('internet_pack_7') }}
                        </p>
                        <div class="flex items-start gap-[8px]">
                            <img src="/img/checklist.webp" alt="Image" />
                            <p class="font-14">{{ $t('internet_pack_8') }}</p>
                        </div>
                        <div class="flex items-start gap-[8px]">
                            <img src="/img/checklist.webp" alt="Image" />
                            <p class="font-14">{{ $t('internet_pack_9') }}</p>
                        </div>
                        <div class="flex items-start gap-[8px]">
                            <img src="/img/checklist.webp" alt="Image" />
                            <p class="font-14">{{ $t('internet_pack_10') }}</p>
                        </div>
                        <div class="mx-auto flex flex-col items-center">
                            <p class="font-14 font-medium">{{ $t('internet_pack_start') }}</p>
                            <p class="font-24 font-bold text-c-orange">Rp 300.000</p>
                            <p class="font-14 font-medium">{{ $t('internet_pack_month') }}</p>
                        </div>
                        <NuxtLink :to="localePath('contact-us')" class="btn"> {{ $t('internet_pack_cta') }}</NuxtLink>
                    </div>
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

        <!-- CTA (Siap Melaju Lebih Cepat) -->
        <section class="section">
            <div class="div">
                <div class="flex flex-col items-center gap-[24px] rounded-xl bg-c-brown p-[24px] xl:flex-row xl:p-[42px]">
                    <div class="flex flex-col gap-[24px]">
                        <p class="font-32 font-semibold text-c-white">{{ $t('internet_cta_1') }}</p>
                        <p class="font-16 text-c-white">
                            {{ $t('internet_cta_2') }}
                        </p>
                        <NuxtLink :to="localePath('contact-us')" class="btn xl:w-fit">{{ $t('internet_cta_3') }}</NuxtLink>
                    </div>
                    <img src="/img/internet19.webp" alt="Image" />
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
// initiate dynamic meta snippets
const { t } = useI18n();
const title = ref(t('product_internet_title'));
const description = ref(t('product_internet_description'));

// seo
useSeoMeta({
    title: title,
    description: description,
});
// page routing
// defineI18nRoute({
//     paths: {
//         en: '/product/internet',
//         id: '/produk/internet',
//     },
// });
</script>
