export function usePersonSchema() {
  const person = {
    '@type': 'Person',
    name: 'Ricardo Canul',
    url: 'https://ricardocanul7.github.io',
    image: 'https://ricardocanul7.github.io/og-image.jpg',
    sameAs: [
      'https://github.com/ricardocanul7',
      'https://linkedin.com/in/ricardocanul7',
    ],
    jobTitle: 'Full-Stack Software Engineer',
    description: 'Full-Stack Software Engineer specializing in PHP, Python, and modern web development. Building robust and scalable digital ecosystems with 4+ years of experience.',
    knowsAbout: [
      'PHP', 'Python', 'Laravel', 'Django', 'Shopware', 'Pimcore',
      'Web Development', 'Full-Stack Development', 'API Design',
      'Docker', 'CI/CD', 'PostgreSQL', 'Redis',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Poland',
    },
  }

  return { person }
}
