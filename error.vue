<template>
    <main>
        <!-- Navbar -->
        <NavbarHide />

        <!-- Error -->
        <section class="section">
            <div class="div flex flex-col items-center gap-[40px] xl:flex-row xl:gap-[80px]">
                <div class="flex flex-col items-start gap-[16px] xl:gap-[24px]">
                    <p class="font-36 font-bold text-c-black xl:font-semibold">Ups! Di Luar Jangkauan :(</p>
                    <p class="font-16 font-medium">
                        Halaman ini berada di luar jangkauan. Tapi jangan khawatir, kami akan mengarahkan Anda kembali.
                    </p>
                    <div class="grid w-full grid-cols-1 gap-[16px]">
                        <a href="/" class="btn w-full" @click="handleClearError">Kembali ke Beranda</a>
                    </div>
                </div>
                <img src="/img/error.webp" alt="Image" />
            </div>
        </section>

        <!-- Footer -->
        <FooterHide />
    </main>
</template>

<script setup>
defineProps(['error']);

const handleClearError = () => clearError();
</script>
