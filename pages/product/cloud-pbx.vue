<template>
    <main>
        <!-- Hero (Solusi Komunikasi) -->
        <section class="section bg-c-white pb-0 pt-[40px]">
            <div class="div flex-col justify-between gap-10 xl:flex-row xl:items-center xl:pr-0">
                <div class="flex flex-col gap-6 xl:max-w-[480px]">
                    <p class="font-16 font-bold">Ofon Cloud PBX</p>
                    <h1 class="font-32 font-bold xl:font-semibold">{{ $t('cpbx_1') }}</h1>
                    <p class="font-16 font-medium">
                        {{ $t('cpbx_2') }}
                    </p>
                    <div class="grid grid-cols-1 gap-[16px] xl:grid-cols-2">
                        <WhatsAppUs />
                        <NuxtLink :to="localePath('contact-us')" class="btn-outline">{{ $t('cpbx_3') }}</NuxtLink>
                    </div>
                </div>
                <div><img src="/img/product-cloudpbx1.webp" alt="Image" /></div>
            </div>
        </section>

        <!-- Logo -->
        <CompaniesLogo />

        <!-- Solusi Cloud PBXX -->
        <section class="section pb-[32px] xl:pb-[0]">
            <div class="div flex flex-col items-center">
                <p class="font-32 mb-[16px] text-center font-bold text-c-black xl:mb-[24px] xl:font-semibold">
                    {{ $t('cpbx_solution_1') }}
                </p>
                <p class="font-16 text-center font-medium">
                    {{ $t('cpbx_solution_2') }}
                </p>
            </div>
        </section>
        <section class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="div flex flex-col gap-[16px] rounded-2xl border-2 border-[#E1E3E6] p-[24px]">
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">{{ $t('cpbx_solution_3') }}</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">{{ $t('cpbx_solution_4') }}</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">{{ $t('cpbx_solution_5') }}</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">{{ $t('cpbx_solution_6') }}</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">{{ $t('cpbx_solution_7') }}</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">{{ $t('cpbx_solution_8') }}</p>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <div>
                            <p class="font-14">{{ $t('cpbx_solution_9') }}</p>
                            <p class="font-14">{{ $t('cpbx_solution_10') }}</p>
                            <p class="font-14">{{ $t('cpbx_solution_11') }}</p>
                            <p class="font-14">{{ $t('cpbx_solution_12') }}</p>
                            <p class="font-14">{{ $t('cpbx_solution_13') }}</p>
                            <p class="font-14">{{ $t('cpbx_solution_14') }}</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-[8px]">
                        <img src="/img/checklist.webp" alt="Image" />
                        <p class="font-14">{{ $t('cpbx_solution_15') }}</p>
                    </div>
                    <div class="mx-auto flex items-center gap-[8px]">
                        <p class="font-14 font-medium">{{ $t('cpbx_solution_16') }}</p>
                        <p class="font-24 font-bold text-c-orange">Rp 800.000</p>
                        <p class="font-14 font-medium">{{ $t('cpbx_solution_17') }}</p>
                    </div>
                    <NuxtLink :to="localePath('contact-us')" class="btn"> {{ $t('cpbx_solution_18') }}</NuxtLink>
                </div>
                <img src="/img/product-cloudpbx2.webp" alt="Image" class="xl:order-1" />
            </div>
        </section>

        <!-- Cloud PBX Untuk -->
        <section class="section bg-c-yellow-light">
            <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
                <div class="flex flex-col items-center gap-[24px] xl:grid xl:grid-cols-3 xl:flex-row xl:gap-[24px]">
                    <div class="flex flex-col gap-[16px]">
                        <h2 class="font-32 text-left font-bold text-c-black xl:font-semibold">
                            {{ $t('cpbx_for_1') }}
                        </h2>
                        <p class="font-16 text-left font-medium">
                            {{ $t('cpbx_for_2') }}
                        </p>
                    </div>
                    <div class="card-hover flex flex-col gap-[24px] rounded-xl border-[2px] border-c-orange bg-c-white p-[24px]">
                        <img src="/img/product-cloudpbx3.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                        <div>
                            <p class="font-16 mb-[8px] font-bold">{{ $t('cpbx_for_3') }}</p>
                            <p class="font-14 mb-[24px] font-medium">
                                {{ $t('cpbx_for_4') }}
                            </p>
                            <NuxtLink :to="localePath('/product/webcall')" class="font-14 font-bold text-c-orange">{{
                                $t('cpbx_for_cta')
                            }}</NuxtLink>
                        </div>
                    </div>
                    <div class="card-hover flex flex-col gap-[24px] rounded-xl border-[2px] border-c-orange bg-c-white p-[24px]">
                        <img src="/img/product-cloudpbx4.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                        <div>
                            <p class="font-16 mb-[8px] font-bold">{{ $t('cpbx_for_5') }}</p>
                            <p class="font-14 mb-[24px] font-medium">
                                {{ $t('cpbx_for_6') }}
                            </p>
                            <NuxtLink :to="localePath('/product/voice-api')" class="font-14 font-bold text-c-orange">{{
                                $t('cpbx_for_cta')
                            }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Mengapa Memilih -->
        <section class="section">
            <div class="div flex flex-col gap-[36px] xl:gap-[60px]">
                <div class="flex flex-col gap-[32px] xl:gap-[60px] xl:py-[50px]">
                    <h2 class="font-32 text-center font-bold text-c-black xl:font-semibold">{{ $t('cpbx_choose_1') }}</h2>
                    <div class="flex flex-col gap-[24px] xl:grid xl:grid-cols-4 xl:flex-row xl:gap-[40px]">
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img
                                src="/img/product-cloudpbx5.webp"
                                alt="Image"
                                class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]"
                            />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('cpbx_choose_2') }}</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('cpbx_choose_3') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img
                                src="/img/product-cloudpbx6.webp"
                                alt="Image"
                                class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]"
                            />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('cpbx_choose_4') }}</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('cpbx_choose_5') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img
                                src="/img/product-cloudpbx7.webp"
                                alt="Image"
                                class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]"
                            />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('cpbx_choose_6') }}</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('cpbx_choose_7') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img
                                src="/img/product-cloudpbx8.webp"
                                alt="Image"
                                class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]"
                            />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('cpbx_choose_8') }}</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('cpbx_choose_9') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img
                                src="/img/product-cloudpbx9.webp"
                                alt="Image"
                                class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]"
                            />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('cpbx_choose_10') }}</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('cpbx_choose_11') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img
                                src="/img/product-cloudpbx10.webp"
                                alt="Image"
                                class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]"
                            />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('cpbx_choose_12') }}</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('cpbx_choose_13') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img
                                src="/img/product-cloudpbx11.webp"
                                alt="Image"
                                class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]"
                            />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('cpbx_choose_14') }}</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('cpbx_choose_15') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[12px] transition hover:bg-[#FFE3A4]">
                            <img
                                src="/img/product-cloudpbx12.webp"
                                alt="Image"
                                class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]"
                            />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-black">{{ $t('cpbx_choose_16') }}</p>
                                <p class="font-14 font-regular text-center text-c-black">
                                    {{ $t('cpbx_choose_17') }}
                                </p>
                            </div>
                        </div>
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

        <!-- CTA (Sederhanakan) -->
        <section class="section">
            <div class="div">
                <div class="flex flex-col items-center gap-[24px] rounded-xl bg-c-brown p-[24px] xl:flex-row xl:p-[42px]">
                    <div class="flex flex-col gap-[24px]">
                        <p class="font-32 font-semibold text-c-white">{{ $t('cpbx_cta_1') }}</p>
                        <p class="font-16 text-c-white">
                            {{ $t('cpbx_cta_2') }}
                        </p>
                        <NuxtLink :to="localePath('contact-us')" class="btn xl:w-fit">{{ $t('cpbx_cta_3') }}</NuxtLink>
                    </div>
                    <img src="/img/product-cloudpbx13.webp" alt="Image" />
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
// initiate dynamic meta snippets
const { t } = useI18n();
const title = ref(t('product_cloud_pbx_title'));
const description = ref(t('product_cloud_pbx_description'));

// seo
useSeoMeta({
    title: title,
    description: description,
});

// page routing
// defineI18nRoute({
//     paths: {
//         en: '/product/cloud-pbx',
//         id: '/produk/cloud-pbx',
//     },
// });
</script>
