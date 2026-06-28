<template>
    <section id="home-skills" class="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white py-16" aria-labelledby="home-skills-heading">
        <LayoutContainer>
            <div class="flex flex-col items-center justify-center text-center gap-4 mb-4">
                <h2 id="home-skills-heading" class="font-inter font-semibold text-xs text-sky-600 dark:text-sky-300 uppercase">
                    {{ $t('homeSkills.header') }}
                </h2>
                <h3 class="font-plus-jakarta-sans text-2xl font-bold text-slate-800 dark:text-indigo-100 mb-4">
                    {{ $t('homeSkills.title') }}
                </h3>
            </div>
            <ul class="grid grid-cols-1 md:grid-cols-4 gap-4 list-none p-0">
                <li class="contents">
                    <SkillCard 
                        class="md:col-span-2"
                        icon="vscode-icons:file-type-php" 
                        :title="$t('homeSkills.skills.phpDevelopment.title')"
                        :description="$t('homeSkills.skills.phpDevelopment.description') "
                        :tags="['Laravel', 'Symfony', 'Pimcore', 'Shopware']"
                        :expertise="$t('advanced')"
                    />
                </li>
                <li class="contents">
                    <SkillCard 
                        class="md:col-span-2"
                        icon="vscode-icons:file-type-python" 
                        :title="$t('homeSkills.skills.pythonDevelopment.title')"
                        :description="$t('homeSkills.skills.pythonDevelopment.description') "                    
                        :tags="['Django', 'FastAPI']"
                        :expertise="$t('intermediate')"
                    />
                </li>
                <li class="contents">
                    <SkillCard 
                        icon="material-symbols:database-outline" 
                        :title="$t('homeSkills.skills.databases.title')"
                        :description="$t('homeSkills.skills.databases.description')"
                        :tags="['MySQL', 'PostgreSQL', 'SQLite', 'Redis', 'Elasticsearch']"
                        :expertise="null"
                    />
                </li>
                <li class="contents">
                    <SkillCard 
                        icon="material-symbols:public" 
                        :title="$t('homeSkills.skills.webcore.title')"
                        :description="$t('homeSkills.skills.webcore.description')"
                        :tags="['HTML5', 'CSS3', 'JS', 'React', 'Vue 3', 'Nuxt']"
                        :expertise="null"
                    />
                </li>
                <li class="contents">
                    <SkillCard 
                        icon="material-symbols:fact-check-outline" 
                        :title="$t('homeSkills.skills.testing.title')"
                        :description="$t('homeSkills.skills.testing.description')"
                        :tags="['PHPUnit', 'Pytest', 'Cypress']"
                        :expertise="null"
                    />
                </li>
                <li class="contents">
                    <SkillCard 
                        icon="material-symbols:settings-applications-outline" 
                        :title="$t('homeSkills.skills.architecture.title')" 
                        :description="$t('homeSkills.skills.architecture.description')"
                        :tags="['RabbitMQ', 'Event-Driven', 'Docker', 'CI/CD', 'Ansible']"
                        :expertise="null"
                    />
                </li>
            </ul>
        </LayoutContainer>
    </section>
</template>
