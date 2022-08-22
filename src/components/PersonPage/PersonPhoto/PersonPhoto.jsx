import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { setPersonToFavorite, removePersonToFavorite } from '@store/actions'

import iconFavorite from './img/favorite.svg';
import iconFavoriteFilled from './img/favorite-filled.svg';
import styles from './PersonPhoto.module.css';

const PersonPhoto = ({
  personId,
  personPhoto,
  personName,
  personFavorite,
  setPersonFavorite
}) => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonToFavorite(personId));
      setPersonFavorite(false)
    } else {
      dispatch(setPersonToFavorite({
        [personId]: {
          name: personName,
          img: personPhoto
        }
      }));
      setPersonFavorite(true)
    }
  }

  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName} />
        <img
          src={personFavorite ? iconFavorite : iconFavoriteFilled}
          onClick={dispatchFavoritePeople}
          className={styles.favorite}
          alt="Toggle favorite selection"
        />
      </div>
      {/* src={personFavorite ? 'Remove from Favorites' : 'Add to Favorites'} */}
    </>
  )
}

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  personId: PropTypes.string,
  personId: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
}

export default PersonPhoto;