import type { PortfolioItem } from '~/types/portfolio';

interface PortfolioData {
  [locale: string]: {
    portfolio: PortfolioItem[];
    mainArtworks: PortfolioItem[];
  };
}

export const usePortfolioStore = defineStore('portfolio', () => {
  const { locale } = useI18n();

  const data = ref<PortfolioData>({});

  const portfolio = computed<PortfolioItem[]>(
    () => data.value[locale.value]?.portfolio ?? []
  );

  const mainArtworks = computed<PortfolioItem[]>(
    () => data.value[locale.value]?.mainArtworks ?? []
  );

  const fetchAllPortfolio = async () => {
    const portfolio = await queryContent<PortfolioItem>(
      locale.value,
      'portfolio'
    )
      .sort({ group: 1, $numeric: true })
      .find();

    data.value[locale.value] = {
      ...data.value[locale.value],
      portfolio,
    };
  };

  const fetchMainArtworks = async () => {
    const mainArtworks = await queryContent<PortfolioItem>(
      locale.value,
      'portfolio'
    )
      .where({ id: { $in: ['digital'] } })
      .sort({ group: 1, $numeric: true })
      .find();

    data.value[locale.value] = {
      ...data.value[locale.value],
      mainArtworks: mainArtworks.map((artwork) => ({
        ...artwork,
        images: artwork.images
          .filter((image) => 'important' in image)
          .sort((a, b) => {
            if ('important' in a && 'important' in b) {
              return (a.important || 0) - (b.important || 0);
            }

            return 0;
          }),
      })),
    };
  };

  return {
    data,
    portfolio,
    mainArtworks,
    fetchAllPortfolio,
    fetchMainArtworks,
  };
});
