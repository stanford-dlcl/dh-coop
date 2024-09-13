module.exports = {
  meta: {
    title: "DH Co-Op",
    description: "Centering multilingual DH at Stanford",
    lang: "en",
    siteUrl: "https://dhcoop.stanford.edu/",
  },
  feed: { // used in feed.xml.njk
    subtitle: "Centering multilingual DH at Stanford",
    filename: "atom.xml",
    path: "/atom.xml",
    id: "https://dhcoop.stanford.edu/",
    authorName: "Quinn Dombrowski",
    authorEmail: "qad@stanford.edu"
  },
  hero: { // used in hero section of main page ie. index.html.njk
    title: "Digital Humanities Co-Op",
    description: "Centering multilingual DH at Stanford"
  }
}