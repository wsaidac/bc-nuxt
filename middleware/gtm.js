export default function ({ app }) {
  if (process.client) app.$page();
}
