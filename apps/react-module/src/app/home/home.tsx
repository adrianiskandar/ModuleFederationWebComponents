import styles from './home.module.css';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <div className={styles['container']}>
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
      </div>{' '}
    </div>
  );
}

export default Home;
