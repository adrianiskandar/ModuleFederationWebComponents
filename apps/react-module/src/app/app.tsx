// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Route, Link, Routes } from 'react-router-dom';
import Home from './home/home';
import Mui from './mui/mui';

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
        <div className="page-menu">
          <nav>
            <ul className="sub-menu">
              <li>
                <Link className="body-small link" to="/react-module">
                  Home
                </Link>
              </li>
              <li>
                <Link className="body-small link" to="/react-module/mui">
                  MUI
                </Link>
              </li>
              <li>
                <a href="/" className="body-small link">
                  Host-Home
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="module-content">
        <Routes>
          <Route path="/react-module" element={<Home />} />
          <Route path="/react-module/mui" element={<Mui />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
