import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './PeopleNavigation.module.css';



const PeopleNavigation = ({
  getResponse,
  prevPage,
  nextPage,
  counterPage
}) => {
  const handleChangeNext = () => getResponse(nextPage);
  const handleChangePrev = () => getResponse(prevPage);
  return (
    <div>
      <Link to={`./?page=${counterPage - 1}`} className={styles.link}>
        <button
          onClick={handleChangePrev}
          className={styles.button}
          disabled={!prevPage}
        >
          Previous
        </button>
      </Link >
      <Link to={`./?page=${counterPage + 1}`} className={styles.link}>
        <button
          onClick={handleChangeNext}
          className={styles.button}
          disabled={!nextPage}
        >
          Next
        </button>
      </Link>
    </div >
  )
}

PeopleNavigation.propTypes = {
  getResponse: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number,
}

export default PeopleNavigation;