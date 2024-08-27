<template>
    <main>
        <!-- Placeholder -->
        <section class="section">
            <div class="div">
                <h1 class="font-36">{{ route.path }}</h1>
            </div>
        </section>
    </main>
</template>

<script setup>
const route = useRoute();

// seo
useSeoMeta({
    title: 'Page',
    description: 'Page',
});

// page route
defineI18nRoute({
    paths: {
        en: '/service/phone-system-integration/zoom/',
        id: '/layanan/integrasi-phone-system/zoom/',
    },
});
</script>
