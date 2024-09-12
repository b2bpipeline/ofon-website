<template>
    <main>
        <!-- Description -->
        <section class="section pb-[32px]">
            <div class="div flex-col gap-[16px]">
                <h1 class="font-36 font-bold">Author</h1>
                <p class="font-20 font-bold text-c-orange">Blog Workfrom</p>
            </div>
        </section>

        <!-- Content -->
        <section class="section pt-[32px]">
            <div class="div flex-col xl:grid xl:grid-cols-1 xl:gap-[32px]">
                <div>
                    <!-- User -->
                    <div class="grid gap-[16px]">
                        <NuxtLink
                            to="/blog/author/pipeline"
                            class="flex flex-col overflow-hidden rounded-2xl border-2 border-c-orange bg-white p-[16px] transition hover:scale-105"
                        >
                            <h2 class="font-14 font-bold">Pipeline</h2>
                        </NuxtLink>
                        <NuxtLink
                            to="/blog/author/gunawan"
                            class="flex flex-col overflow-hidden rounded-2xl border-2 border-c-orange bg-white p-[16px] transition hover:scale-105"
                        >
                            <h2 class="font-14 font-bold">Gunawan</h2>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA (Avoid Misunderstandings) -->
        <section class="section">
            <div class="div">
                <div class="flex flex-col gap-[24px] rounded-xl bg-c-brown p-[24px] xl:flex-row xl:p-[42px]">
                    <div class="flex flex-col gap-[24px]">
                        <p class="font-32 font-semibold text-c-white">Avoid Misunderstandings and Switch with Ofon!</p>
                        <p class="font-16 text-c-white">
                            Need to optimize the way your business communicate? Contact us and get a free audit.
                        </p>
                        <a href="#forms" class="btn xl:w-fit">Contact Us</a>
                    </div>
                    <img src="/img/call.webp" alt="Image" />
                </div>
            </div>
        </section>

        <!-- Forms -->
        <Forms />
    </main>
</template>

<script setup>
// i18n
defineI18nRoute(false);

// seo meta
useSeoMeta({
    title: 'Category',
    description: `Category`,
});
</script>
