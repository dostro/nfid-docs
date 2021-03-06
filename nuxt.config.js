import theme from "@nuxt/content-theme-docs";

export default theme({
  docs: {
    primaryColor: "#0e8aff",
  },
  loading: { color: "#9487ff" },
  i18n: {
    locales: () => [
      {
        code: "en",
        iso: "en-US",
        file: "en-US.js",
        name: "English",
      },
    ],
    defaultLocale: "en",
  },
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-226981067-1'
    }]
  ],
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'The complete guide to NFID: the easy to implement, decentralized one-touch MFA and authorization platform.'
      },
      { hid: 'og:title', property: 'og:title', content: 'Add one-touch MFA to your apps today' },
      { hid: 'og:desc', property: 'og:description', content: 'The complete guide to NFID: the easy to implement, decentralized one-touch MFA and authorization platform.' },
      { hid: 'og:image', property: 'og:image',
        content: 'https://docs.nfid.one/nfid_og.jpg'
      },
      { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
      { hid: 'og:image:height', property: 'og:image:height', content: '627' },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: 'Add one-touch MFA to your apps today',
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: 'The complete guide to NFID: the easy to implement, decentralized one-touch MFA and authorization platform.',
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: '/nfid_og.jpg',
      },
    ],
  },
});
