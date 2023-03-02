import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getgreat } from '../redux/greetingSlice';

const Greeting = () => {
  const dataState = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getgreat());
  }, [dispatch]);

  return (
    <div>
      <h1>Hello from Create React App</h1>
      <p>
        {dataState.greeting.message}
        {' '}
        I am in a React Component!
      </p>
    </div>
  );
};

export default Greeting;
