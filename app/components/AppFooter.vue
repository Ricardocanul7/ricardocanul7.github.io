<script setup lang="ts">
const appConfig = useAppConfig();
const footer = appConfig.footer;
</script>

<template>
    <footer id="contacto" class="bg-slate-950 text-slate-300 py-6 mt-auto border-t border-slate-900 relative">
        <LayoutContainer>
            <div class="w-full flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
                <p>{{ $t('appFooter.copy') }}</p>
                <div class="flex gap-4">
                    <div v-for="(link, index) in footer.socialLinks" :key="index" class="social-links">
                        <a :href="link.link" class="font-inter text-xs font-semibold text-slate-300 hover:text-white hover:underline decoration-emerald-300 transition-colors" target="_blank" rel="noopener noreferrer">
                            {{link.name}}
                        </a>
                    </div>
                </div>
            </div>
        </LayoutContainer>
    </footer>
</template>