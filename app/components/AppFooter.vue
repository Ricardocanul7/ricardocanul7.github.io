<script setup>
const appConfig = useAppConfig();
const footer = appConfig.footer;
</script>


<template>
    <footer id="contacto" class="bg-slate-950 text-slate-500 py-12 mt-auto border-t border-slate-900 relative">
        <div class="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
            <!-- <h2 class="text-2xl font-bold text-white mb-2">¿Hablamos sobre tu próximo proyecto?</h2>
            <p class="text-sm text-slate-400 mb-6 max-w-md">
                Estoy siempre en busca de colaborar con equipos innovadores y enfrentar nuevos desafíos técnicos.
            </p>
            <a href="mailto:hola@tudominio.com" class="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm px-6 py-3 rounded-xl transition-colors shadow-lg shadow-indigo-600/20 group">
                Contáctame por correo
                <IconMail class="w-4 h-4 transform group-hover:scale-110 transition-transform" />
            </a> -->
            
            <div class="border-t border-slate-900 w-full mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-4">
                <p>© 2026 MiPortafolio. Todos los derechos reservados.</p>
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