import { useLocation } from "react-router-dom";
import img from "./img/notFound.png";

import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <>
      <img className="" src={img} alt="Not found" />
      <p className="">No match for <u>{location.pathname}</u></p>
    </>
  )
}

export default NotFoundPage;