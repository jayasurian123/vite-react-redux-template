import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from '../../dux/counter';
import { fetchTodo } from '../../dux/todo';
import styles from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const handleAdd = () => dispatch(increaseCounter(1));
  const handleSubstract = () => dispatch(decreaseCounter(1));
  const handleFetch = () => {
    count > 0 && dispatch(fetchTodo(count));
  };
  const todos = useSelector((state) => state.todos);

  return (
    <div className={styles.container}>
      <div className={styles.value} data-testid="count">
        {count}
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.button} onClick={handleSubstract}>
          -
        </button>
        <button className={styles.button} onClick={handleAdd}>
          +
        </button>
      </div>
      <div className={styles.fetchContainer}>
        <button className={styles.button} onClick={handleFetch}>
          FETCH
        </button>
      </div>

      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}> {todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Counter;
