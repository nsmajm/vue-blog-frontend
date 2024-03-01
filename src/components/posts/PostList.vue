<script setup lang="ts">
import PostItem from './PostItem.vue'

interface IPost {
  title: string
  published_date: string
  image_url: string
  short_desc: string
  slug: string
  id: number
}
const posts = defineProps<{
  postItems: IPost[]
}>()
</script>

<template>
  <div class="container mx-auto p-5 my-[53px]">
    <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-12">
      <PostItem
        v-for="(post, index) in posts?.postItems"
        :key="index"
        :id="post.id"
        :short_desc="post.short_desc"
        :title="post.title"
        :slug="post?.slug"
        :published_date="post.published_date"
        :image_url="post.image_url"
      />
    </div>
  </div>
</template>
./IPost
