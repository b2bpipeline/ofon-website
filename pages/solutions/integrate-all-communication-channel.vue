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
// initiate dynamic meta snippets
const { t } = useI18n();
const title = ref(t('solution_integrate_all_channel_title'));
const description = ref(t('solution_integrate_all_channel_description'));

// seo
useSeoMeta({
    title: title,
    description: description,
});

// page routing
// defineI18nRoute({
//     paths: {
//         en: '/solutions/integrate-all-communication-channel',
//         id: '/solusi/integrasi-saluran-komunikasi',
//     },
// });
</script>
