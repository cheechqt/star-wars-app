import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_TO_FAVORITE } from '@store/constants/actionTypes';


export const setPersonToFavorite = () => ({
  type: ADD_PERSON_TO_FAVORITE,
  payload: ''
})

export const removePersonToFavorite = () => ({
  type: REMOVE_PERSON_TO_FAVORITE,
  payload: ''
})