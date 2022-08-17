import { useNavigate } from "react-router-dom";

import iconBack from "./img/back.svg";
import styles from './PersonLinkBack.module.css';

const PersonLinkBack = () => {
  const navigate = useNavigate();
  const handleGoBack = e => {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <a
      className={styles.link}
      href='#'
      onClick={handleGoBack}
    >
      <img className={styles.link__img} src={iconBack} alt='go back'/>
      <span>Go back</span>
    </a>
  )
}

export default PersonLinkBack;