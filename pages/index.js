import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';

const Home =()=> {
  const route = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h1 className={styles.h1Name}>Elie</h1>
        <h1 className={styles.h1SecondName}>Demole</h1>
        <div>
          <p className={styles.shortDescript}>
            Copywriter and Content creator
          </p>
        </div>
        <div className={styles.btnContainer}>
          <button
            className={styles.seemoreBtn}
            onClick={() => route.push('/about')}
          >see more about me</button>
        </div>
      </div>
    </div>
  );
}

export default Home