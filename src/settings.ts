export const profile = {
  fullName: 'Rohitashva K. Singh',
  title: 'Dr.',
  institute: 'The University of Texas at Arlington, USA (2021–2025)',
  author_name: 'Rohitashva K. Singh', // Highlighted in papers section
  research_areas: [
    {
      title: 'Nano-reinforced cementitious composites',
      description:
        'CNT/CNF-modified binders and hybrid fiber systems to enhance tensile strength, toughness, and post-crack energy absorption.',
      field: 'materials',
    },
    {
      title: 'Low-embodied-carbon & CO₂-utilizing concretes',
      description:
        'SCMs (calcined clays, slag, fly ash), biochar, and mineralization strategies to reduce cement-related emissions.',
      field: 'sustainability',
    },
    {
      title: 'Concrete rheology & early-age behavior',
      description:
        'Tailoring fresh-state rheology for pumpability, workability, and advanced applications such as 3D printing.',
      field: 'rheology',
    },
    {
      title: 'ASR mitigation & durability',
      description:
        'Metakaolin–CNT blends and microstructural engineering to control expansion and preserve mechanical performance.',
      field: 'durability',
    },
  ],
};

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
  email: 'mailto:rohitashva.xlr8@gmail.com', // you can add later, e.g. 'mailto:rohitashvasingh@...'
  linkedin: 'https://www.linkedin.com/in/rohitashvasingh/',
  x: 'https://x.com/hitromarku', // set to '' to hide for now, or add his handle URL
  github: '',
  gitlab: '',
  scholar: 'https://scholar.google.com/citations?user=4YWjnXIAAAAJ&hl=en', // add Google Scholar URL when you have it
  inspire: '',
  arxiv: '',
  orcid: 'https://orcid.org/0009-0001-1583-9445',
};

export const template = {
  website_url: 'https://rohitashvasingh.com', // Deployed URL
  menu_left: false,
  transitions: true,
  lightTheme: 'corporate', // ✅ use our customized corporate theme
  darkTheme: 'dark',       // keep default dark
  excerptLength: 200,
  postPerPage: 5,
  base: '', // Repository name starting with / if deploying under a subpath
};

export const seo = {
  default_title: 'Dr. Rohitashva K. Singh',
  default_description:
    'Portfolio of Dr. Rohitashva K. Singh, materials and structural engineer specializing in nano-reinforced cementitious composites, sustainable concrete, and durability.',
  default_image: '/images/astro-academia.png', // update later with a custom OG image
};
