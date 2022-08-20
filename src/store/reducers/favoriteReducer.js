import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_TO_FAVORITE } from '@store/constants/actionTypes';

const initialState = 'Hello';

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON_TO_FAVORITE:
      return {
        ...state,
        ...action.payload
      }
    case REMOVE_PERSON_TO_FAVORITE:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state;/////////state doljen bit
  }
}

export default favoriteReducer;