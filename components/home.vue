<script setup>
import { Vue3Lottie } from 'vue3-lottie'
</script>

<template>
    <div class="md:grid grid-cols-2" >
      <div class="hidden md:block">
        <client-only>
            <Vue3Lottie
            animationLink="https://lottie.host/a7ef3ea4-5408-47d4-ab70-7aa82ab577c2/tEz24ptWCS.json"
            :height="300"
            :width="300"
            />
        </client-only>        
      </div>



        <div class="flex flex-col justify-center items-center gap-2">
          <div>
            <a class="text-sm">Hello, I'm</a>
          </div>

          <div>
            <a class="text-4xl font-semibold">Abdul Muqtadir</a>
          </div>

          <div>
            <a class="text-xl">Full Stack Developer</a>
          </div>

          <div>
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                 Download Resume
            </button>
            
          </div>
        </div>
    </div>
</template>

<style scoped>
  #name{
    font-family:"Montserrat";
  }
  a{
    font-family: "Dosis";
  }
  </style>