import getNavigation from './ReactRouterGlobalNavigation';

export const getBaseApiUrl = () => import.meta.env.VITE_BASE_API_URL || './';

export const gotoPage = (path) => {
  getNavigation()(path);
};
