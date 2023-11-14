<script setup>
import RegistrationButton from '../components/RegistrationButton.vue'
</script>

<template>
  <section
    class="grid grid-cols-1 md:grid-cols-4 md:place-content-center md:justify-self-start p-4 md:p-8 md:min-h-screen w-full max-w-[720px]">
    <div class="md:col-start-1 md:col-span-3">
      <h1 class="text-3xl font-bold text-pyblue mb-4">
        ¡Lo que te espera en el PyDay Perú <span class="text-pyyellow">2023</span>!
      </h1>

      <div class="grid grid-col-1 divide-y divide-pygrey mb-8">
        <div class="flex flex-row">
          <div class="flex shrink px-2 py-4">
            <div class="w-24 flex items-center justify-center">
              <img src="/assets/images/speakers/python_peru.png" />
            </div>
          </div>
          <div class="grow p-2 flex flex-col justify-center">
            <p><strong>Presentación</strong></p>
            <p>Python Perú</p>
            <p>4:00 pm - 4:10 pm</p>
          </div>
        </div>

        <div class="flex flex-row">
          <div class="flex shrink px-2 py-4">
            <div class="w-24 flex items-center justify-center">
              <img src="/assets/images/speakers/gary_astroga.png" />
            </div>
          </div>
          <div class="grow p-2 flex flex-col justify-center">
            <p><strong>Recorriendo el Mundo del Análisis y Ciencia de Datos: Consejos y Experiencias</strong></p>
            <p>Gary Astorga</p>
            <p>4:10 pm - 4:40 pm</p>
          </div>
        </div>

        <div class="flex flex-row">
          <div class="flex shrink px-2 py-4">
            <div class="w-24 flex items-center justify-center">
              <img src="/assets/images/speakers/gerardo_vilcamiza.png" />
            </div>
          </div>
          <div class="grow p-2 flex flex-col justify-center">
            <p><strong>Avances de un Sistema Traductor de Lenguaje de Señas Usando Transformers y Visión
                Artificial</strong></p>
            <p>Gerardo Vilcamiza</p>
            <p>4:45 pm - 5:15 pm</p>
          </div>
        </div>

        <div class="flex flex-row">
          <div class="flex shrink px-2 py-4">
            <div class="w-24 flex items-center justify-center">
              <img src="/assets/images/speakers/enrique_suarez.png" />
            </div>
          </div>
          <div class="grow p-2 flex flex-col justify-center">
            <p><strong>Cómo crear un Dataset para Mantenimiento Predictivo usando TinyML</strong></p>
            <p>Enrique Suarez</p>
            <p>5:20 pm - 5:50 pm</p>
          </div>
        </div>

        <div class="flex flex-row">
          <div class="flex shrink px-2 py-4">
            <div class="h-24 w-24 bg-green-500 rounded-full flex items-center justify-center">
              <fa-icon icon="fa-solid fa-gift" class="h-10 text-white" />
            </div>
          </div>
          <div class="grow p-2 flex flex-col justify-center">
            <p><strong>¡Sorteo sorpesa!</strong></p>
            <p>Python Perú - CONAUTI</p>
            <p>5:50 pm - 6:10 pm</p>
          </div>
        </div>
      </div>

      <RegistrationButton />
    </div>
  </section>
</template>
