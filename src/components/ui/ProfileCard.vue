<template>
  <div
    class="relative w-80 rounded-[24px] p-[1px] bg-gradient-to-br from-cyan-500/20 to-blue-500/10 shadow-[0_0_40px_rgba(14,165,233,0.3)]"
  >
    <!-- Inner Card -->
    <div class="bg-[#0f172a] rounded-[22px] overflow-hidden relative">
      <!-- Top Info -->
      <div class="text-center pt-6 px-4">
        <h2 class="text-2xl font-semibold text-white">{{ name }}</h2>
        <p class="text-sm text-slate-400">{{ title }}</p>
      </div>

      <!-- Large Avatar -->
      <div class="flex justify-center py-6 px-6">
        <img
          :src="avatarUrl"
          alt="avatar"
          class="w-60 h-70 rounded-2xl object-cover border border-cyan-400 shadow-md"
        />
      </div>

      <!-- Bottom Blur Info Bar -->
      <div
        class="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3 backdrop-blur-md bg-white/5 text-white"
      >
        <!-- Mini avatar + handle -->
        <div class="flex items-center gap-2">
          <img
            :src="avatarUrl"
            alt="avatar"
            class="w-9 h-9 rounded-full object-cover"
          />
          <div>
            <p class="text-sm font-semibold">@{{ handle }}</p>
            <p class="text-xs text-green-400">Online</p>
          </div>
        </div>

        <!-- Contact Button -->
        <button
          class="px-4 py-1.5 bg-white/10 hover:bg-white/20 text-sm rounded-md font-medium transition" href="contact"
        >
          <a href="#contact" class="inline-block">
            Contact Me
          </a>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  title: String,
  handle: String,
  avatarUrl: String
});
</script>
