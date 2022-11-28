import styles from "../styles/Cart.module.css";
import Image from "next/image";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/images/pizza.png"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>Coralzo</span>
            </td>
            <td>
              <span className={styles.extras}>spicy sauce</span>
            </td>
            <td>
              <span className={styles.price}>19.9</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>$ 39.86</span>
            </td>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/images/saus-pizz.png"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>Chicken Pizza</span>
            </td>
            <td>
              <span className={styles.extras}>
                Double ingredient, spicy sauce
              </span>
            </td>
            <td>
              <span className={styles.price}>$19.90</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>$39.80</span>
            </td>
          </tr>
        </table>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.TextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.TextTitle}>Discount:</b>$0.0
          </div>
          <div className={styles.totalText}>
            <b className={styles.TextTitle}>Total:</b>$79.60
          </div>
          <button className={styles.button}>CHECKOUT NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
