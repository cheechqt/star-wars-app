import UiVideo from '@components/UI/UiVideo';
import videoTrailer from './video/the-force-awakens-trailer.mp4'

import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <>
      <p className={styles.text}>
        The dark side of the force has won.<br />
        We cannot display data.<br />
        Come back when we fix everything
      </p>
      <UiVideo
        src={videoTrailer}
        classes={styles.video}
        paybackRate={2.0}
      />
    </>
  )
}

export default ErrorMessage;
