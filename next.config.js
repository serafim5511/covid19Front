module.exports = {
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' }
    };
    return paths; //<--this was missing previously
  },
  reactStrictMode: true,
  i18n: {
    locales: ['pt-BR'],
    defaultLocale: 'pt-BR',
      }
}
