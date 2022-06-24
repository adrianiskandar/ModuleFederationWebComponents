// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Route, Link, Routes } from 'react-router-dom';
import Home from './home/home';
import Mui from './mui/mui';
import MultipleEntry from './multiple-entry/multiple-entry';

export function App() {
  return (
    <>
      <div className="module-content-header">
        <img
          className={styles['react_logo']}
          src="assets/react-icon.svg"
          width="80px"
          alt="React Icon"
        />
        <h2>React Remote Component</h2>
          <nav>
            <ul className="page-menu">
              <li>
                <Link to="/react-module">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/react-module/mui">
                  MUI
                </Link>
              </li>
              <li>
                <a href="/">
                  Host-Home
                </a>
              </li>
            </ul>
          </nav>
      </div>
      <div className="module-content">
        <Routes>
          <Route path="/react-module" element={<Home />} />
          <Route path="/react-module/mui" element={<Mui />} />
          <Route path="/multiple" element={<MultipleEntry />} />
          <Route path="/shadow-react-module" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
