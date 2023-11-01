import { FETCH_TODO, setTodo } from '../dux/todo';
import { API_SUCCESS, apiAction } from '../dux/api';
import { getBaseApiUrl } from '../helpers/generic';

const todoMiddleware = () => (next) => (action) => {
  next(action);
  switch (action.type) {
    case FETCH_TODO:
      next(
        apiAction({
          url: `${getBaseApiUrl()}/todos/${action.payload}`,
          feature: FETCH_TODO
        })
      );
      break;

    case `${FETCH_TODO} ${API_SUCCESS}`:
      next(setTodo(action.payload.title));
      break;

    default:
    // do nothing
  }
};

export default todoMiddleware;
