<script setup lang="ts">
const { t } = useI18n()
const { workExperience, education, certifications } = useExperienceData()

usePageSeo({
  title: t('appHeader.experience'),
  description: t('experiencePage.summary.description'),
  path: '/experience',
  keywords: 'Ricardo Canul, Experience, Full-Stack Developer, Software Engineer, PHP, Python, Laravel, Django, Shopware, Pimcore, Work History, Education, Certifications',
})

const { person } = usePersonSchema()

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        mainEntity: {
          ...person,
          hasOccupation: {
            '@type': 'Occupation',
            name: 'Full-Stack Software Engineer',
            occupationLocation: {
              '@type': 'Country',
              name: 'Poland',
            },
          },
          alumniOf: [
            {
              '@type': 'EducationalOrganization',
              name: 'Universidad Tecnológica Metropolitana de Mérida',
            },
          ],
        },
      }),
    },
  ],
})
</script>

<template>
  <div>
    <section class="summary-section bg-slate-100 dark:bg-slate-900 pt-16 pb-10 text-center lg:text-left">
      <LayoutContainer>
        <LayoutRow>
          <LayoutColumn span="8" class="flex flex-col justify-center">
            <div class="content">
              <h1 class="font-plus-jakarta-sans font-extrabold text-5xl text-slate-800 dark:text-indigo-100 mb-5">
                {{ $t('profesionalSummary') }}
              </h1>
              <p class="font-inter text-lg text-slate-600 dark:text-slate-300 mb-5">
                {{ $t('experiencePage.summary.description') }}
              </p>
            </div>
          </LayoutColumn>
          <LayoutColumn span="4">
            <div class="photo-container mx-auto">
              <NuxtPicture
                format="avif,webp"
                src="./images/profile.webp"
                width="396"
                height="396"
                :alt="$t('homeAbout.profilePhotoAlt')"
                sizes="(max-width: 768px) 640px, 396px"
                :img-attrs="{
                  class: 'rounded-lg border-2 border-sky-300/20',
                  fetchpriority: 'high',
                }"
              />
            </div>
          </LayoutColumn>
        </LayoutRow>
      </LayoutContainer>
    </section>
  
    <SeparatorHeading text="Skills" id="skills-heading" />
    <section id="skills" class="bg-slate-100 dark:bg-slate-900 py-10" aria-labelledby="skills-heading">
      <LayoutContainer>
        <ul class="grid grid-cols-1 md:grid-cols-3 gap-6 list-none p-0">
          <li class="contents">
            <SkillCard
              icon="material-symbols:terminal"
              :title="$t('experiencePage.skills.backendDevelopment.title')"
              :description="$t('experiencePage.skills.backendDevelopment.description')"
              :tags="['PHP', 'Python', 'Laravel', 'Django']"
              :expertise="null"
            />
          </li>
          <li class="contents">
            <SkillCard
              icon="material-symbols:api"
              :title="$t('experiencePage.skills.apiDesign.title')"
              :description="$t('experiencePage.skills.apiDesign.description')"
              :tags="['FastAPI', 'OpenAPI', 'JWT', 'OAuth2']"
              :expertise="null"
            />
          </li>
          <li class="contents">
            <SkillCard
              icon="material-symbols:database-outline"
              :title="$t('experiencePage.skills.dataAndDevOps.title')"
              :description="$t('experiencePage.skills.dataAndDevOps.description')"
              :tags="['PostgreSQL', 'Docker', 'CI/CD', 'Redis']"
              :expertise="null"
            />
          </li>
        </ul>
      </LayoutContainer>
    </section>
  
    <section id="work-experience" class="bg-slate-100 dark:bg-slate-900 pt-16 pb-10 text-center lg:text-left" aria-labelledby="work-experience-heading">
      <LayoutContainer>
        <LayoutRow>
          <LayoutColumn span="4">
            <div class="content">
              <h2 id="work-experience-heading" class="font-plus-jakarta-sans font-extrabold text-5xl text-slate-800 dark:text-indigo-100 mb-4">
                {{ $t('experiencePage.workExperience.title') }}
              </h2>
              <p class="font-inter text-base text-slate-600 dark:text-slate-300">
                {{ $t('experiencePage.workExperience.description') }}
              </p>
            </div>
          </LayoutColumn>
          <LayoutColumn span="8">
            <ol class="list-none p-0">
              <li v-for="(experience, index) in workExperience" :key="index" class="contents">
                <WorkExperience
                  :dates="experience.dates"
                  :title="experience.title"
                  :description-points="experience.descriptionPoints"
                />
              </li>
            </ol>
          </LayoutColumn>
        </LayoutRow>
      </LayoutContainer>
    </section>
  
    <div class="bg-slate-100 dark:bg-slate-900">
      <LayoutContainer>
        <div class="grid grid-cols-1 lg:grid-cols-2 bg-slate-100 dark:bg-slate-900">
          <section id="education" class="education-section" aria-labelledby="education-heading">
              <SectionHeading icon="material-symbols:school-outline" :title="$t('experiencePage.education')" id="education-heading" />
            <div class="bg-slate-100 dark:bg-slate-900 py-10 px-4 md:px-10">
              <ul class="list-none p-0">
                <li v-for="(edu, index) in education" :key="index" class="contents">
                  <EducationCard
                    :degree="edu.degree"
                    :institution="edu.institution"
                    :dates="edu.dates"
                  />
                </li>
              </ul>
            </div>
          </section>
  
          <section id="certifications" class="certifications-section" aria-labelledby="certifications-heading">
              <SectionHeading icon="material-symbols:verified-outline" :title="$t('experiencePage.certifications')" id="certifications-heading" />
            <div class="bg-slate-100 dark:bg-slate-900 py-10 px-4 md:px-10">
              <ul class="list-none p-0">
                <li v-for="(cert, index) in certifications" :key="index" class="contents">
                  <CertificationCard
                    :icon="cert.icon"
                    :title="cert.title"
                    :institution="cert.institution"
                    :year="cert.year"
                  />
                </li>
              </ul>
            </div>
          </section>
        </div>
      </LayoutContainer>
    </div>
  </div>
</template>
