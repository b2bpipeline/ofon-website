<template>
    <main>
        <!-- Hero -->
        <section class="section bg-c-white pb-0 pt-[40px] xl:min-h-[685px] xl:bg-[url('/img/new-bg.webp')] xl:bg-cover">
            <div class="div flex-col justify-between gap-10 pb-[40px] xl:flex-row xl:items-center xl:justify-center">
                <div class="items-start-center flex flex-col gap-6 text-center xl:mt-[60px] xl:max-w-[640px]">
                    <h1 class="font-36 font-bold xl:font-semibold">{{ $t('home_hero_1') }}</h1>
                    <p class="font-16 font-medium">
                        {{ $t('home_hero_2') }}
                    </p>
                    <div class="flex justify-center gap-2 xl:gap-3">
                        <p class="font-16 font-bold">{{ $t('home_hero_3') }}</p>
                        <img src="/img/microsoft.webp" alt="Image" class="" />
                    </div>
                    <div class="grid grid-cols-1 gap-[16px] xl:mx-auto xl:grid-cols-2">
                        <WhatsAppUs />
                        <a href="#forms" class="btn-outline">{{ $t('home_hero_4') }}</a>
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
                        {{ $t('home_complete_1') }}
                    </p>
                    <p class="font-16 font-medium">
                        {{ $t('home_complete_2') }}
                    </p>
                    <div class="mt-[20px] flex w-full flex-col gap-[12px] xl:gap-[20px]">
                        <div class="flex items-start gap-[8px] rounded-lg border-2 border-c-orange p-[16px]">
                            <img src="/img/comp1.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('home_complete_3') }}</p>
                                <p class="font-14">
                                    {{ $t('home_complete_4') }}
                                </p>
                                <p class="font-14 font-semibold text-c-orange">{{ $t('home_complete_cta') }}</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-[8px] rounded-lg border-2 border-c-orange p-[16px]">
                            <img src="/img/comp2.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('home_complete_5') }}</p>
                                <p class="font-14">
                                    {{ $t('home_complete_6') }}
                                </p>
                                <p class="font-14 font-semibold text-c-orange">{{ $t('home_complete_cta') }}</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-[8px] rounded-lg border-2 border-c-orange p-[16px]">
                            <img src="/img/comp3.webp" alt="Image" />
                            <div class="flex flex-col gap-[8px]">
                                <p class="font-16 font-bold">{{ $t('home_complete_7') }}</p>
                                <p class="font-14">
                                    {{ $t('home_complete_8') }}
                                </p>
                                <p class="font-14 font-semibold text-c-orange">{{ $t('home_complete_cta') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/img/woman-phone.webp" alt="Image" />
            </div>
        </section>

        <!-- 1 Heading + 3 Section -->
        <section class="section pb-[32px] xl:pb-[0]">
            <div class="div flex flex-col items-center">
                <p class="font-32 mb-[16px] text-center font-bold text-c-black xl:mb-[24px] xl:font-semibold">
                    {{ $t('home_aio_1') }}
                </p>
                <p class="font-16 text-center font-medium">
                    {{ $t('home_aio_2') }}
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
                            {{ $t('home_aio_3') }}
                        </p>
                        <p class="font-14 font-medium">
                            {{ $t('home_aio_4') }}
                        </p>
                        <div class="mt-[20px] flex w-full flex-col gap-[8px] xl:gap-[16px]">
                            <div class="flex items-center gap-4">
                                <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                                <p class="font-16 font-bold">{{ $t('home_aio_5') }}</p>
                            </div>
                            <div class="flex items-center gap-4">
                                <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                                <p class="font-16 font-bold">{{ $t('home_aio_6') }}</p>
                            </div>
                            <div class="flex items-center gap-4">
                                <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                                <p class="font-16 font-bold">{{ $t('home_aio_7') }}</p>
                            </div>
                        </div>
                        <a href="#forms" class="btn-outline mt-[24px] w-fit xl:mt-[32px]"> {{ $t('home_aio_cta') }}</a>
                    </div>
                    <img src="/img/service4.webp" alt="Image" />
                </div>
            </div>
        </section>
        <section class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="xl:order-1">
                    <p class="font-32 mb-[16px] font-bold text-c-orange xl:mb-[24px] xl:font-semibold">{{ $t('home_aio_8') }}</p>
                    <p class="font-14 font-medium">
                        {{ $t('home_aio_9') }}
                    </p>
                    <div class="mt-[20px] flex w-full flex-col gap-[8px] xl:gap-[20px]">
                        <div class="flex items-center gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('home_aio_10') }}</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('home_aio_11') }}</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                            <p class="font-16 font-bold">{{ $t('home_aio_12') }}</p>
                        </div>
                    </div>
                    <a href="#forms" class="btn-outline mt-[24px] w-fit xl:mt-[32px]"> {{ $t('home_aio_cta') }}</a>
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
                            {{ $t('home_aio_13') }}
                        </p>
                        <p class="font-14 font-medium">
                            {{ $t('home_aio_14') }}
                        </p>
                        <div class="mt-[20px] flex w-full flex-col gap-[8px] xl:gap-[16px]">
                            <div class="flex items-center gap-4">
                                <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                                <p class="font-16 font-bold">{{ $t('home_aio_15') }}</p>
                            </div>
                            <div class="flex items-center gap-4">
                                <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                                <p class="font-16 font-bold">{{ $t('home_aio_16') }}</p>
                            </div>
                            <div class="flex items-center gap-4">
                                <img src="/img/checklist.webp" alt="Image" class="h-fit" />
                                <p class="font-16 font-bold">{{ $t('home_aio_17') }}</p>
                            </div>
                        </div>
                        <a href="#forms" class="btn-outline mt-[24px] w-fit xl:mt-[32px]"> {{ $t('home_aio_cta') }}</a>
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
                    <h2 class="font-32 font-bold">{{ $t('home_want_1') }}</h2>
                    <p class="font-14">
                        {{ $t('home_want_2') }}
                    </p>
                    <a href="#forms" class="btn w-fit"> {{ $t('home_want_cta') }}</a>
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
                    <h2 class="font-32 text-center font-bold text-c-white xl:font-semibold">{{ $t('home_what_1') }}</h2>
                    <div class="flex flex-col gap-[24px] xl:my-[16px] xl:grid xl:grid-cols-3 xl:flex-row xl:gap-[60px]">
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/diff1.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">{{ $t('home_what_2') }}</p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    {{ $t('home_what_3') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/diff2.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">{{ $t('home_what_4') }}</p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    {{ $t('home_what_5') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/diff3.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">{{ $t('home_what_6') }}</p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    {{ $t('home_what_7') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/diff4.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">{{ $t('home_what_8') }}</p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    {{ $t('home_what_9') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/diff5.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">{{ $t('home_what_10') }}</p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    {{ $t('home_what_11') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-[24px] rounded-xl p-[24px] transition hover:bg-[#3C3C3C]">
                            <img src="/img/diff6.webp" alt="Image" class="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]" />
                            <div>
                                <p class="font-16 mb-[8px] text-center font-bold text-c-white">{{ $t('home_what_12') }}</p>
                                <p class="font-14 font-regular text-center text-c-white">
                                    {{ $t('home_what_13') }}
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
                    <h2 class="font-32 font-bold text-c-black">{{ $t('home_save_1') }}</h2>
                    <p class="font-16 mx-auto max-w-[1080px]">
                        {{ $t('home_save_2') }}
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
                <a href="#forms" class="btn-outline mx-auto">{{ $t('home_save_3') }}</a>
            </div>
        </section>

        <!-- Testimonial -->
        <CaseStudy />

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
                        <a href="#forms" class="btn-outline"> {{ $t('home_connecting_cta') }}</a>
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
                        <p class="font-32 font-semibold text-c-white">{{ $t('home_get_1') }}</p>
                        <p class="font-16 text-c-white">{{ $t('home_get_2') }}</p>
                        <a href="#forms" class="btn xl:w-fit"> {{ $t('home_get_cta') }}</a>
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
