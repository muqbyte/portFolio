<script setup>
import {ref} from 'vue';

const isMenuOpen=ref(false);


       function toggleMenu()
        {
            isMenuOpen.value=!isMenuOpen.value;
            
        }


</script>


<template>
    <nav>
      <div class="flex flex-row justify-between"> 
        <div id="divOne" class="flex-1">
          <a class="text-xl md:text-2xl font-bold" id="name">Abdul Muqtadir</a>
        </div>

        <div class="md:hidden">
            <button @click="toggleMenu"><Icon name="fluent-mdl2:collapse-menu" style="color: black; font-size: 30px;" /></button>
        </div>

        <div v-if=isMenuOpen class="fixed top-0 right-0 w-2/3 h-full bg-gray-100 shadow-lg flex flex-col p-6 transition-transform duration-300 ease-in-out">
            <button class="self-end text-2xl mb-4" @click="toggleMenu">
                <Icon name="fluent-mdl2:back" style="color: black; font-size: 30px;" />
            </button>
            <a class="text-2xl py-2 hover:border-b-2">About</a>
            <a class="text-2xl py-2 hover:border-b-2">Skills</a>
            <a class="text-2xl py-2 hover:border-b-2">Contact</a>
        </div>
  
        <div class="hidden md:flex md:flex-row justify-end gap-10 flex-1" id="divTwo">
          <a class="text-2xl hover:border-b-2 hover:border-black" >About</a>
          <a class="text-2xl hover:border-b-2 hover:border-black">Skills</a>
          <a class="text-2xl hover:border-b-2 hover:border-black">Projects</a>
        </div>
      </div>
    </nav>
  </template>
  
  <style scoped>
  #name{
    font-family:"Montserrat";
  }
  a{
    font-family: "Dosis";
    
  }
  </style>