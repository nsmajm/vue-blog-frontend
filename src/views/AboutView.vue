<script setup lang="ts">
import PostList from '@/components/posts/PostList.vue'
import {http} from '@/utils/api.ts'
import { useQuery } from '@tanstack/vue-query'
import { useRoute } from 'vue-router'
const route = useRoute()
const getPost = async () =>
  await http.get(`post/details/recent_post`)

const { data } = useQuery({
  queryKey: ['post'],
  queryFn: getPost
})
</script>
<template>
  <div class="container mx-auto">
    <div class="p-5 mt-[27px] block md:w-11/12 md:flex justify-between gap-8 items-center">
      <img src="@/assets/images/author.png" />

      <div class="">
        <p class="text-[34px] md:text-[35px] font-[700] leading-[36px] text-[#151515]">
          Hi there! My name is Roku and welcome to my learning journal.
        </p>
        <p class="text-[#151515] text-[16px] font-[400] mt-[16px]">
          After several months of learning in the Frontend Developer Career Path, I've made the big
          jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet
          like-minded peers.
        </p>
      </div>
    </div>
    <div class="md:w-4/5 mx-auto md:mt-10 md:p-0 p-7">
      <p>
        <strong>How I stay committed to learning</strong><br /><br />I like to think of myself as a
        lifelong learner. I used to spend hours and hours learning, then try to create simple
        projects using what I learned or work new techniques into existing projects.<br /><br />While
        that was fun, I felt like it would be helpful to share what I was learning and most things
        about my journey with the world.<br /><br /><strong>How I got started</strong><br /><br />I
        started simple and gradually grew my learning journal site. I would take notes about what I
        was learning. After each learning session, I'd use my notes to not only reflect on what I
        learned but also write short summaries of what I learned using my own words.<br /><br />That
        helped me grok what I was learning, and I realized that posting my learning summaries was
        also helping others learn and stay motivated.
      </p>
    </div>
    <div class="mt-[51px]">
      <p class="text-center text-[16px] font-[700] leading-[20.11px]">Recent Posts</p>
      <PostList :postItems="data?.data" />
    </div>
  </div>
</template>
