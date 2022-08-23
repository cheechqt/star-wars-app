import PropTypes from 'prop-types';
import { THEME_LIGHT, THEME_DARK, THEME_NEUTRAL, useTheme } from '@context/ThemeProvider';
import cn from 'classnames'

import darkBtnImg from './img/dark-side.jpg';
import lightBtnImg from './img/light-side.jpg';
import neutralBtnImg from './img/falcon.jpg';

import styles from './ChooseSide.module.css';

const ChooseSideItem = ({
  classes,
  theme,
  text,
  img,
}) => {
  const isTheme = useTheme();

  return (
    <div
      className={cn(styles.item, classes)}
      onClick={() => isTheme.change(theme)}
    >
      <div className={styles.item__header}>{text}</div>
      <img className={styles.item__img} src={img} alt={text} />
    </div>
  )
};

ChooseSideItem.propTypes = {
  classes: PropTypes.string,
  theme: PropTypes.string,
  img: PropTypes.string,
  text: PropTypes.string,
};

const ChooseSide = () => {
  const elements = [
    {
      theme: THEME_LIGHT,
      text: "Light Side",
      img: lightBtnImg,
      classes: styles.item__light
    },
    {
      theme: THEME_DARK,
      text: "Dark Side",
      img: darkBtnImg,
      classes: styles.item__dark
    },
    {
      theme: THEME_NEUTRAL,
      text: "None Side",
      img: neutralBtnImg,
      classes: styles.item__neutral
    },
  ]

  return (
    <div className={styles.container}>
      {elements.map(({theme, text, img, classes}, index) => (
        <ChooseSideItem
          key={index}
          theme={theme}
          text={text}
          img={img}
          classes={classes}
        />
      ))}
    </div>
  )
}

export default ChooseSide;