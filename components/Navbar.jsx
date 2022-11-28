import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navClick = () => {
    setNav(!nav);
  };
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.home}>
          <Link href="/">
            <Image
              src="/images/piz.png"
              alt=""
              width="42"
              height="42"
              backgroud="blue"
            />
          </Link>
        </div>
        <div className={styles.callbutton}>
          <Image
            src="/images/tel.png"
            alt=""
            width="22"
            height="22"
            background="blue"
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order Now</div>
          <div className={styles.text}>+2332403985</div>
        </div>
      </div>
      <div className={styles.item2}>
        <ul className={nav ? styles.list : styles.none}>
          <Link href="/product/231">
            <li className={styles.listItem}>Products</li>
          </Link>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Contact</li>
          <li className={styles.listItem}>Sign in / Create Account</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image
            src="/images/cart.png.png"
            alt=""
            width="32"
            height="32"
            background="color: #b7903c;"
          />
          <div className={styles.counter}>0</div>
        </div>
        <div onClick={navClick} className={styles.menu}>
          {nav ? (
            <svg
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.22566 4.81096C5.83514 4.42044 5.20197 4.42044 4.81145 4.81096C4.42092 5.20148 4.42092 5.83465 4.81145 6.22517L10.5862 11.9999L4.81151 17.7746C4.42098 18.1651 4.42098 18.7983 4.81151 19.1888C5.20203 19.5793 5.8352 19.5793 6.22572 19.1888L12.0004 13.4141L17.7751 19.1888C18.1656 19.5793 18.7988 19.5793 19.1893 19.1888C19.5798 18.7983 19.5798 18.1651 19.1893 17.7746L13.4146 11.9999L19.1893 6.22517C19.5799 5.83465 19.5799 5.20148 19.1893 4.81096C18.7988 4.42044 18.1657 4.42044 17.7751 4.81096L12.0004 10.5857L6.22566 4.81096Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="menu"
            >
              <path d="M21.5 24h-19A2.503 2.503 0 010 21.5v-19C0 1.122 1.121 0 2.5 0h19C22.879 0 24 1.122 24 2.5v19c0 1.378-1.121 2.5-2.5 2.5zM2.5 1C1.673 1 1 1.673 1 2.5v19c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-19c0-.827-.673-1.5-1.5-1.5z"></path>
              <path d="M16.5 8h-9a.5.5 0 010-1h9a.5.5 0 010 1zm0 4.5h-9a.5.5 0 010-1h9a.5.5 0 010 1zm0 4.5h-9a.5.5 0 010-1h9a.5.5 0 010 1z"></path>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
