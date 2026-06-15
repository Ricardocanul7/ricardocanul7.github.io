<template>
    <div class="code-preview overflow-x-auto">
        <pre class="text-sm leading-relaxed whitespace-pre"><code class="font-liberation-mono" v-html="highlightedCode"></code></pre>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    code: string
}>()

const highlightedCode = computed(() => {
    // Scape HTML
    let highlighted = props.code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .trim();

    const tokenRegex = /(["'])(?:(?=(\\?))\2.)*?\1|\b(class|public|private|protected|function|return|new|static|extends|implements|use|namespace|const|var|let|if|else|foreach|as)\b|(\$[a-zA-Z_][a-zA-Z0-9_]*)|(-&gt;[a-zA-Z_][a-zA-Z0-9_]*)|([-=]&gt;|=)|\b([A-Z][a-zA-Z0-9_]*)\b/g;

    highlighted = highlighted.replace(tokenRegex, (match, stringQuote, ...args) => {
        const keyword = args[1];
        const variable = args[2];
        const methodCall = args[3];
        const operator = args[4];
        const className = args[5];

        if (stringQuote) {
            return `<span class="text-indigo-400">${match}</span>`;
        }

        if (keyword) {
            return `<span class="text-sky-300">${match}</span>`;
        }

        if (variable) {
            return `<span class="text-white">${match}</span>`;
        }

        if (methodCall) {
            const op = match.substring(0, 5); // "-&gt;"
            const name = match.substring(5);
            return `<span class="text-emerald-400">${op}</span><span class="text-emerald-400">${name}</span>`;
        }

        if (operator) {
            return `<span class="text-emerald-400">${match}</span>`;
        }
        
        if (className) {
            return `<span class="text-indigo-100">${match}</span>`;
        }

        return match;
    });

    return highlighted;
})
</script>