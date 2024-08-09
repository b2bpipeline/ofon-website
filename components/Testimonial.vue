<template>
    <section class="section bg-c-white">
        <div class="div flex flex-col gap-[34px]">
            <div class="text-center">
                <p class="font-14 mb-[8px] font-bold text-c-orange">TESTIMONIALS</p>
                <p class="font-32 font-bold text-c-black">Hear It Directly from Our Happy Clients</p>
            </div>
            <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'w-full basis-full' }">
                <div
                    class="card-hover flex w-full flex-col gap-[30px] rounded-2xl border-[2px] border-c-orange p-[24px] xl:m-[20px]"
                >
                    <div class="flex w-full items-start justify-between">
                        <img :src="item.avatar" class="w-[48px] xl:w-[72px]" alt="Image" />
                        <img src="/img/semicolon.webp" alt="Image" class="w-[36px] xl:w-[44px]" />
                    </div>
                    <div>
                        <p class="font-14">
                            {{ item.testimoinal }}
                        </p>
                    </div>
                    <div class="flex flex-col gap-[4px]">
                        <p class="font-16 font-bold">{{ item.name }}</p>
                        <p class="font-12">{{ item.companies }}</p>
                        <img src="/img/star.webp" alt="Image" class="w-fit" />
                    </div>
                </div>
            </UCarousel>
        </div>
    </section>
</template>

<script setup lang="ts">
const items = [
    {
        name: 'Armika Jaya',
        companies: 'IT Director of Potato Head Family',
        testimoinal:
            'Ofon service goes beyond expectations. Besides the ease of registration and installation, their after-sales support is very responsive. This clearly makes it the only alternative to conventional landlines that truly please its customers.',
        avatar: '/img/avatar1.webp',
    },
];
</script>
