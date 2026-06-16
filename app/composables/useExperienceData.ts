export default function useExperienceData() {
  const { tm, rt } = useI18n()

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

  return {
    workExperience,
    education,
    certifications
  }
}