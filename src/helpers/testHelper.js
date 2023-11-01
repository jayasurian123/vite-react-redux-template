/* istanbul ignore file */

import React from 'react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

const mockStore = configureMockStore();

function renderWithRedux(ui, { store } = {}) {
  return {
    ...render(<Provider store={mockStore(store)}>{ui}</Provider>),
    store
  };
}

export { mockStore, renderWithRedux };
