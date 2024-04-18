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
    description: `Gencipher is a Web application for decoding cryptograms using genetic
    algorithms.`,
    imgSrc: '/static/images/gencipher.png',
    href: 'https://gencipher.vercel.app/',
  },
  {
    title: 'TheMonetPost',
    description: `The Monet Post, the cozy corner of the internet where we explore the
    fascinating ties between the past and the present, all through the curious lens of a
    cat named Monet.`,
    imgSrc: '/static/images/the-monet-post.png',
    href: 'https://themonetpost.vercel.app/',
  },
]

export default projectsData
