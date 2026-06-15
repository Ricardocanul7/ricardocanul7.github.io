<script setup lang="ts">
const workExperience = [
    {
        dates: `${ $t('calendar.october') } 2025 - ${ $t('calendar.march') } 2026`,
        title: "Full Stack Software Engineer - Kiwee Software",
        descriptionPoints: [
            "Develop custom Shopware plugins.",
            "Automated deployment pipelines by architecting CI/CD workflows with Github Actions, Ansible and Docker.",
            "Made Improvements to the Storefront theme for Shopware 6",
            "Perform major migration from Shopware 6.6 to 6.7, refactoring legacy codebases to ensure 100% compatibility",
            "Led performance audit and execution seeing massive improvements in LCP (33.7%) and INP(74.5%)."
        ]
    },
    {
        dates: `${ $t('calendar.december') } 2023 - ${ $t('calendar.october') } 2025`,
        title: "Full Stack PHP Developer - Affenbits",
        descriptionPoints: [
            "Developed and maintained websites using a proprietary CMS",
            "Translated Figma designs into responsive frontend pages.",
            "Implemented Docker to streamline team workflows, significantly automating local development and deployment processes."
        ]
    },
    {
        dates: `${ $t('calendar.september') } 2021 - ${ $t('calendar.august') } 2023`,
        title: "PHP Developer - Divante (Cloudflight)",
        descriptionPoints: [
            "Developed and maintained a Pimcore-based project for major shipment company.",
            "Developed backend for an e-commerce platform that automated product bundling improving user experience and sales efficiency.",
            "Developed KPI tool for internal team statistics using APIs from Gitlab, Jira, and Testrails.",
            "Led Project migration to the latests BoltCMS version, updating business logic and migrating the database structure."
        ]
    }
];

const education = [
    {
        institution: "Universidad Tecnológica Metropolitana de Mérida",
        degree: $t('experiencePage.itassociate'),
        dates: `${ $t('calendar.september') } 2018 - ${ $t('calendar.august') } 2020`
    }
]

const certifications = [
    {
        icon: "simple-icons:pimcore",
        title: "Pimcore Developer Senior",
        institution: "Pimcore",
        year: "2023"
    },
]
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
                            <NuxtPicture format="avif,webp" src="./images/profile.webp" :imgAttrs="{
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
                                {{ $t('experiencePage.workExperience.description')  }}
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