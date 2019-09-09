export default (ctx) => {
  if (process.server) {
    ctx.beforeNuxtRender(({ nuxtState }) => {
      const vars = ['API_BROWSER', 'API_SERVER'];
      nuxtState.env = Object.assign({}, ...vars.map((key) => ({ [key]: process.env[key] })));
    });
  } else {
    process.env = ctx.nuxtState.env;
  }
};
