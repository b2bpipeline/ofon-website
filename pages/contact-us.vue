<template>
    <main>
        <!-- Forms -->
        <Forms />

        <!-- Supported Technology -->
        <SupportedTechnology />

        <!-- Testimonial -->
        <Testimonial />

        <!-- FAQ -->
        <FAQ />
    </main>
</template>

<script setup>
// initiate dynamic meta snippets
const { t } = useI18n();
const title = ref(t('contact_us_title'));
const description = ref(t('contact_us_description'));

// seo
useSeoMeta({
    title: title,
    description: description,
});

// page routing
defineI18nRoute({
    paths: {
        en: '/contact-us/',
        id: '/hubungi-kami/',
    },
});
</script>
