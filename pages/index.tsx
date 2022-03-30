import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import Intro from "../components/page/main/Intro";
import Nav from "components/page/Nav";
import Category from "components/page/main/Category";
import Contents from "components/page/main/Contents";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Swing</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <Nav />
        <Intro />
        <h1 className={styles['main-title']}>Explore Collections</h1>
        <div className={styles.contents}>
        <Category />
        <Contents />

        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
