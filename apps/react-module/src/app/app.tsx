// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <div className="module-content-header">
        <img className={styles['react_logo']} src="assets/react-icon.svg" width="80px" alt="React Icon" />
        <h1>React Remote Component</h1>
      </div>
      <div className="module-content">
        <p>
          This page is a React component loading from a remote application
          encapsulated in a web component!
        </p>

        <div className="home-icons">
          <img
            src="assets/wc-react.png"
            width="50%"
            alt="Module Federation logo"
          />
        </div>
      </div>
    </>
  );
}

export default App;
