import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const ReactModule = React.lazy(() => import('react-module/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/react-module">ReactModule</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="react-host" />} />

        <Route path="/react-module" element={<ReactModule />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
