import getNavigation from './ReactRouterGlobalNavigation';

export const getBaseApiUrl = () => process.env.REACT_APP_BASE_API_URL || './';

export const gotoPage = (path) => {
  getNavigation()(path);
};
