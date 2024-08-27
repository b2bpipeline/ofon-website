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
// seo
useSeoMeta({
    title: 'Contact Us',
    description: 'Say Goodbye to the High Maintenance and Outdated Telephone Systems',
});

// page routing
defineI18nRoute({
    paths: {
        en: '/contact-us/',
        id: '/hubungi-kami/',
    },
});
</script>
