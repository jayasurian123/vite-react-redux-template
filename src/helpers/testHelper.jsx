/* istanbul ignore file */

import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

function renderWithRedux(ui, { store } = {}) {
  return {
    ...render(<Provider store={mockStore(store)}>{ui}</Provider>),
    store
  };
}

export { mockStore, renderWithRedux };
