import styles from "../styles/Pizzalist.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.titles}>Best Pizza in Town</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet quis non,
        rerum mollitia aperiam minima enim? Necessitatibus voluptatum totam
        veritatis? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Amet quis non, rerum mollitia aperiam minima enim? Necessitatibus
        voluptatum totam veritatis?
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default PizzaList;
