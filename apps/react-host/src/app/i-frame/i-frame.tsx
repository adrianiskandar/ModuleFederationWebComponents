import styles from './i-frame.module.css';

/* eslint-disable-next-line */
export interface IFrameProps {}

export function IFrame(props: IFrameProps) {
  return (
    <div className={styles['container']}>
      <iframe title="iframe example" src="http://localhost:4202/react-module/mui" width="1000" height="600"></iframe>
    </div>
  );
}

export default IFrame;
