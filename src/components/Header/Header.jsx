import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { THEME_LIGHT, THEME_DARK, THEME_NEUTRAL, useTheme } from '@context/ThemeProvider'
import Favorite from '@components/Favorite';

import lightIcon from "./img/lightsaber.svg";
import darkIcon from "./img/space-station.svg";
import neutralIcon from "./img/droid.svg";

import styles from './Header.module.css';

const Header = () => {
  const [icon, setIcon] = useState(darkIcon);
  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(lightIcon)
        break;
      case THEME_DARK:
        setIcon(darkIcon)
        break;
      case THEME_NEUTRAL:
        setIcon(neutralIcon)
        break;
      default:
        setIcon(darkIcon)
        break;
    }
  }, [isTheme])

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={icon} alt="Star Wars" />

      <ul className={styles.list__container}>
        <li>< NavLink to="/">Home</NavLink ></li>
        <li>< NavLink to="/people/?page=1">People</NavLink ></li>
        <li><NavLink to="/not-found">Not Found</NavLink ></li>
        <li><NavLink to="/search">Search</NavLink ></li>
      </ul>
      <Favorite />
    </div>
  )
}

export default Header;
