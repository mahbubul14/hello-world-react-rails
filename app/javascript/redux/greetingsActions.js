import {
  GREETINGS_REQUEST_DONE,
  GREETINGS_REQUEST_ERROR,
  GREETINGS_REQUEST_START,
} from '../constants';

export const fetchGreetingStart = () => ({
  type: GREETINGS_REQUEST_START,
});

export const fetchGreetingSucc = (payload) => ({
  type: GREETINGS_REQUEST_DONE,
  payload,
});

export const fetchGreetingFailure = (payload) => ({
  type: GREETINGS_REQUEST_ERROR,
  payload,
});

export const fetchGreetingData = () => async (dispatch) => {
  dispatch(fetchGreetingStart());
  try {
    const res = await fetch('/api/v1/greetings.json');
    if (res.ok) {
      const greetings = await res.json();
      dispatch(fetchGreetingSucc(greetings));
    }
  } catch (err) {
    dispatch(fetchGreetingFailure(err.message));
  }
};
