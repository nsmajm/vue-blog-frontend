<script setup lang="ts">
import { useRoute } from 'vue-router'

import PostList from '@/components/posts/PostList.vue'
import axios from 'axios'
import { useQuery } from '@tanstack/vue-query'

const route = useRoute()


const getPost = async () =>
  await axios.get(`http://localhost:8000/api/post/details/${route.params.slug}`)

const { data } = useQuery({
  queryKey: ['post', route.params.slug],
  queryFn: getPost
})
</script>

<template>
  <main class="container mx-auto p-5">
    <div class="mt-[32px]">
      <div class="md:px-16">
        <p>{{ data?.data?.published_date }}</p>
        <p class="font-[700] text-[32px] leading-[34.62px]">
          {{ data?.data?.title }}
        </p>
        <p class="mt-5">
          {{ data?.data?.short_desc }}
        </p>
      </div>
      <img class="py-[35px] w-full" :src="data?.data?.image_url" />
      <div class="md:px-16" v-html="data?.data?.body"></div>
    </div>
    <div class="mt-[51px]">
      <p class="text-center text-[16px] font-[700] leading-[20.11px]">Recent Posts</p>
      <PostList :postItems="data?.data?.related_post" />
    </div>
  </main>
</template>
