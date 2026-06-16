<script setup lang="ts">
const { tm, rt } = useI18n()

interface WorkExpItem {
    dates: string;
    title: string;
    descriptionPoints: string[];
}

interface EduItem {
    institution: string;
    degree: string;
    dates: string;
}

interface CertItem {
    icon: string;
    title: string;
    institution: string;
    year: string;
}

const workExperience = computed<WorkExpItem[]>(() => {
    const list = tm('experiencePage.workExperienceList') as any[]
    return list.map(item => ({
        dates: rt(item.dates),
        title: rt(item.title),
        descriptionPoints: (item.descriptionPoints || []).map((p: any) => rt(p))
    }))
})

const education = computed<EduItem[]>(() => {
    const list = tm('experiencePage.educationList') as any[]
    return list.map(item => ({
        institution: rt(item.institution),
        degree: rt(item.degree),
        dates: rt(item.dates)
    }))
})

const certifications = computed<CertItem[]>(() => {
    const list = tm('experiencePage.certificationsList') as any[]
    return list.map(item => ({
        icon: rt(item.icon),
        title: rt(item.title),
        institution: rt(item.institution),
        year: rt(item.year)
    }))
})
</script>

<template>
    <div>
        <!-- Summary -->
        <section class="summary-section bg-slate-900 pt-16 pb-10 text-center md:text-left">
            <LayoutContainer>
                <LayoutRow>
                    <LayoutColumn span="8" class="flex flex-col justify-center">
                        <div class="content">
                            <h1 class="font-plus-jakarta-sans font-extrabold text-5xl text-violet-300 mb-5">
                                {{ $t('profesionalSummary') }}
                            </h1>
                            <p class="font-inter text-lg text-slate-300 mb-5">
                                {{ $t('experiencePage.summary.description') }}
                            </p>
                        </div>
                    </LayoutColumn>

                    <LayoutColumn span="4">
                        <div class="photo-container">
                            <NuxtPicture 
                                format="avif,webp" src="./images/profile.webp",
                                width="400"
                                height="400"
                                :imgAttrs="{
                                class: 'rounded-lg border-2 border-violet-300/20',
                            }" />
                        </div>
                    </LayoutColumn>
                </LayoutRow>
            </LayoutContainer>
        </section>

        <!-- Skills -->
        <SeparatorHeading text="Skills" />
        <section class="bg-slate-900 py-10">
            <LayoutContainer>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <SkillCard icon="material-symbols:terminal"
                        :title="$t('experiencePage.skills.backendDevelopment.title')"
                        :description="$t('experiencePage.skills.backendDevelopment.description')"
                        :tags="['PHP', 'Python', 'Laravel', 'Django']" :expertise=null />
                    <SkillCard icon="material-symbols:api" :title="$t('experiencePage.skills.apiDesign.title')"
                        :description="$t('experiencePage.skills.apiDesign.description')"
                        :tags="['FastAPI', 'OpenAPI', 'JWT', 'OAuth2']" , :expertise=null />
                    <SkillCard icon="material-symbols:database-outline"
                        :title="$t('experiencePage.skills.dataAndDevOps.title')"
                        :description="$t('experiencePage.skills.dataAndDevOps.description')"
                        :tags="['PostgreSQL', 'Docker', 'CI/CD', 'Redis']" , :expertise=null />
                </div>
            </LayoutContainer>
        </section>

        <!-- Work Experience-->
        <section class="bg-slate-900 pt-16 pb-10 text-center md:text-left">
            <LayoutContainer>
                <LayoutRow>
                    <LayoutColumn span="4">
                        <div class="content">
                            <h2 class="font-plus-jakarta-sans font-extrabold text-5xl text-violet-300 mb-4">
                                {{ $t('experiencePage.workExperience.title') }}
                            </h2>
                            <p class="font-inter text-base text-slate-300">
                                {{ $t('experiencePage.workExperience.description') }}
                            </p>
                        </div>
                    </LayoutColumn>
                    <LayoutColumn span="8">
                        <WorkExperience v-for="(experience, index) in workExperience" :key="index"
                            :dates="experience.dates" :title="experience.title"
                            :descriptionPoints="experience.descriptionPoints" />
                    </LayoutColumn>
                </LayoutRow>
            </LayoutContainer>
        </section>

        <div class="bg-slate-900">
            <LayoutContainer>
                <div class="grid grid-cols-1 lg:grid-cols-2 bg-slate-900">
                    <!-- Education -->
                    <section class="education-section">
                        <div class="education-header text-violet-300 flex items-center gap-3 px-4 md:px-10">
                            <Icon name="material-symbols:school-outline" />
                            <h2 class="font-plus-jakarta-sans font-bold text-2xl">
                                {{ $t('experiencePage.education') }}
                            </h2>
                        </div>
                        <div class="bg-slate-900 py-10 px-4 md:px-10">
                            <div v-for="(edu, index) in education" :key="index"
                                class="mb-8 bg-slate-800/50 p-6 rounded-xl shadow-lg border border-slate-700/50">
                                <p class="text-slate-100 font-inter text-base font-bold">{{ edu.degree }}</p>
                                <h3 class="text-slate-400 font-inter text-base mt-1">
                                    {{ edu.institution }}
                                </h3>
                                <span class="text-emerald-300 font-mono text-sm">{{ edu.dates }}</span>
                            </div>
                        </div>
                    </section>

                    <!-- Certifications -->
                    <section class="certifications-section">
                        <div class="certifications-header text-violet-300 flex items-center gap-3 px-4 md:px-10">
                            <Icon name="material-symbols:verified-outline" />
                            <h2 class="font-plus-jakarta-sans font-bold text-2xl">
                                {{ $t('experiencePage.certifications') }}
                            </h2>
                        </div>
                        <div class="bg-slate-900 py-10 px-4 md:px-10">
                            <div v-for="(cert, index) in certifications" :key="index"
                                class="mb-8 bg-slate-800/50 p-6 rounded-xl shadow-lg border border-slate-700/50 flex items-center gap-5">
                                <div class="icon-container text-violet-300 text-4xl">
                                    <Icon :name="cert.icon" />
                                </div>
                                <div>
                                    <h3 class="text-slate-100 font-plus-jakarta-sans font-bold text-base mt-1">
                                        {{ cert.title }}
                                    </h3>
                                    <p class="text-slate-400 font-inter italic">{{ cert.institution }} • {{ cert.year }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </LayoutContainer>
        </div>
    </div>
</template>