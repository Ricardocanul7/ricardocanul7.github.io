export default defineAppConfig({
  name: 'Portfolio',
  version: '0.1.0',
  description: 'A portfolio website built with Vue.js and Nuxt.js',
  projects: [
    {
      name: 'Project One',
      description: 'A description of project one.',
      link: 'https://github.com/username/project-one'
    },
    {
      name: 'Project Two',
      description: 'A description of project two.',
      link: 'https://github.com/username/project-two'
    }
  ],
  footer: {
    socialLinks: [
      {
        name: 'GitHub',
        link: 'https://github.com/ricardocanul7'
      },
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/ricardo-canul-584534142/'
      }
    ]
  }
})