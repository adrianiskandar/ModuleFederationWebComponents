import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
import Wrapper from './wrapper/wrapper';

const ReactModule = React.lazy(() => import('react-module/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/react-module">React Module</Link>
        </li>
        <li>
          <Link to="/angular-module">Angular Module</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="react-host" />} />
        <Route
          path="/react-module"
          element={
            <Wrapper
              importName="react-module"
              elementName="react-module-root"
            />
          }
        />
         <Route
          path="/angular-module"
          element={
            <Wrapper
              importName="angular-module"
              elementName="angular-module-root"
            />
          }
        />
      </Routes>
    </React.Suspense>
  );
}

export default App;
