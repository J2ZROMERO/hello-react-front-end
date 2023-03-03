import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getmsn } from '../redux/greetingSlice';

const Greeting = () => {
  const dataState = useSelector((state) => state.greeting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getmsn());
  }, [dispatch]);
  return (
    <div>
      <h1>{dataState.greeting}</h1>
    </div>
  );
};

export default Greeting;
