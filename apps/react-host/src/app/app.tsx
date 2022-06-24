import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
import Wrapper from './wrapper/wrapper';
import Home from './home/home';
import MultipleApps from './multiple-apps/multiple-apps';
import { detect } from 'detect-browser';
import ShadowWrapper from './wrapper/shadow-wrapper';
import IFrame from './i-frame/i-frame';

export interface Browser {
  name: string;
  os: string;
  type: string;
  version: string;
}
declare global {
  interface Window {
    browser: Browser;
    platform: any;
  }
}

export function App() {
  const [username, setUsername] = React.useState('');
  document.addEventListener('user-selected', (event: any) => {
    setUsername(event.detail);
  });

  window.browser = detect() as Browser;

  return (
    <React.Suspense fallback={null}>
      <div className="content">
        <div className="sidebar">
          <div className="sidebar-header">
            <img
              className="react-icon"
              src="assets/react-icon.svg"
              width="90px"
              alt="React Icon"
            />
            <h1>React Host</h1>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/angular-module">Angular Module</Link>
              <ul>
                <li>
                  <a href="/angular-module/material">Material</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/react-module">React Module</Link>
              <ul>
                <li>
                  <a href="/react-module/mui">MUI</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/multiple">Multiple Apps</a>
            </li>
            <li>
              <a href="/shadow-angular-module">Shadow DOM Angular</a>
            </li>
            <li>
              <a href="/shadow-react-module">Shadow DOM React</a>
            </li>
            <li>
              <a href="/iframe">iFrame</a>
            </li>
          </ul>
          {username && <p className="user">Hello {username}!</p>}
        </div>
        <div className="federated-module">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/react-module/*"
              element={
                <Wrapper
                  importName="react-module"
                  elementName="react-module-root"
                />
              }
            />
            <Route
              path="/angular-module/*"
              element={
                <Wrapper
                  importName="angular-module"
                  elementName="angular-module-root"
                />
              }
            />
            <Route path="/multiple" element={<MultipleApps />} />
            <Route
              path="/shadow-react-module/*"
              element={
                <ShadowWrapper
                  importName="react-module"
                  elementName="react-module-root"
                />
              }
            />
            <Route
              path="/shadow-angular-module/*"
              element={
                <ShadowWrapper
                  importName="angular-module"
                  elementName="angular-module-root"
                />
              }
            />
            <Route path="/iframe" element={<IFrame />} />
          </Routes>
        </div>
      </div>
    </React.Suspense>
  );
}

export default App;
