<template>
  <div class="group relative flex flex-col items-center justify-center gap-2 text-center flex-shrink-0">
    <div 
      class="flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-800/80 
             p-4 transition-all duration-300 
             group-hover:scale-110 group-hover:bg-slate-800"
    >
      <img
        :src="src"
        :alt="alt"
        class="h-full w-full object-contain transition-all duration-300 
               filter grayscale group-hover:grayscale-0"
      />
    </div>
    
    <p 
      class="absolute -bottom-7 text-sm font-medium text-slate-300 opacity-0 
             transition-all duration-300 group-hover:opacity-100"
    >
      {{ alt }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true },
});
</script>