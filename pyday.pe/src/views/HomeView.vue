<script setup>
import RegistrationButton from '../components/RegistrationButton.vue'
</script>

<template>
  <section
    class="grid grid-cols-1 md:grid-cols-4 md:place-content-center md:justify-self-start p-4 md:p-8 md:min-h-screen w-full max-w-[720px]">
    <div class="md:col-start-1 md:col-span-3">
      <h1 class="text-3xl font-bold text-pyblue mb-4">
        ¿Qué es el PyDay Perú?
      </h1>

      <p class="mb-4">
        PyDay Perú 2023, una celebración de todo lo relacionado con Python. Organizado por <a
          href="https://pythonperu.org" target="_blank" class="text-pyblue hover:text-pyyellow">Python Perú</a>, este
        evento gratuito es tu pasaporte a una tarde llena de ideas, innovaciones y camaradería dentro de la comunidad de
        Python.
      </p>

      <p class="mb-4">
        Acompáñanos en una exploración de diversos temas. <strong>PyDay Perú 2023</strong> no es solo un evento; es una
        oportunidad para sumergirte en el dinámico mundo de Python, conectando con entusiastas y profesionales afines.
      </p>

      <p class="mb-4">
        No te pierdas esta emocionante oportunidad de formar parte de la comunidad <a href="https://pythonperu.org"
          target="_blank" class="text-pyblue hover:text-pyyellow">Python Perú</a>. Marca tu calendario para
        el <strgon>25 de noviembre</strgon> y hagamos juntos de <strong>PyDay Perú 2023</strong> una experiencia
        inolvidable. Explora el código de conducta
        aquí: <a href="https://www.python.org/psf/conduct/" target="_blank" class="text-pyblue hover:text-pyyellow">Código
          de Conducta</a>.
      </p>

      <p class="mb-8">
        ¡Nos vemos en PyDay Perú 2023, donde la comunidad de Python Perú cobra vida!
      </p>

      <RegistrationButton />
    </div>
  </section>
</template>
