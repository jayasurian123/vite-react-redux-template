const prefix = 'todo';
export const FETCH_TODO = `${prefix}/fetchTodo`;
export const SET_TODO = `${prefix}/setTodo`;

export const fetchTodo = (id) => ({
  type: FETCH_TODO,
  payload: id
});

export const setTodo = (data) => ({
  type: SET_TODO,
  payload: data
});

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODO:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default todoReducer;

// selectors
