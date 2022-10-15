import React, { useState } from "react";
import styles from "../../styles/Product.module.css";
import Image from "next/image";

const Product = () => {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "/images/saus-pizz.png",
    name: "ALL SEASON PIZZA",
    price: [19.9, 23.9, 27.9],
    desc: "All seasoned pizza with toppings of porks,sausage,chicken,beef,extra cheese",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} width="500px" height="500px" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>choose your styles</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/images/size.png" alt="" layout="fill" />
            <span className={styles.number}>small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/images/size.png" alt="" layout="fill" />
            <span className={styles.number}>medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/images/size.png" alt="" layout="fill" />
            <span className={styles.number}>large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double Ingredients"
              name="double Ingredients"
              className={styles.checkbox}
            />
            <label htmlFor="">Double Ingredients</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="garlic"
              name="garlic"
              className={styles.checkbox}
            />
            <label htmlFor="garlic">Garlic</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="extra cheese"
              name="extra cheese"
              className={styles.checkbox}
            />
            <label htmlFor="garlic">Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="spicy"
              name="spicy"
              className={styles.checkbox}
            />
            <label htmlFor="spicy">Spicy</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
