<template>
    <main>
        <!-- Hero -->
        <section class="section">
            <div class="div flex flex-col gap-[24px]">
                <h1 class="font-36 text-center font-bold">{{ $t('bod_1') }}</h1>
                <p class="font-16 text-center">
                    {{ $t('bod_2') }}
                </p>
            </div>
        </section>

        <!-- BOD 1 -->
        <section class="section">
            <div class="div flex flex-col items-start justify-start gap-[16px] xl:flex-row xl:gap-[64px]">
                <img src="/img/leaders1.webp" alt="Image" class="xl:w-[340px]" />
                <div class="flex flex-col gap-[16px]">
                    <h2 class="font-32 font-bold">Pratama Habibie</h2>
                    <p class="font-16 font-bold">President Director</p>
                    <p class="font-14">
                        {{ $t('bod_people_1') }}
                    </p>
                </div>
            </div>
        </section>

        <!-- BOD 2 -->
        <section class="section">
            <div class="div flex flex-col items-start justify-start gap-[16px] xl:flex-row xl:gap-[64px]">
                <img src="/img/leaders2.webp" alt="Image" class="xl:w-[340px]" />
                <div class="flex flex-col gap-[16px]">
                    <h2 class="font-32 font-bold">Robby Susilo</h2>
                    <p class="font-16 font-bold">Chief Finance & HR Officer</p>
                    <p class="font-14">
                        {{ $t('bod_people_2') }}
                    </p>
                </div>
            </div>
        </section>

        <!-- BOD 3 -->
        <section class="section">
            <div class="div flex flex-col items-start justify-start gap-[16px] xl:flex-row xl:gap-[64px]">
                <img src="/img/leaders3.webp" alt="Image" class="xl:w-[340px]" />
                <div class="flex flex-col gap-[16px]">
                    <h2 class="font-32 font-bold">Timbul Nainggolan</h2>
                    <p class="font-16 font-bold">Chief Operational & Regulatory Officer</p>
                    <p class="font-14">
                        {{ $t('bod_people_3') }}
                        <br />
                        <br />
                        {{ $t('bod_people_3_continued') }}
                        <br />
                        <br />
                        {{ $t('bod_people_3_quote') }}
                    </p>
                </div>
            </div>
        </section>

        <!-- BOD 4 -->
        <section class="section">
            <div class="div flex flex-col items-start justify-start gap-[16px] xl:flex-row xl:gap-[64px]">
                <img src="/img/leaders4.webp" alt="Image" class="xl:w-[340px]" />
                <div class="flex flex-col gap-[16px]">
                    <h2 class="font-32 font-bold">Cynthia Roosdiono</h2>
                    <p class="font-16 font-bold">Chief Technology Officer</p>
                    <p class="font-14">
                        {{ $t('bod_people_4') }}
                        <br />
                        <br />
                        {{ $t('bod_people_4_continued') }}
                    </p>
                </div>
            </div>
        </section>

        <!-- CTA (Ready To Start)-->
        <section class="section">
            <div class="div">
                <div class="flex flex-col items-center gap-[24px] rounded-xl bg-c-brown p-[24px] xl:flex-row xl:p-[42px]">
                    <div class="flex flex-col gap-[24px]">
                        <h2 class="font-32 font-semibold text-c-white">{{ $t('about_cta_1') }}</h2>
                        <p class="font-16 text-c-white">{{ $t('about_cta_2') }}</p>
                        <NuxtLink :to="localePath('contact-us')" class="btn xl:w-fit">{{ $t('about_cta_3') }}</NuxtLink>
                    </div>
                    <img src="/img/ab-cta.webp" alt="Image" />
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
// initiate dynamic meta snippets
// const { t } = useI18n();
// const title = ref(t('about_us_title'));
// const description = ref(t('about_us_description'));

// seo
useSeoMeta({
    title: 'Meet Our Board of Directors',
    description: `Meet the executives and visionaries behind Ofon's success and journey in providing the leading business telecommunications solutions in Indonesia.`,
});

// page routing
defineI18nRoute({
    paths: {
        en: '/board-of-directors/',
        id: '/board-of-directors/',
    },
});
</script>
