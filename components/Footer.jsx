import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/images/bg.png" objectFit="cover" alt="" layout="fill" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES WE DID ,THE CM PIZZA ,WELL BAKED SLICE OF PIZZA
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANT</h1>
          <p className={styles.text}>
            PLOT 225 A BLOCK B SEPE DOTE,OFF THE AIRPORT ROUNDABOUT ROAD
            <br />
            Ashanti,Region
            <br />
            (2304647557)
          </p>
          <p className={styles.text}>
            PLOT 225 A BLOCK B SEPE DOTE,OFF THE AIRPORT ROUNDABOUT ROAD
            <br />
            Ashanti,Region
            <br />
            (2304647557)
          </p>
          <p className={styles.text}>
            PLOT 225 A BLOCK B SEPE DOTE,OFF THE AIRPORT ROUNDABOUT ROAD
            <br />
            Ashanti,Region
            <br />
            (2304647557)
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br />
            9:00-22;00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br />
            12:00-24;00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
