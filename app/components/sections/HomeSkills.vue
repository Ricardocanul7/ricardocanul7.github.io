<template>
    <section class="bg-slate-900 text-white py-16">
        <LayoutContainer>
            <div class="flex flex-col items-center justify-center text-center gap-4 mb-4">
                <h2 class="font-inter font-semibold text-xs text-sky-300 uppercase">Technical arsenal</h2>
                <h3 class="font-plus-jakarta-sans text-2xl font-bold text-indigo-100 mb-4">Featured Skills & Technologies</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <!-- First Row: Half width each (2/4 columns) -->
                <SkillCard 
                    class="md:col-span-2"
                    icon="vscode-icons:file-type-php" 
                    title="PHP Development" 
                    description="Robust backend development focusing on modern ecosystems and enterprise solutions."
                    :tags="['Laravel', 'Symfony', 'Pimcore', 'Shopware']"
                    expertise="Advanced"
                />
                <SkillCard 
                    class="md:col-span-2"
                    icon="vscode-icons:file-type-python" 
                    title="Python Development" 
                    description="Versatile programming for web APIs, automation, and data processing."
                    :tags="['Django', 'FastAPI', 'Pandas']"
                    expertise="Intermediate"
                />

                <!-- Second Row: Quarter width each (1/4 columns) -->
                <SkillCard 
                    icon="material-symbols:database-outline" 
                    title="Databases" 
                    description="Relational and NoSQL management."
                    :tags="['MySQL', 'PostgreSQL', 'SQLite', 'Redis', 'Elasticsearch']"
                    :expertise="null"
                />
                <SkillCard 
                    icon="material-symbols:public" 
                    title="Web Core" 
                    description="Foundational web technologies."
                    :tags="['HTML5', 'CSS3', 'JS', 'React', 'Vue 3', 'Nuxt']"
                    :expertise="null"
                />
                <SkillCard 
                    icon="material-symbols:fact-check-outline" 
                    title="Testing" 
                    description="Quality assurance and automated tests."
                    :tags="['PHPUnit', 'Pytest', 'Cypress']"
                    :expertise="null"
                />
                <SkillCard 
                    icon="material-symbols:settings-applications-outline" 
                    title="Architecture" 
                    description="Distributed systems and infrastructure."
                    :tags="['RabbitMQ', 'Event-Driven', 'Docker', 'CI/CD', 'Ansible']"
                    :expertise="null"
                />
            </div>
        </LayoutContainer>
    </section>
</template>