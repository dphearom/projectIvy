export type Partner = {
  id: string;
  name: string;
  href: string;
  telegramHref?: string;
  logoLight: string;
  logoDark?: string;
  /** Optional co-brand lockup for homepage spotlight */
  logoCobrand?: string;
};

export const PARTNERS: Partner[] = [
  {
    id: "quicknews",
    name: "quicknews",
    href: "https://www.quicknews.tech",
    telegramHref: "https://t.me/quicknewsappbot",
    logoLight: "/images/partners/quicknews-logo-black-transparent.png",
    logoDark: "/images/partners/quicknews-logo-white-transparent.png",
    logoCobrand: "/images/partners/quicknews-x-project-ivy-transparent.png",
  },
];
