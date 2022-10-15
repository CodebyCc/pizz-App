import styles from "../../styles/Order.module.css";
import Image from "next/image";

const Order = () => {
  const status = 0;
  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <div className={styles.left}>
            <table className={styles.table}>
              <tr className={styles.trTitle}>
                <th>Order Id</th>
                <th>Name</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
              <tr className={styles.tr}>
                <td>
                  <span className={styles.id}>12987465775</span>
                </td>
                <td>
                  <span className={styles.name}>John Bauer</span>
                </td>
                <td>
                  <span className={styles.address}>24 nine street</span>
                </td>
                <td>
                  <span className={styles.total}>$ 39.86</span>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image
              src="/images/paid.png"
              className={styles.checkedIcon}
              width={30}
              height={30}
              alt=""
            />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                src="/images/checked.png"
                className={styles.checkedIcon}
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/images/bake.png" width={30} height={30} alt="" />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                src="/images/checked.png"
                className={styles.checkedIcon}
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/images/bike.png" width={30} height={30} alt="" />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <Image
                src="/images/checked.png"
                className={styles.checkedIcon}
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/images/delivered.png" width={30} height={30} alt="" />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image
                src="/images/checked.png"
                className={styles.checkedIcon}
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
        </div>
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
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
