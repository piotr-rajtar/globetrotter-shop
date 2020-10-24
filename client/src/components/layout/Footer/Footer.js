import React from 'react';

import styles from './Footer.module.scss';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

const Component = () => (
  <div className={styles.root}>

    <a className={styles.link} href='https://www.facebook.com/'>
      <FacebookIcon className={styles.icon} />
    </a>

    <a className={styles.link} href='https://www.instagram.com/'>
      <InstagramIcon className={styles.icon} />
    </a>

    <a className={styles.link} href='https://www.youtube.com/'>
      <YouTubeIcon className={styles.icon} />
    </a>

    <a className={styles.link} href='https://twitter.com/'>
      <TwitterIcon className={styles.icon} />
    </a>

  </div>
);

export {
  Component as Footer,
  Component as FooterComponent,
};
