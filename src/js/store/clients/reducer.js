import { makeId } from '../../helpers/helper';
import * as types from './types';

const initialState = {
  allClients: [
    { id: makeId(15), name: 'Jonn Doe' },
    { id: makeId(15), name: 'Sarah Connor' },
    { id: makeId(15), name: 'Jane Doe' },
    { id: makeId(15), name: 'Alice Silverwind' },
  ],
  messages: [],
};

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case types.ADD_A_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, payload],
      };
    case types.APPEND_CLIENT:
      return {
        ...state,
        allClients: [...state.allClients, payload],
      };
    case types.DETACH_CLIENT:
      return {
        ...state,
        allClients: state.allClients.filter(item => item.id !== payload.id),
      };
    default: return state;
  }
};
