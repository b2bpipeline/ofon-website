<template>
    <main>
        <section class="section">
            <div class="div">
                <div class="w-full rounded-lg border border-gray-500 p-[16px] xl:border-0">
                    <iframe src="privacy-policy.html" class="hidden xl:flex" width="100%" height="7200px"></iframe>
                    <iframe src="privacy-policy.html" class="xl:hidden" width="100%" height="500px"></iframe>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
// seo meta
useSeoMeta({
    title: 'Privacy Policy',
    description: 'Privacy Policy',
});

// page routing
defineI18nRoute(false);
</script>
