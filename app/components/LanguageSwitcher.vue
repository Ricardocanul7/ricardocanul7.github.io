<script setup>
const { locale, locales, setLocale } = useI18n();

const onLocaleChange = (event) => {
  setLocale(event.target.value);
};
</script>

<template>
    <div class="language-switcher">
        <select 
            :value="locale" 
            @change="onLocaleChange"
            class="bg-transparent text-slate-400 text-xs font-medium border border-slate-800 hover:border-slate-700 rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all cursor-pointer appearance-none"
        >
            <option v-for="loc in locales" :key="loc.code" :value="loc.code" class="bg-slate-900 text-white">
                {{ loc.name.toUpperCase() }}
            </option>
        </select>
    </div>
</template>