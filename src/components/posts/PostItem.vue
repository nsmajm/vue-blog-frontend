<script lang="ts" setup>
interface PostProps {
  title?: string
  published_date?: string
  image_url?: string
  short_desc?: string
  slug?: string
  id?: number
}
defineProps<PostProps>()
</script>

<template lang="">
  <RouterLink :key="$route.fullPath" :to="{ name: 'post', params: { slug: slug } }" class="w-full space-y-2">
    <img class="w-full" :src="image_url" />
    <p class="text-[14px] pt-[14px]">{{ published_date }}</p>
    <h1 class="font-[700] text-[#141414] text-[24px] leading-[25.97px]">{{ title }}</h1>
    <p class="font-[400] text-[#505050] text-[15px] leading-[20px] line-clamp-3">
      {{ short_desc }}
    </p>
  </RouterLink>
</template>
