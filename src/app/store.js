import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../dux/counter';
import todoReducer from '../dux/todo';
import apiMiddleware from '../middleware/core/api';
import todoMiddleware from '../middleware/todo';

export default configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer
  },
  middleware: [todoMiddleware, apiMiddleware]
});
