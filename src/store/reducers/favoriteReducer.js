import { omit } from 'lodash';
import { getLocalStorage } from "@utils/localStorage";
import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_TO_FAVORITE } from '@store/constants/actionTypes';

// const store = {
//   2: {
//     name: 'C-3PO',
//     img: ''
//   },
//   8: {
//     name: 'R5-D4',
//     img: ''
//   }
// }

const initialState = getLocalStorage('store');

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON_TO_FAVORITE:
      return {
        ...state,
        ...action.payload
      }
    case REMOVE_PERSON_TO_FAVORITE:
      return omit(state, [action.payload]);
    default:
      return state;
  }
}

export default favoriteReducer;