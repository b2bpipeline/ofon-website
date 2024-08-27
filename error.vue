<template>
    <main>
        <!-- Navbar -->
        <Navbar />

        <!-- Error -->
        <section class="section py-[300px]">
            <div class="div">
                <div class="mx-auto flex flex-col items-center gap-[8px]">
                    <h1 class="font-36 font-bold text-c-orange xl:text-[120px]">{{ error.statusCode }} Error</h1>
                    <p class="font-16 font-semibold">{{ error.statusMessage }}</p>
                    <a class="btn mt-[16px]" href="/" @click="handleClearError">Back to Home</a>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <Footer />
    </main>
</template>

<script setup>
defineProps(['error']);

const handleClearError = () => clearError();
</script>
