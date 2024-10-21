<template>
    <section class="section bg-c-white">
        <div class="div flex flex-col gap-[36px]">
            <div class="text-center">
                <h2 class="font-32 font-bold text-c-black">{{ $t('telephone_prefix') }}</h2>
            </div>
            <UCarousel
                v-slot="{ item }"
                :items="items"
                :ui="{ item: 'w-full basis-full md:basis-1/2 xl:basis-1/4 snap-start' }"
                arrows
            >
                <div
                    class="card-hover flex w-full flex-row items-start gap-[16px] rounded-2xl border-[2px] border-c-orange p-[16px] md:m-[12px]"
                >
                    <div class="flex items-start">
                        <img :src="item.image" class="w-fit" alt="Image" />
                    </div>
                    <div class="flex flex-col gap-[8px]">
                        <p class="font-16 font-bold">
                            {{ item.location }}
                        </p>
                        <p class="font-14">
                            {{ item.number }}
                        </p>
                    </div>
                </div>
            </UCarousel>
        </div>
    </section>
</template>

<script setup>
const items = [
    {
        location: 'Jakarta',
        number: '021-3970-xxxx',
        image: '/img/phone-jakarta.webp',
    },
    {
        location: 'Bogor',
        number: '0251-310-xxxx',
        image: '/img/phone-bogor.webp',
    },
    {
        location: 'Serang',
        number: '0254-320-xxxx',
        image: '/img/phone-serang.webp',
    },
    {
        location: 'Bandung',
        number: '022-3050-xxxx',
        image: '/img/phone-bandung.webp',
    },
    {
        location: 'Cirebon',
        number: '0231-300-xxxx',
        image: '/img/phone-cirebon.webp',
    },
    {
        location: 'Semarang',
        number: '024-3000-xxxx',
        image: '/img/phone-semarang.webp',
    },
    {
        location: 'Solo',
        number: '0271-340-xxxx',
        image: '/img/phone-solo.webp',
    },
    {
        location: 'Yogyakarta',
        number: '0274-605-xxxx',
        image: '/img/phone-yogyakarta.webp',
    },
    {
        location: 'Surabaya',
        number: '031-3000-xxxx',
        image: '/img/phone-surabaya.webp',
    },
    {
        location: 'Malang',
        number: '0341-270-xxxx',
        image: '/img/phone-malang.webp',
    },
    {
        location: 'Denpasar',
        number: '0361-620-xxxx',
        image: '/img/phone-denpasar.webp',
    },
    {
        location: 'Singaraja',
        number: '0362-200-xxxx',
        image: '/img/phone-singaraja.webp',
    },
    {
        location: 'Medan',
        number: '061-6200-xxxx',
        image: '/img/phone-medan.webp',
    },
    {
        location: 'Pekanbaru',
        number: '0761-600-xxxx',
        image: '/img/phone-pekanbaru.webp',
    },
    {
        location: 'Batam',
        number: '0778-810-xxxx',
        image: '/img/phone-batam.webp',
    },
    {
        location: 'Tj. Pinang',
        number: '0771-330-xxxx',
        image: '/img/phone-tj-pinang.webp',
    },
    {
        location: 'Palembang',
        number: '0711-620-xxxx',
        image: '/img/phone-palembang.webp',
    },
    {
        location: 'Lampung',
        number: '0721-200-xxxx',
        image: '/img/phone-lampung.webp',
    },
    {
        location: 'Pontianak',
        number: '0561-200-xxxx',
        image: '/img/phone-pontianak.webp',
    },
    {
        location: 'Balikpapan',
        number: '0542-320-xxxx',
        image: '/img/phone-balikpapan.webp',
    },
    {
        location: 'Praya',
        number: '0370-200-xxxx',
        image: '/img/phone-praya.webp',
    },
    {
        location: 'Manado',
        number: '0431-300-xxxx',
        image: '/img/phone-manado.webp',
    },
    {
        location: 'Makasar',
        number: '0411-300-xxxx',
        image: '/img/phone-makasar.webp',
    },
];
</script>
