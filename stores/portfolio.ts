import type { PortfolioItem } from '~/types/portfolio';

interface PortfolioData {
  [locale: string]: PortfolioItem[];
}

export const usePortfolioStore = defineStore('portfolio', () => {
  const { locale } = useI18n();

  const data = ref<PortfolioData>({});

  const portfolio = computed<PortfolioItem[]>(() => data.value[locale.value]);

  const fetchPortfolio = async () => {
    data.value[locale.value] = await queryContent<PortfolioItem>(locale.value, 'portfolio')
      .sort({ group: 1, $numeric: true })
      .find();
  };

  return { data, portfolio, fetchPortfolio };
});
