<script setup lang="ts">
const appConfig = useAppConfig();
const footer = appConfig.footer;
</script>

<template>
    <footer id="contacto" class="bg-slate-950 text-slate-500 py-12 mt-auto border-t border-slate-900 relative">
        <div class="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
            <div class="border-t border-slate-900 w-full mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-4">
                <p>{{ $t('appFooter.copy') }}</p>
                <div class="flex gap-4">
                    <div v-for="(link, index) in footer.socialLinks" :key="index" class="social-links">
                        <a :href="link.link" class="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                            {{link.name}}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>