export default defineEventHandler((event) => {
  const imagesDirectory = `/images/projects/`

  const projects: Project[] = [
    {
      title: {
        en: "Family tree generator",
        es: "Generador de árbol genealógico",
        pl: "Generator drzewa genealogicznego"
      },
      description: {
        en: "Family tree generator web with admin panel to register all family members",
        es: "Aplicación web generadora de árboles genealógicos con panel de administración para registrar todos los miembros de la familia",
        pl: "Aplikacja web do generowania drzew genealogicznych z panelem administracyjnym do rejestrowania wszystkich członków rodziny"
      },
      image: `${imagesDirectory}family-tree-project.webp`,
      link: "https://github.com/Ricardocanul7/family-tree-generator",
      tags: ['PHP', 'Laravel', 'Filament', 'Tailwindcss', 'JavaScript', 'CSS', 'Docker', 'MySQL']
    },
    {
      title: {
        en: "BC Studio",
        es: "BC Studio",
        pl: "BC Studio"
      },
      description: {
        en: "Real estate Website",
        es: "Sitio web inmobiliario",
        pl: "Strona internetowa nieruchomości"
      },
      image: `${imagesDirectory}bc-studio.png`,
      link: "https://bcstudio.com.mx/",
      tags: ['PHP', 'HTML', 'SCSS', 'JavaScript', 'CakePHP']
    },
    {
      title: {
        en: "GOmart",
        es: "GOmart",
        pl: "GOmart"
      },
      description: {
        en: "Store catalog",
        es: "Catálogo de tienda",
        pl: "Katalog sklepu"
      },
      image: `${imagesDirectory}gomart.png`,
      link: "https://gomart.com.mx/",
      tags: ['PHP', 'HTML', 'SCSS', 'JavaScript', 'CakePHP']
    },
    {
      title: {
        en: "Torneo de Golf",
        es: "Torneo de Golf",
        pl: "Turniej Golfowy"
      },
      description: {
        en: "Website for golf tournament",
        es: "Sitio web para torneo de golf",
        pl: "Strona internetowa turnieju golfowego"
      },
      image: `${imagesDirectory}torneo-de-golf-2025.png`,
      link: "https://torneogolfccq.com/",
      tags: ['PHP', 'HTML', 'SCSS', 'JavaScript', 'CakePHP']
    },
    {
      title: {
        en: "Nenis Club",
        es: "Nenis Club",
        pl: "Nenis Club"
      },
      description: {
        en: "Website for a company that helps women entrepreneurs",
        es: "Sitio web para una empresa que ayuda a mujeres emprendedoras",
        pl: "Strona internetowa dla firmy wspierającej kobiety przedsiębiorcze"
      },
      image: `${imagesDirectory}nenisclub.png`,
      link: "https://nenisclub.mx/",
      tags: ['HubSpot', 'HTML', 'SCSS', 'JavaScript']
    },
    {
      title: {
        en: "Inmobiliaria110",
        es: "Inmobiliaria110",
        pl: "Inmobiliaria110"
      },
      description: {
        en: "Real estate Website",
        es: "Sitio web inmobiliario",
        pl: "Strona internetowa nieruchomości"
      },
      image: `${imagesDirectory}inmobiliaria110.png`,
      link: "https://inmobiliaria110.com/",
      tags: ['PHP', 'HTML', 'SCSS', 'JavaScript', 'CakePHP']
    },
    {
      title: {
        en: "Sistemico",
        es: "Sistemico",
        pl: "Sistemico"
      },
      description: {
        en: "SaaS website for a company that helps organizing documents",
        es: "Sitio web SaaS para una empresa que ayuda a organizar documentos",
        pl: "Strona SaaS dla firmy pomagającej w organizacji dokumentów"
      },
      image: `${imagesDirectory}sistemico.png`,
      link: "https://sistemico.mx/",
      tags: ['PHP', 'HTML', 'SCSS', 'JavaScript', 'CakePHP']
    },
    {
      title: {
        en: "ASSO Desarrollos",
        es: "ASSO Desarrollos",
        pl: "ASSO Desarrollos"
      },
      description: {
        en: "Real estate website",
        es: "Sitio web inmobiliario",
        pl: "Strona internetowa nieruchomości"
      },
      image: `${imagesDirectory}asso-desarrollos.png`,
      link: "https://assodesarrollo.com/",
      tags: ['PHP', 'HTML', 'SCSS', 'JavaScript', 'Vue 2', 'CakePHP']
    },
    {
      title: {
        en: "Electromax",
        es: "Electromax",
        pl: "Electromax"
      },
      description: {
        en: "Landing page for electronics store",
        es: "Página de aterrizaje para tienda de electrónica",
        pl: "Strona landing dla sklepu elektronicznego"
      },
      image: `${imagesDirectory}electromax.png`,
      link: "https://electromax.com.mx/",
      tags: ['PHP', 'HTML', 'SCSS', 'JavaScript', 'CakePHP']
    },
    {
      title: {
        en: "Landing - Triventto",
        es: "Landing - Triventto",
        pl: "Landing - Triventto"
      },
      description: {
        en: "Real estate landing",
        es: "Página de aterrizaje inmobiliaria",
        pl: "Strona landing nieruchomości"
      },
      image: `${imagesDirectory}triventto-2.png`,
      link: "https://triventto.mx",
      tags: ['PHP', 'HTML', 'SCSS', 'JavaScript', 'CakePHP']
    },
    {
      title: {
        en: "Landing - Caminata",
        es: "Landing - Caminata",
        pl: "Landing - Caminata"
      },
      description: {
        en: "Real estate landing",
        es: "Página de aterrizaje inmobiliaria",
        pl: "Strona landing nieruchomości"
      },
      image: `${imagesDirectory}caminata.png`,
      link: "https://caminata.c-urbano.com",
      tags: ['PHP', 'HTML', 'SCSS', 'JavaScript', 'CakePHP']
    },
    {
      title: {
        en: "Delivery Store - Cuantica Pizza",
        es: "Tienda de entregas - Cuantica Pizza",
        pl: "Sklep dostawczy - Cuantica Pizza"
      },
      description: {
        en: "Food online store",
        es: "Tienda de comida en línea",
        pl: "Internetowy sklep spożywczy"
      },
      image: `${imagesDirectory}cuanticapizza.png`,
      link: "https://cuanticapizza.com",
      tags: ['PHP', 'HTML', 'SCSS', 'JavaScript', 'CakePHP']
    },
    {
      title: {
        en: "Primus",
        es: "Primus",
        pl: "Primus"
      },
      description: {
        en: "Real estate website with admin panel",
        es: "Sitio web inmobiliario con panel de administración",
        pl: "Strona internetowa nieruchomości z panelem administracyjnym"
      },
      image: `${imagesDirectory}primus.png`,
      link: "https://primusrealtygroup.com/",
      tags: ['PHP', 'HTML', 'SCSS', 'JavaScript', 'CakePHP']
    },
    {
      title: {
        en: "Decomarmol",
        es: "Decomarmol",
        pl: "Decomarmol"
      },
      description: {
        en: "Materials website with admin panel",
        es: "Sitio web de materiales con panel de administración",
        pl: "Strona internetowa materiałów z panelem administracyjnym"
      },
      image: `${imagesDirectory}decomarmol.png`,
      link: "https://decomarmol.com.mx/",
      tags: ['PHP', 'HTML', 'SCSS', 'JavaScript', 'CakePHP']
    },
    {
      title: {
        en: "Terrakaan",
        es: "Terrakaan",
        pl: "Terrakaan"
      },
      description: {
        en: "Real estate website",
        es: "Sitio web inmobiliario",
        pl: "Strona internetowa nieruchomości"
      },
      image: `${imagesDirectory}terrakaan.png`,
      link: "https://terrakaan.org/",
      tags: ['PHP', 'HTML', 'SCSS', 'JavaScript', 'CakePHP']
    },
    {
      title: {
        en: "Enigma project",
        es: "Proyecto Enigma",
        pl: "Projekt Enigma"
      },
      description: {
        en: "CLI application to encrypt and decrypt texts",
        es: "Aplicación de línea de comandos para encriptar y desencriptar textos",
        pl: "Aplikacja CLI do szyfrowania i deszyfrowania tekstów"
      },
      image: `${imagesDirectory}enigma-project.png`,
      link: "https://github.com/Ricardocanul7/enigma-project",
      tags: ['C', 'Makefile']
    }
  ]

  return { projects }
})
