import React from 'react';
import { Registry, registry } from './registry';
import styles from './wrapper.module.css';

/* eslint-disable-next-line */
export interface WrapperProps {
  elementName: string;
  importName: keyof Registry;
}

export function Wrapper(props: WrapperProps) {
  const { elementName, importName } = props;
  const element = React.createElement(elementName);

  const importFn = registry[importName];
    importFn()
      .then()
      .catch((err: any) => console.error(`error loading ${elementName}:`, err));

  return (
    <div className={styles['wrapper']}>
    { element }
    </div>
  );
}

export default Wrapper;
