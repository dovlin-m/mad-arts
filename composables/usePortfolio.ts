export const usePortfolio = () => {
  const portfolioStore = usePortfolioStore();

  return computed(() => portfolioStore.portfolio);
};

export const useUpdatePortfolio = () => {
  const portfolioStore = usePortfolioStore();
  const { locale } = useI18n();

  return async () => {
    if (!portfolioStore.data[locale.value]?.length) {
      await portfolioStore.fetchPortfolio();
    }
  };
};
