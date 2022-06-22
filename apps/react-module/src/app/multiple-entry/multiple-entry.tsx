import styles from './multiple-entry.module.css';

/* eslint-disable-next-line */
export interface MultipleEntryProps {}

export function MultipleEntry(props: MultipleEntryProps) {
  return (
    <div className={styles['container']}>
      <p>This is a React component that loads when navigation is <b>/multiple</b></p>
    </div>
  );
}

export default MultipleEntry;
