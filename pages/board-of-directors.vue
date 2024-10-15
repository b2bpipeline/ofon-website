<template>
    <main>
        <!-- Hero -->
        <section class="section">
            <div class="div flex flex-col gap-[24px]">
                <h1 class="font-36 text-center font-bold">Meet Our Board of Directors</h1>
                <p class="font-16 text-center">
                    Meet the executives and visionaries behind Ofon's success and journey in providing the leading business
                    telecommunications solutions in Indonesia.
                </p>
            </div>
        </section>

        <!-- BOD 1 -->
        <section class="section">
            <div class="div flex flex-col items-start justify-start gap-[16px] xl:flex-row xl:gap-[64px]">
                <img src="/img/leaders1.webp" alt="Image" class="xl:w-[340px]" />
                <div class="flex flex-col gap-[16px]">
                    <h2 class="font-32 font-bold">Pratama Habibie</h2>
                    <p class="font-16 font-bold">President Director</p>
                    <p class="font-14">
                        Currently, Pratama Habibie serves as the President Director of PT Batam Bintan Telekomunikasi. He has a
                        background in Industrial Engineering with a particular interest in Quality Management Systems (QMS). Since
                        2002, he has been involved in the Batam Bintan project, playing a role in Master Planning, Estate
                        Management, Destination Marketing, and Property Investor Relations. In 2017, Pratama began leading the
                        business development of PT Batam Bintan Telekomunikasi, which initially operated as a local service
                        provider and later grew into a national-scale telecommunications operator. To date, PT Batam Bintan
                        Telekomunikasi operates in 20 cities/regencies, with products and services that have evolved from
                        fixed-line telephone services to internet, broadband, Metro-E, co-location, Software as a Service, and IT
                        System Integrator Managed Services.
                    </p>
                </div>
            </div>
        </section>

        <!-- BOD 2 -->
        <section class="section">
            <div class="div flex flex-col items-start justify-start gap-[16px] xl:flex-row xl:gap-[64px]">
                <img src="/img/leaders2.webp" alt="Image" class="xl:w-[340px]" />
                <div class="flex flex-col gap-[16px]">
                    <h2 class="font-32 font-bold">Robby Susilo</h2>
                    <p class="font-16 font-bold">Chief Finance & HR Officer</p>
                    <p class="font-14">
                        Robby Susilo currently serves as the Chief Finance & HR Officer (CFHRO) at PT Batam Bintan Telekomunikasi.
                        He holds an educational background in Electrical Engineering from Trisakti University and a Master of
                        Business Administration (MBA) from Birmingham University, with a particular interest in Corporate Finance.
                        His career began at PT Bank Mandiri (Persero) Tbk. in Corporate Banking (2004-2012), followed by a similar
                        role at PT Bank Danamon Indonesia Tbk. (2012-2014). He then served as Chief Finance Officer at SYAH
                        Establishment Group (2014-2019). Since 2020, Robby has been with PT Batam Bintan Telekomunikasi as CFHRO.
                        During his tenure, he successfully led the merger and acquisition process between PT Persada Nusantara
                        Telekomunikasi and PT Batam Bintan Telekomunikasi.
                    </p>
                </div>
            </div>
        </section>

        <!-- BOD 3 -->
        <section class="section">
            <div class="div flex flex-col items-start justify-start gap-[16px] xl:flex-row xl:gap-[64px]">
                <img src="/img/leaders3.webp" alt="Image" class="xl:w-[340px]" />
                <div class="flex flex-col gap-[16px]">
                    <h2 class="font-32 font-bold">Timbul Nainggolan</h2>
                    <p class="font-16 font-bold">Chief Operational & Regulatory Officer</p>
                    <p class="font-14">
                        Timbul Nainggolan is the Chief Operation & Regulatory Officer at PT Batam Bintan Telekomunikasi. Born in
                        Belitang on July 9, 1975, he holds a Bachelor's degree in Electrical Engineering and has been passionate
                        about telecommunications since high school. He joined PT Batam Bintan Telekomunikasi in September 2000 as
                        a Network Transmission Engineer, and his career progressed as he led the finance, marketing, and human
                        resources divisions in 2012. In 2017, he became General Manager, and in 2023, he was appointed Chief
                        Operation & Regulatory Officer.
                        <br />
                        Timbul Nainggolan plays a vital role in managing and fulfilling the licensing requirements for PT Batam
                        Bintan Telekomunikasi, which operates as a Fixed Local Network Provider, Internet Service Provider, Closed
                        Network Provider, and Public Internet Service Provider (ITKP) across 20 cities and regencies. PT Batam
                        Bintan Telekomunikasi remains committed to innovation, supporting national development, and contributing
                        to global progress.
                        <br />
                        "Ora et Labora" — work while praying.
                    </p>
                </div>
            </div>
        </section>

        <!-- BOD 4 -->
        <section class="section">
            <div class="div flex flex-col items-start justify-start gap-[16px] xl:flex-row xl:gap-[64px]">
                <img src="/img/leaders4.webp" alt="Image" class="xl:w-[340px]" />
                <div class="flex flex-col gap-[16px]">
                    <h2 class="font-32 font-bold">Cynthia Roosdiono</h2>
                    <p class="font-16 font-bold">Chief Technology Officer</p>
                    <p class="font-14">
                        Cynthia Roosdiono is the Chief of Technology at PT Batam Bintan Telekomunikasi. She has an educational
                        background in Computer Systems Engineering from Boston University. Cynthia began her career as a Software
                        Developer at the startup Virtual Strategy in Boston. She later completed the Information Management
                        Leadership Program at General Electric and continued her career as an IT Project Manager and IT Controller
                        at GE Money in Indonesia, Thailand, and Singapore. She then founded her own IT consultancy company
                        specializing in Software Testing and IT Support Outsourcing.
                        <br />
                        During her time at PT Batam Bintan Telekomunikasi, Cynthia has led the technology team in internal
                        digitalization processes and the development of IP-based telephony systems, positioning PT Batam Bintan
                        Telekomunikasi as a technology leader in the telecommunications industry.
                    </p>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
// initiate dynamic meta snippets
// const { t } = useI18n();
// const title = ref(t('about_us_title'));
// const description = ref(t('about_us_description'));

// seo
useSeoMeta({
    title: 'Meet Our Board of Directors',
    description: `Meet the executives and visionaries behind Ofon's success and journey in providing the leading business telecommunications solutions in Indonesia.`,
});

// page routing
defineI18nRoute({
    paths: {
        en: '/board-of-directors/',
        id: '/board-of-directors/',
    },
});
</script>
