import { useSelector } from 'react-redux';

import styles from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const storeData = useSelector(state => state.favoriteReducer);
  console.log(storeData);
    return (
      <>
        <h1>favoriteReducer</h1>
      </>
    )
}

export default FavoritesPage;