export default async ({ res }) => {
  if (!process.server) return;
  res.setHeader('Cache-Control', 's-maxage=900, public, max-age=0');
};
