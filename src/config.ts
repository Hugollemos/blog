import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://astro-paper.pages.dev/", // replace this with your deployed domain
  author: "DevOps de cria",
  profile: "https://satnaing.dev/",
  desc: "Apenas um blog, sobre minhas ideias.",
  title: "DevOps  de cria",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    url: "https://github.com/satnaing/astro-paper/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/Hugollemos",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/dev.opsdecria/",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hugo-lemos-da-silva/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "E-mail",
    href: "hugolemosdasilva.hu@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@devopscria",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@devops.de.cria?_t=8sMTTEMxtq9&_r=1",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  }
];
