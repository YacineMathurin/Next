import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Jumbotron from "../components/jumbotron/jumbotron";
import Navbar from "../components/nav/nav";
import styles from "../styles/Home.module.css";
import DefaultLayout from "./Layouts/defaultLayout";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cats world</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <Jumbotron />
      </DefaultLayout>
    </div>
  );
};

export default Home;
