<template>
  <div class="code-preview overflow-x-auto h-64">
    <pre class="text-sm leading-relaxed whitespace-pre"><code class="font-liberation-mono language-php" v-html="highlightedCode"></code></pre>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  code: string
  speed?: number
}>()

const displayedText = ref('')
let timer: ReturnType<typeof setInterval> | null = null

const startTypingEffect = () => {
  if (timer) clearInterval(timer)
  
  displayedText.value = ''
  let currentIndex = 0
  
  const fullText = (props.code || '').trim()
  const intervalSpeed = props.speed ?? 30

  timer = setInterval(() => {
    if (currentIndex < fullText.length) {
      displayedText.value += fullText[currentIndex]
      currentIndex++
    } else {
      if (timer) clearInterval(timer)
    }
  }, intervalSpeed)
}

onMounted(() => {
  startTypingEffect()
  watch(() => props.code, () => {
    startTypingEffect()
  })
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

const highlightedCode = computed(() => {
  let highlighted = displayedText.value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const tokenRegex = /(["'])(?:(?=(\\?))\2.)*?\1|\b(class|public|private|protected|function|return|new|static|extends|implements|use|namespace|const|var|let|if|else|foreach|as)\b|(\$[a-zA-Z_][a-zA-Z0-9_]*)|(-&gt;[a-zA-Z_][a-zA-Z0-9_]*)|([-=]&gt;|=)|\b([A-Z][a-zA-Z0-9_]*)\b/g;

  highlighted = highlighted.replace(tokenRegex, (match, stringQuote, ...args) => {
    const keyword = args[1];
    const variable = args[2];
    const methodCall = args[3];
    const operator = args[4];
    const className = args[5];

    if (stringQuote) return `<span class="text-indigo-400 dark:text-indigo-400 text-indigo-600">${match}</span>`;
    if (keyword) return `<span class="text-sky-300 dark:text-sky-300 text-sky-600">${match}</span>`;
    if (variable) return `<span class="text-slate-800 dark:text-white">${match}</span>`;
    
    if (methodCall) {
      const op = match.substring(0, 5);
      const name = match.substring(5);
      return `<span class="text-emerald-400 dark:text-emerald-400 text-emerald-600">${op}</span><span class="text-emerald-400 dark:text-emerald-400 text-emerald-600">${name}</span>`;
    }

    if (operator) return `<span class="text-emerald-400 dark:text-emerald-400 text-emerald-600">${match}</span>`;
    if (className) return `<span class="text-slate-800 dark:text-indigo-100">${match}</span>`;

    return match;
  });

  return highlighted;
})
</script>
