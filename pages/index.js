import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizzaman Chicken</title>
        <meta name="description" content="Best Pizza Shop In Ghana" />
        <link rel="icon" href="/favicon.icon" />
      </Head>
      <Featured />
      <PizzaList />
    </div>
  );
}
