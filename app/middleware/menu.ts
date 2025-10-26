export default defineNuxtRouteMiddleware((to) => {
  if (import.meta.server) return;

  const getRouteBaseName = useRouteBaseName();

  // Проверяем условия для редиректа
  if (['index'].includes(getRouteBaseName(to) as string) && !to.query?.menu) {
    return navigateTo({
      path: to.path,
      query: {
        menu: 'about',
      },
    });
  }
});
