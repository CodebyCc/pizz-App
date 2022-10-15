import styles from "../styles/PizzaCard.module.css";
import Image from "next/image";
const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/images/saus-pizz.png" alt="" height="500" width="500" />
      <h1 className={styles.titles}>Chicken Pizza</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet quis non,
      </p>
    </div>
  );
};

export default PizzaCard;
