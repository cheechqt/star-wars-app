import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { changeHTTP, makeCurrentRequest } from "@utils/network";

import styles from './PersonFilms.module.css';


const PersonFilms = ({ personFilms }) => {
  const [filmsName, setFilmsName] = useState([]);

  useEffect(() => {
    (async () => {
      const filmsHTTPS = personFilms.map(url => changeHTTP(url));
      const response = await makeCurrentRequest(filmsHTTPS);

      setFilmsName(response);
    })();
  }, [])
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {filmsName
          .sort((a, b) => a.episode_id - b.episode_id)
          .map(({ title, episode_id }) =>
            <li className={styles.list__item} key={episode_id}>
              <span className={styles.item__episode}>Epsidode: {episode_id}</span>
              <span className={styles.item__colon}> : </span>
              <span className={styles.item__title}>{title}</span>
            </li>
          )}
      </ul>
    </div>
  )
}

PersonFilms.propTypes = {
  personFilms: PropTypes.array
}

export default PersonFilms;