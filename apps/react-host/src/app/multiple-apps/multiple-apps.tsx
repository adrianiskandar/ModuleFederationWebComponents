import Wrapper from '../wrapper/wrapper';
import styles from './multiple-apps.module.css';

/* eslint-disable-next-line */
export interface MultipleAppsProps {}

export function MultipleApps(props: MultipleAppsProps) {
  return (
    <div className={styles['container']}>
      <Wrapper importName="react-module" elementName="react-module-root" />
      <Wrapper importName="angular-module" elementName="angular-module-root" />
    </div>
  );
}

export default MultipleApps;
