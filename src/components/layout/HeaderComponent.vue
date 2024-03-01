<script setup lang="ts"></script>
<template>
  <div class="h-[59px] md:h-[83px] flex items-center justify-between container mx-auto p-5">
    <router-link :to="{ name: 'home'}">
      <img alt="learning center" class="w-[140px] md:w-[207px]" src="@/assets/images/logo.svg" />
    </router-link>
    <ul class="flex gap-6 text-[12px] md:text-[16px] md:font-[500] font-[600] text-[#090909]">
      <li>
        <router-link :to="{ name: 'home'}">HOME</router-link>
      </li>
      <li> <router-link :to="{ name: 'about'}">ABOUT ME</router-link></li>
    </ul>
  </div>
</template>
