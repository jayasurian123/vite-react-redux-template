const prefix = 'counter';
export const INCREASE_COUNTER = `${prefix}/increaseCounter`;
export const DECREASE_COUNTER = `${prefix}/decreaseCounter`;

export const increaseCounter = (count) => ({
  type: INCREASE_COUNTER,
  payload: count
});

export const decreaseCounter = (count) => ({
  type: DECREASE_COUNTER,
  payload: count
});

const initialState = {
  value: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        value: state.value + action.payload
      };

    case DECREASE_COUNTER:
      return {
        ...state,
        value: state.value - action.payload
      };

    default:
      return state;
  }
};

export default counterReducer;

// selectors
