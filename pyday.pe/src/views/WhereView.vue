<script setup>
import RegistrationButton from '../components/RegistrationButton.vue'
</script>

<template>
  <section
    class="grid grid-cols-1 md:grid-cols-4 md:place-content-center md:justify-self-start p-4 md:p-8 md:min-h-screen w-full max-w-[720px]">
    <div class="md:col-start-1 md:col-span-3">
      <h1 class="text-3xl font-bold text-pyblue mb-4">
        Ven al PyDay Perú 2023
      </h1>

      <p class="mb-4">
        Sumérgete en el dinámico mundo de Python, conectando con entusiastas y profesionales afines.
      </p>

      <div class="grid grid-col-1 divide-y-1 divide-pygrey mb-8">
        <div class="flex flex-row">
          <div class="flex shrink px-2 py-4">
            <div class="h-12 w-12 p-2 bg-red-500 rounded-full flex items-center justify-center">
              <fa-icon icon="fa-solid fa-location-dot" class="h-8 text-white" />
            </div>
          </div>
          <div class="grow px-2 py-4">
            <p><strong>UPC Campus Monterico</strong></p>
            <p>Aula Magna No. 1</p>
            <p>Prolongación Primavera 2390, Monterrico, Santiago de Surco</p>
          </div>
        </div>

        <div class="flex flex-row">
          <div class="flex shrink px-2 py-4">
            <div class="h-12 w-12 p-2 bg-pyyellow rounded-full flex items-center justify-center">
              <fa-icon icon="fa-solid fa-calendar" class="h-6 text-white" />
            </div>
          </div>
          <div class="grow px-2 py-4">
            <p><strong>Sábado 25 novimebre de 2023</strong></p>
            <p>4:00 pm - 6:10 pm</p>
          </div>
        </div>

        <div class="flex flex-row">
          <div class="flex shrink px-2 py-4">
            <div class="h-12 w-12 p-2 bg-green-500 rounded-full flex items-center justify-center">
              <fa-icon icon="fa-solid fa-gift" class="h-6 text-white" />
            </div>
          </div>
          <div class="grow px-2 py-4">
            <p><strong>¡Sorteo sorpesa!</strong></p>
            <p>5:50 pm.</p>
          </div>
        </div>
      </div>

      <RegistrationButton />
    </div>
  </section>
</template>
