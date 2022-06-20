import styles from './home.module.css';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <div className={styles['container']}>
      <div className="module-content-header">
        <img
          className="react-icon"
          src="assets/react-icon.svg"
          width="90px"
          alt="React Icon"
        />{' '}
        <h1>React Component</h1>
      </div>
      <div className="module-content">
        <h1>Welcome to micro frontends and the multiverse of frameworks!</h1>
        <p>
          This page is a simple React component, but we are about to see
          something special, Module Federation + Web Components!{' '}
        </p>

        <div className="home-icons">
          <img
            src="assets/wc-mod-fed.png"
            width="50%"
            alt="Module Federation logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
