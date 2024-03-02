<script setup lang="ts">
import HeroPost from '@/components/posts/HeroPost.vue'
import PostList from '@/components/posts/PostList.vue'
import {http} from '@/utils/api.ts'
import { useQuery } from '@tanstack/vue-query'

const getAllPost = async () => await http.get('posts')

const { data: posts } = useQuery({
  queryKey: ['todos'],
  queryFn: getAllPost
})
</script>

<template>
  <main>
    <HeroPost />
    <PostList :postItems="posts?.data" />
    <p class="cursor-pointer text-center text-[14px] font-[700] leading-[15px]  pb-[51px]">
      View More
    </p>
  </main>
</template>
