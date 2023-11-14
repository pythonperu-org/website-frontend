<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <header
      class="grid grid-cols-1 md:grid-cols-4 md:place-content-center md:justify-self-end p-4 md:p-8 md:h-screen w-full max-w-[720px]">
      <div class="md:col-start-2 md:col-span-3">
        <img alt="Vue logo" class="block w-full mb-8 pyday-logo" src="@/assets/images/imagotipo_horizontal.svg" />

        <nav class="flex justify-center flex-wrap md:justify-start">
          <RouterLink class="px-4 py-2 block font-bold hover:text-pyyellow" to="/">Inicio</RouterLink>
          <RouterLink class="px-4 py-2 block font-bold hover:text-pyyellow" to="/venue">¿Dónde?</RouterLink>
          <RouterLink class="px-4 py-2 block font-bold hover:text-pyyellow" to="/speakers">Expositores</RouterLink>
          <!--
            <RouterLink class="px-4 py-2 block font-bold hover:text-pyyellow" to="/organizers">
            Organizadores
          </RouterLink>
        -->
        </nav>
      </div>
    </header>
    <main class="w-full h-screen overflow-auto">
      <RouterView />
    </main>
  </div>
</template>
