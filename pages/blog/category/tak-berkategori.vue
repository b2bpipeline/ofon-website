<template>
    <main>
        <!-- Description -->
        <section class="section pb-[32px]">
            <div class="div flex-col gap-[16px]">
                <h1 class="font-36 font-bold">Tak Berkategori</h1>
                <p class="font-20 font-bold text-c-orange">Blog Ofon</p>
            </div>
        </section>

        <!-- Content -->
        <section class="section pt-[32px]">
            <div class="div flex-col items-start xl:grid xl:grid-cols-3 xl:gap-[32px]">
                <!-- Left Column -->
                <div class="grid xl:col-span-2">
                    <!-- Artikel Terbaru -->
                    <div class="grid gap-[24px] xl:grid-cols-2">
                        <NuxtLink
                            v-for="a in articles"
                            :key="a.id"
                            :to="`/blog/${a.slug}`"
                            class="flex flex-col overflow-hidden rounded-2xl border-2 border-c-orange bg-white transition hover:scale-105"
                        >
                            <!-- <img :src="a.yoast_head_json.og_image[0].url" class="object-cover xl:h-[240px]" alt="Image" /> -->
                            <div class="flex flex-col gap-[8px] p-[16px]">
                                <!-- v-if category badges -->
                                <p
                                    class="font-12 w-fit rounded-full border border-c-orange px-2 py-1 text-c-orange"
                                    v-if="a.categories[0] == 7"
                                >
                                    Cloud Direct Routing
                                </p>
                                <p
                                    class="font-12 w-fit rounded-full border border-c-orange px-2 py-1 text-c-orange"
                                    v-if="a.categories[0] == 6"
                                >
                                    Cloud PBX
                                </p>
                                <p
                                    class="font-12 w-fit rounded-full border border-c-orange px-2 py-1 text-c-orange"
                                    v-if="a.categories[0] == 8"
                                >
                                    Conference
                                </p>
                                <p
                                    class="font-12 w-fit rounded-full border border-c-orange px-2 py-1 text-c-orange"
                                    v-if="a.categories[0] == 5"
                                >
                                    Proxy
                                </p>
                                <p
                                    class="font-12 w-fit rounded-full border border-c-orange px-2 py-1 text-c-orange"
                                    v-if="a.categories[0] == 3"
                                >
                                    SmartPBX
                                </p>
                                <p
                                    class="font-12 w-fit rounded-full border border-c-orange px-2 py-1 text-c-orange"
                                    v-if="a.categories[0] == 1"
                                >
                                    Tak Berkategori
                                </p>
                                <p
                                    class="font-12 w-fit rounded-full border border-c-orange px-2 py-1 text-c-orange"
                                    v-if="a.categories[0] == 9"
                                >
                                    Web Call
                                </p>
                                <p
                                    class="font-12 w-fit rounded-full border border-c-orange px-2 py-1 text-c-orange"
                                    v-if="a.categories[0] == 4"
                                >
                                    Whitepaper
                                </p>
                                <!-- v-if category badges -->
                                <h2 class="font-16 font-bold">{{ a.title.rendered }}</h2>
                                <!-- <p class="font-12">{{ a.yoast_head_json.description }}</p> -->
                                <div class="flex items-center gap-[8px]">
                                    <!-- <p class="font-12 text-[10px] xl:text-[12px]">{{ a.yoast_head_json.author }}</p> -->
                                    <p class="font-12 text-[10px] xl:text-[12px]">Author</p>
                                    <p>•</p>
                                    <p class="font-12 text-[10px] xl:text-[12px]">{{ a.date }}</p>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
                <!-- Right Column -->
                <div>
                    <!-- Kategori -->
                    <p class="font-20 mb-[24px] font-bold">Kategori Lainnya</p>
                    <BlogCategory />
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

// fetch archive articles
const { data: articles } = await useFetch(
    'https://cms.ofon.co.id/wp-json/wp/v2/posts?_fields=id,slug,title,description,date,categories&per_page=10&categories=1'
);
// seo meta
useSeoMeta({
    title: 'Tak Berkategori',
    description: `Tak Berkategori`,
});
</script>
