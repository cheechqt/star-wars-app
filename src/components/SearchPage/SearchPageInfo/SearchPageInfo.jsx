import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import styles from './SearchPageInfo.module.css';

const SearchPageInfo = ({ people }) => (
  <>
    {people.length
      ? (
        <ul className={styles.list__container}>
          {people.map(({ id, name, img }) =>
            <li className={styles.list__item} key={id}>
              <Link to={`/people/${id}`}>
              <img className={styles.item__photo} src={img} alt={name} />
                <p className={styles.item__name}>{name}</p>
                </Link>
            </li>
          )}
        </ul>
      )
      : <h2 className={styles.item__comment}>No results</h2>
    }
  </>
)

SearchPageInfo.propTypes = {
  people: PropTypes.array
}

export default SearchPageInfo;