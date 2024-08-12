<template>
    <main>
        <!-- Description -->
        <section class="section pb-[32px]">
            <div class="div flex-col gap-[16px]">
                <h1 class="font-36 font-bold">Categories</h1>
                <p class="font-20 font-bold text-c-orange">Blog Workfrom</p>
            </div>
        </section>

        <!-- Content -->
        <section class="section pt-[32px]">
            <div class="div flex-col xl:grid xl:grid-cols-1 xl:gap-[32px]">
                <div>
                    <!-- Kategori -->
                    <div class="grid gap-[16px]">
                        <NuxtLink
                            to="/category/cloud-direct-routing"
                            class="flex flex-col overflow-hidden rounded-2xl border-2 border-c-orange bg-white p-[16px] transition hover:scale-105"
                        >
                            <h2 class="font-14 font-bold">Cloud Direct Routing</h2>
                        </NuxtLink>
                        <NuxtLink
                            to="/category/cloud-pbx"
                            class="flex flex-col overflow-hidden rounded-2xl border-2 border-c-orange bg-white p-[16px] transition hover:scale-105"
                        >
                            <h2 class="font-14 font-bold">Cloud PBX</h2>
                        </NuxtLink>
                        <NuxtLink
                            to="/category/conference"
                            class="flex flex-col overflow-hidden rounded-2xl border-2 border-c-orange bg-white p-[16px] transition hover:scale-105"
                        >
                            <h2 class="font-14 font-bold">Conference</h2>
                        </NuxtLink>
                        <NuxtLink
                            to="/category/proxy"
                            class="flex flex-col overflow-hidden rounded-2xl border-2 border-c-orange bg-white p-[16px] transition hover:scale-105"
                        >
                            <h2 class="font-14 font-bold">Proxy</h2>
                        </NuxtLink>
                        <NuxtLink
                            to="/category/smartpbx"
                            class="flex flex-col overflow-hidden rounded-2xl border-2 border-c-orange bg-white p-[16px] transition hover:scale-105"
                        >
                            <h2 class="font-14 font-bold">SmartPBX</h2>
                        </NuxtLink>
                        <NuxtLink
                            to="/category/web-call"
                            class="flex flex-col overflow-hidden rounded-2xl border-2 border-c-orange bg-white p-[16px] transition hover:scale-105"
                        >
                            <h2 class="font-14 font-bold">Web Call</h2>
                        </NuxtLink>
                        <NuxtLink
                            to="/category/whitepaper"
                            class="flex flex-col overflow-hidden rounded-2xl border-2 border-c-orange bg-white p-[16px] transition hover:scale-105"
                        >
                            <h2 class="font-14 font-bold">Whitepaper</h2>
                        </NuxtLink>
                        <NuxtLink
                            to="/category/tak-berkategori"
                            class="flex flex-col overflow-hidden rounded-2xl border-2 border-c-orange bg-white p-[16px] transition hover:scale-105"
                        >
                            <h2 class="font-14 font-bold">Tak Berkategori</h2>
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
// seo meta
useSeoMeta({
    title: 'Category',
    description: `Category`,
});
</script>
