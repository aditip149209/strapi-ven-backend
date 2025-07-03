export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: '*', // or your frontend URL for production
      headers: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    },
  },
  // Custom middleware for static file CORS
  async (ctx, next) => {
    await next();
    if (ctx.path.startsWith('/uploads/')) {
      ctx.set('Access-Control-Allow-Origin', '*'); // or your frontend URL
      ctx.set('Access-Control-Allow-Methods', 'GET,HEAD,PUT,POST,DELETE,OPTIONS');
      ctx.set('Access-Control-Allow-Headers', '*');
    }
  },
  'strapi::security',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
