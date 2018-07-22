import * as types from './types';

export const appendClient = client => ({
  type: types.APPEND_CLIENT,
  payload: client,
});

function clientData(client) {
  return {
    type: types.DETACH_CLIENT,
    payload: client,
  };
}

// Async Action, just for example
export const detachClient = (client) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(clientData(client));
    }, 500);
  };
};

export const addAMessage = message => ({
  type: types.ADD_A_MESSAGE,
  payload: message,
});
