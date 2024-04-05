export const usePortfolio = () => {
  const portfolioStore = usePortfolioStore();

  return computed(() => portfolioStore.portfolio);
};

export const useMainArtworks = () => {
  const portfolioStore = usePortfolioStore();

  return computed(() => portfolioStore.mainArtworks);
};

export const useUpdatePortfolio = () => {
  const portfolioStore = usePortfolioStore();
  const { locale } = useI18n();

  return async () => {
    if (!portfolioStore.data[locale.value]?.portfolio?.length) {
      await portfolioStore.fetchAllPortfolio();
    }
  };
};

export const useUpdateMainArtworks = () => {
  const portfolioStore = usePortfolioStore();
  const { locale } = useI18n();

  return async () => {
    if (!portfolioStore.data[locale.value]?.mainArtworks?.length) {
      await portfolioStore.fetchMainArtworks();
    }
  };
};
