<template>
    <section class="bg-slate-900 text-white relative">
        <div
            class="absolute top-1/2 left-1/10 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-400/10 rounded-full blur-[100px] pointer-events-none">
        </div>
        <LayoutContainer>
            <LayoutRow gap="12" class="gap-12 py-16">
                <LayoutColumn span="6" class="text-center lg:text-left">
                    <Badge class="mb-4 mx-auto lg:mx-0">
                        &lt;Software Engineer/&gt;
                    </Badge>

                    <h1 class="text-4xl font-bold mb-4 font-plus-jakarta-sans">
                        {{ $t('homeHero.title') }}
                    </h1>
                    <p class="text-lg text-slate-400 mb-6 font-inter">
                        {{ $t('homeHero.description') }}
                    </p>
                    <NuxtLink :to="localePath('/projects')"
                        class="inline-flex items-center gap-2 bg-violet-300 hover:bg-violet-300 text-indigo-800 font-medium text-sm px-6 py-3 rounded-xl transition-colors shadow-lg shadow-indigo-600/20 group w-fit mx-auto lg:mx-0">
                        {{ $t('homeHero.cta') }}
                        <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </NuxtLink>
                </LayoutColumn>
                <LayoutColumn span="6">
                    <WindowOS>
                        <CodePreview :code="heroCode" />
                    </WindowOS>
                </LayoutColumn>
            </LayoutRow>
        </LayoutContainer>
    </section>
</template>

<script setup lang="ts">
const heroCode = `
class Developer {
    public $stack = [
        'PHP' => 'Laravel/Symfony',
        'Python' => 'Django/FastAPI',
        'Javascript' => 'Vue/Nuxt'
    ];

    public function build($goal) {
        return $this->innovate($goal);
    }
}
`

const localePath = useLocalePath();

</script>