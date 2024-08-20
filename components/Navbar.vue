<script setup>
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
    <main>
        <section class="section fixed z-50 bg-[#F6F7F8] py-[8px] shadow-xl">
            <div class="div flex-row items-center justify-between">
                <div class="flex gap-[16px]">
                    <p class="font-14 font-semibold text-c-orange">Business</p>
                    <p class="font-14 font-semibold text-c-orange">Personal</p>
                </div>
                <div class="flex gap-[16px]">
                    <div class="flex items-center gap-[10px]">
                        <img class="rounded-full" src="/img/en.webp" alt="Image" />
                        <NuxtLink :to="switchLocalePath('en')" class="font-14 font-semibold text-c-orange">EN</NuxtLink>
                    </div>
                    <div class="flex items-center gap-[10px]">
                        <img class="rounded-full" src="/img/id.webp" alt="Image" />
                        <NuxtLink :to="switchLocalePath('id')" class="font-14 font-semibold text-c-orange">ID</NuxtLink>
                    </div>
                </div>
            </div>
        </section>
        <section class="section fixed top-[36px] z-50 bg-c-white py-[20px] shadow-xl xl:top-[40px]">
            <div class="div flex-row items-center justify-between">
                <NuxtLink :to="localePath('/')"><img src="/img/ofon.webp" alt="Image" /></NuxtLink>
                <div class="flex items-center gap-[16px]">
                    <div class="hidden gap-[16px] xl:flex">
                        <NuxtLink class="font-14 font-semibold" :to="localePath('pbx-maintenance')">PBX Maintenance</NuxtLink>
                        <NuxtLink class="font-14 font-semibold" :to="localePath('pbx-integration')">PBX Integration</NuxtLink>
                    </div>
                    <NuxtLink id="contact-us" to="contact-us" class="btn text-white">Contact Us</NuxtLink>
                </div>
            </div>
        </section>
        <div class="h-[115px] xl:h-[123px]"></div>
    </main>
</template>

<style scoped>
#contact-us {
    color: white;
    text-decoration: none;
}

.router-link-exact-active {
    color: #f25921;
    text-decoration: underline;
    font-weight: 600;
}
</style>
