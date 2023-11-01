import axios from 'axios';
import { API_REQUEST, apiError, apiSuccess } from '../../dux/api';

const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (!action.type.includes(API_REQUEST)) return;

    const { url, method, data, headers, feature, meta, responseType } =
      action.payload;

    const dataOrParams = ['GET'].includes(method) ? 'params' : 'data';

    // axios default configs
    axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_API_URL || '';

    axios
      .request({
        url,
        method,
        headers: { ...headers, 'Content-Type': 'application/json' },
        responseType,
        [dataOrParams]: data
      })
      .then(({ data }) => {
        dispatch(
          apiSuccess({
            response: data,
            feature,
            meta
          })
        );
      })
      .catch((error) => {
        if (error.response && error.response.status === 403) {
          // redirect to login page
        } else {
          dispatch(
            apiError({
              error,
              response: error.response,
              feature,
              meta
            })
          );
        }
      });
  };

export default apiMiddleware;
