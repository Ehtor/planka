import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Tab } from 'semantic-ui-react';

import Config from '../../constants/Config';

import logo from '../../assets/images/logo.png';

import styles from './AboutPane.module.scss';

const AboutPane = React.memo(() => {
  const [t] = useTranslation();

  return (
    <Tab.Pane attached={false} className={styles.wrapper}>
      <Image centered src={logo} size="large" />
      <div className={styles.version}>
        <a href="https://github.com/plankanban/planka/releases">
          {t('common.version')} {Config.VERSION}
        </a>
      </div>
    </Tab.Pane>
  );
});

export default AboutPane;
