interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'LinkScribe',
    description: `LinkScribe is a web application that utilizes natural language processing
    (NLP) and machine learning algorithms to classify and organize web links as bookmarks.`,
    imgSrc: '/static/images/linkscribe.png',
    href: 'https://linkscribe-alpha.vercel.app/',
  },
  {
    title: 'Gencipher',
    description: `Gencipher is a web application tool that uses a genetic algorithm to solve monoalphabetic substitution ciphers.`,
    imgSrc: '/static/images/gencipher/gencipher.png',
    href: 'https://gencipher.vercel.app/',
  },
  {
    title: 'Briefly',
    description: `AI-powered audio briefly transcriptions:
    Seamlessly transform spoken words into written insights with AI-enhanced audio transcriptions.`,
    imgSrc: '/static/images/briefly/briefly.png',
    href: '/blog/briefly-ai-powered-audio-briefly-transcriptions',
  },
  {
    title: 'TheMonetPost',
    description: `The cozy corner of the internet where you can explore the
    fascinating ties between the past and the present, all through the curious lens of a
    cat named Monet.`,
    imgSrc: '/static/images/the-monet-post.png',
    href: 'https://themonetpost.vercel.app/',
  },
]

export default projectsData
