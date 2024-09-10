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
const title = ref(t('case_study_oil_and_gas_title'));
const description = ref(t('case_study_oil_and_gas_description'));

// seo
useSeoMeta({
    title: title,
    description: description,
});

// page routing
// defineI18nRoute({
//     paths: {
//         en: '/case-study/oil-and-gas/',
//         id: '/studi-kasus/gas-dan-minyak',
//     },
// });
</script>
