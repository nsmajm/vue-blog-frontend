<script setup lang="ts">
import axios from 'axios'
import { useQuery } from '@tanstack/vue-query'
import { ref, watchEffect } from 'vue'
const getPost = async () => await axios.get(`http://localhost:8000/api/featured`)

const { data } = useQuery({
  queryKey: ['post'],
  queryFn: getPost
})
const isMobile = ref(window.innerWidth < 768)

watchEffect(() => {
  // Update isMobile when window is resized
  const handleResize = () => {
    isMobile.value = window.innerWidth < 768
  }

  // Add event listener on component mount
  window.addEventListener('resize', handleResize)

  // Remove event listener on component unmount to avoid memory leaks
  return () => {
    window.removeEventListener('resize', handleResize)
  }
})
</script>
<template lang="">
  <div
    :style="{
      backgroundImage: `url('${isMobile ? data?.data?.image_url : data?.data?.large_image}')`
    }"
    class="w-screen bg-[length:100%] scale-[200px] object-fill bg-bottom bg-no-repeat from-[rgba(0,0,0,0.31)] to-[rgba(0,0,0,0.31)] text-white"
  >
    <div class="container mx-auto md:pt-[400px] md:pb-[80px] pt-[87px] pb-[25px] p-5">
      <div class="md:max-w-[600px] space-y-3">
        <p class="text-[12px] font-[400]">{{ data?.data?.published_date }}</p>
        <h3 class="text-[32px] font-[700] leading-[34.34px]">
          {{ data?.data?.title }}
        </h3>
        <p class="text-[15px] font-[400] leading-[20.20px]">
          {{ data?.data?.short_desc }}
        </p>
      </div>
    </div>
  </div>
</template>
