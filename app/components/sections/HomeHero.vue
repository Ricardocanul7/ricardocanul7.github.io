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
                        <Icon name="heroicons:arrow-right-20-solid" class="transform group-hover:translate-x-1 transition-transform"/>
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