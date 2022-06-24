import React from 'react';
import { Registry, registry } from './registry';

/* eslint-disable-next-line */
export interface WrapperProps {
  elementName: string;
  importName: keyof Registry;
}

export class ShadowWrapper extends React.Component<WrapperProps> {
  importName: keyof Registry;
  element: HTMLElement;

  constructor(props: WrapperProps) {
    super(props);
    const { elementName, importName } = props;
    this.element = document.createElement(elementName);
    this.importName = importName;
  }

  override componentDidMount() {
    const importFn = registry[this.importName];
    importFn()
      .then()
      .catch((err: any) =>
        console.error(`error loading ${this.importName}:`, err)
      );
  }

  attachShadow = (host: HTMLDivElement) => {
    if (host) {
      const shadow = host.attachShadow({ mode: 'open' });
      shadow.appendChild(this.element);
    }
  };
  override render() {
    return <div ref={this.attachShadow}></div>;
  }
}

export default ShadowWrapper;
