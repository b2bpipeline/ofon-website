<template>
    <main>
        <!-- Thank You -->
        <section class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="flex flex-col items-start gap-[16px] xl:gap-[24px]">
                    <p class="font-36 font-bold text-c-black xl:font-semibold">{{ $t('thankyou_1') }}</p>
                    <p class="font-16 font-medium">{{ $t('thankyou_2') }}</p>
                    <div class="grid w-full grid-cols-1 gap-[16px] xl:grid-cols-2">
                        <NuxtLink to="/" class="btn-outline w-full">{{ $t('thankyou_3') }}</NuxtLink>
                        <WhatsAppUs />
                    </div>
                </div>
                <img src="/img/thankyou.webp" alt="Image" />
            </div>
        </section>
    </main>
</template>

<script setup>
// initiate dynamic meta snippets
const { t } = useI18n();
const title = ref(t('thank_you_title'));
const description = ref(t('thank_you_description'));

// seo
useSeoMeta({
    title: title,
    description: description,
});
// page routing
defineI18nRoute({
    paths: {
        en: '/thank-you/',
        id: '/thank-you/',
    },
});
</script>
