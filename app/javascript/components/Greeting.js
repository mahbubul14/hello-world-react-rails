import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetingData } from '../redux/greetingsActions';

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetingData());
  }, []);
  const { greetingsReducer } = useSelector((state) => state);
  console.log(greetingsReducer.greeting);

  return (
    <div>
      <p>Greeting: {greetingsReducer.greeting.name}</p>
    </div>
  );
};

Greeting.propTypes = {
  greeting: PropTypes.string,
};
export default Greeting;