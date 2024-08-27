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

// page routing
defineI18nRoute({
    paths: {
        en: '/industry/finance/',
        id: '/industri/finance/',
    },
});
</script>
