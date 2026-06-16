export default defineEventHandler((event) => {
  const imagesDirectory = `/images/projects/`

  const projects: Project[] = [
    {
      title: "BC Studio",
      description: "Real state Website",
      image: `${imagesDirectory}bc-studio.png`,
      link: "https://bcstudio.com.mx/",
      tags: ['PHP', 'HTML', 'SCSS', 'JavaScript', 'CakePHP']
    },
    {
      title: "GOmart",
      description: "Store catalog",
      image: `${imagesDirectory}gomart.png`,
      link: "https://gomart.com.mx/",
      tags: ['PHP', 'HTML', 'SCSS', 'JavaScript', 'CakePHP']
    },
    {
      title: "Torneo de Golf",
      description: "Website for golf tournament",
      image: `${imagesDirectory}torneo-de-golf-2025.png`,
      link: "https://torneogolfccq.com/",
      tags: ['PHP', 'HTML', 'SCSS', 'JavaScript', 'CakePHP']
    },
    {
      title: "Nenis Club",
      description: "Website for a company that helps women entrepreneurs",
      image: `${imagesDirectory}nenisclub.png`,
      link: "https://nenisclub.mx/",
      tags: ['HubSpot', 'HTML', 'SCSS', 'JavaScript']
    },
    {
      title: "Inmobiliaria110",
      description: "Real state Website",
      image: `${imagesDirectory}inmobiliaria110.png`,
      link: "https://inmobiliaria110.com/",
      tags: ['PHP', 'HTML', 'SCSS', 'JavaScript', 'CakePHP']
    },
    {
      title: "Sistemico",
      description: "SaaS website for a company that helps organizing documents",
      image: `${imagesDirectory}sistemico.png`,
      link: "https://sistemico.mx/",
      tags: ['PHP', 'HTML', 'SCSS', 'JavaScript', 'CakePHP']
    },
    {
      title: "ASSO Desarrollos",
      description: "Real state website",
      image: `${imagesDirectory}asso-desarrollos.png`,
      link: "https://assodesarrollo.com/",
      tags: ['PHP', 'HTML', 'SCSS', 'JavaScript', 'Vue 2', 'CakePHP']
    },
    {
      title: "Electromax",
      description: "Landing page for electronics store",
      image: `${imagesDirectory}electromax.png`,
      link: "https://electromax.com.mx/",
      tags: ['PHP', 'HTML', 'SCSS', 'JavaScript', 'CakePHP']
    },
    {
      title: "Landing - Triventto",
      description: "Real estate landing",
      image: `${imagesDirectory}triventto-2.png`,
      link: "https://triventto.mx",
      tags: ['PHP', 'HTML', 'SCSS', 'JavaScript', 'CakePHP']
    },
    {
      title: "Landing - Caminata",
      description: "Real estate landing",
      image: `${imagesDirectory}caminata.png`,
      link: "https://caminata.c-urbano.com",
      tags: ['PHP', 'HTML', 'SCSS', 'JavaScript', 'CakePHP']
    },
    {
      title: "Delivery Store - Cuantica Pizza",
      description: "Food online store",
      image: `${imagesDirectory}cuanticapizza.png`,
      link: "https://cuanticapizza.com",
      tags: ['PHP', 'HTML', 'SCSS', 'JavaScript', 'CakePHP']
    },
    {
      title: "Primus",
      description: "Real estate website with admin panel",
      image: `${imagesDirectory}primus.png`,
      link: "https://primusrealtygroup.com/",
      tags: ['PHP', 'HTML', 'SCSS', 'JavaScript', 'CakePHP']
    },
    {
      title: "Decomarmol",
      description: "Materials website with admin panel",
      image: `${imagesDirectory}decomarmol.png`,
      link: "https://decomarmol.com.mx/",
      tags: ['PHP', 'HTML', 'SCSS', 'JavaScript', 'CakePHP']
    },
    {
      title: "Terrakaan",
      description: "Real state website",
      image: `${imagesDirectory}terrakaan.png`,
      link: "https://terrakaan.org/",
      tags: ['PHP', 'HTML', 'SCSS', 'JavaScript', 'CakePHP']
    }
  ]

  return { projects }
})
