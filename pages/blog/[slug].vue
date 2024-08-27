<template>
    <main>
        <!-- Content -->
        <section class="section">
            <div class="div flex-col xl:grid xl:grid-cols-3 xl:gap-[32px]">
                <!-- Left Column -->
                <div class="grid xl:col-span-2">
                    <div class="flex flex-col items-start gap-[16px]">
                        <!-- v-if category badges -->
                        <p
                            class="font-12 w-fit rounded-full border border-c-orange px-2 py-1 text-c-orange"
                            v-if="article?.at(0)?.categories[0] == 7"
                        >
                            Cloud Direct Routing
                        </p>
                        <p
                            class="font-12 w-fit rounded-full border border-c-orange px-2 py-1 text-c-orange"
                            v-if="article?.at(0)?.categories[0] == 6"
                        >
                            Cloud PBX
                        </p>
                        <p
                            class="font-12 w-fit rounded-full border border-c-orange px-2 py-1 text-c-orange"
                            v-if="article?.at(0)?.categories[0] == 8"
                        >
                            Conference
                        </p>
                        <p
                            class="font-12 w-fit rounded-full border border-c-orange px-2 py-1 text-c-orange"
                            v-if="article?.at(0)?.categories[0] == 5"
                        >
                            Proxy
                        </p>
                        <p
                            class="font-12 w-fit rounded-full border border-c-orange px-2 py-1 text-c-orange"
                            v-if="article?.at(0)?.categories[0] == 3"
                        >
                            SmartPBX
                        </p>
                        <p
                            class="font-12 w-fit rounded-full border border-c-orange px-2 py-1 text-c-orange"
                            v-if="article?.at(0)?.categories[0] == 1"
                        >
                            Tak Berkategori
                        </p>
                        <p
                            class="font-12 w-fit rounded-full border border-c-orange px-2 py-1 text-c-orange"
                            v-if="article?.at(0)?.categories[0] == 9"
                        >
                            Web Call
                        </p>
                        <p
                            class="font-12 w-fit rounded-full border border-c-orange px-2 py-1 text-c-orange"
                            v-if="article?.at(0)?.categories[0] == 4"
                        >
                            Whitepaper
                        </p>
                        <!-- v-if category badges -->
                        <h1 class="font-32 text-left font-bold">{{ article?.at(0)?.title.rendered }}</h1>
                        <!-- <p class="font-14 text-left">{{ article?.at(0)?.yoast_head_json.description }}</p> -->
                        <p class="font-14 text-left font-bold">{{ article?.at(0)?.date }}</p>
                        <div class="flex w-full items-center gap-[8px] rounded-xl bg-[#E0F2FF] p-[12px]">
                            <img src="/img/person.webp" alt="Image" />
                            <div class="flex flex-col">
                                <!-- <p class="font-14">{{ article?.at(0)?.yoast_head_json.author }}</p> -->
                                <p class="font-14">Author</p>
                                <p class="font-12 text-[10px] xl:text-[12px]">Copywriter</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <!-- <img
                        :src="article?.at(0)?.yoast_head_json.og_image[0].url"
                        class="mb-[24px] w-[560px] rounded-lg"
                        alt="Image"
                    /> -->
                    <div class="font-14 prose" v-html="article?.at(0)?.content.rendered"></div>
                    <div class="mt-[24px] flex w-full items-center gap-[8px] rounded-xl bg-[#E0F2FF] p-[12px]">
                        <img src="/img/person.webp" alt="Image" />
                        <div class="flex flex-col">
                            <!-- <p class="font-14">{{ article?.at(0)?.yoast_head_json.author }}</p> -->
                            <p class="font-14">Author</p>
                            <p class="font-12 text-[10px] xl:text-[12px]">Copywriter</p>
                        </div>
                    </div>
                </div>
                <!-- Right Column -->
                <div>
                    <!-- Artikel Serupa -->
                    <p class="font-20 mb-[24px] mt-[32px] font-bold xl:mt-0">Artikel Serupa</p>
                    <div class="grid gap-[16px]">
                        <NuxtLink
                            v-for="a in similar"
                            :key="a.id"
                            :to="`/blog/${a.slug}`"
                            class="flex flex-col overflow-hidden rounded-2xl border-2 border-c-orange bg-white transition hover:scale-105"
                        >
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
                                <h2 class="font-14 font-bold">{{ a.title.rendered }}</h2>
                            </div>
                        </NuxtLink>
                    </div>
                    <!-- Kategori -->
                    <p class="font-20 mb-[24px] mt-[32px] font-bold">Kategori</p>
                    <div class="grid gap-[16px]">
                        <BlogCategory />
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

// define interface
// interface Article {
//     id: number;
//     slug: string;
//     title: {
//         rendered: string;
//     };
//     content: {
//         rendered: string;
//     };
//     yoast_head_json: {
//         title: string;
//         description?: string;
//         og_image: [
//             {
//                 url: string;
//                 type: 'image/jpeg';
//             },
//         ];
//     };
// }

// fetch
const { slug } = useRoute().params;
const { data: article } = await useFetch(`https://ofon.co.id/blog/wp-json/wp/v2/posts?slug=${slug}`);
const { data: similar } = await useFetch(
    'https://ofon.co.id/blog/wp-json/wp/v2/posts?_fields=id,slug,author,title,date,categories&per_page=5&categories=6'
);

// error handling
if (article.value.length === 0) {
    throw createError({ statusCode: 404, statusMessage: 'Posts not found!' });
}

// seo meta
useSeoMeta({
    title: article.value?.at(0)?.title.rendered ?? 'Blog',
    description: article.value?.at(0)?.title.rendered ?? 'Blog',
});
</script>

<style>
.prose {
    max-width: 100%;
}
</style>
