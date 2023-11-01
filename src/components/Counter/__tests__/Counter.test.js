import React from 'react';
import { renderWithRedux } from '../../../helpers/testHelper';
import Counter from '../Counter';

describe('Counter', () => {
  it('displays the count', () => {
    const store = {
      counter: {
        value: 0
      },
      todos: []
    };
    const { getByTestId } = renderWithRedux(<Counter />, { store });
    const node = getByTestId('count');
    expect(node).toHaveTextContent(store.counter.value);
  });
});
