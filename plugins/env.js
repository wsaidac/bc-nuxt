export default (ctx) => {
  if (ctx.isServer) {
    ctx.beforeNuxtRender(({ nuxtState }) => {
      const vars = ['API_BROWSER', 'API_SERVER', 'GTM_DEBUG', 'GTM_ID', 'CMS_COUNTRY'];
      nuxtState.env = Object.assign(
        {},
        ...vars.map(key => ({
          [key]: process.env[key],
        })),
      );
    });
  } else {
    process.env = ctx.nuxtState.env;
  }
};
