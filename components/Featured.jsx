import React, { useState } from "react";
import styles from "../styles/Featured.module.css";
import Image from "next/image";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const heroItems = [
    {
      h1: "",
      h2: "",
      img: "/images/piz-food.png",
      p: "",
    },
    {
      h1: "Lucky Tuesday",
      h2: "Buy One Get One Free",
      img: "/images/all-seas.png",
      p: "loremjjfjjjkldjhiuo;irrwuoe8o;jknwlhrurhjrrhhhrhbbfbjjjfjkkkskkssjsjksjjdjsjdbfffffffffffffr",
    },
    {
      h1: "Best Pizza SHop is inThe Capital",
      h2: "Now Opening in Accra",
      img: "/images/pizza.png",
      p: "loremjjfjjjkldjhiuo;irrwuoe8o;jknwlhrurhjrrhhhrhbbfbjjjfjkkkskkssjsjksjjdjsjdbfffffffffffffr",
    },
  ];
  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    } else if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  console.log(index);
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image
          src="/images/arrowl.png"
          objectFit="contain"
          alt=""
          layout="fill"
          style={{ left: 0 }}
        />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-125 * index}vw)` }}
      >
        <div className={styles.hero}>
          {heroItems.map((hero, i) => (
            <div className={styles.imgContainer} key={i}>
              <Image
                src={hero.img}
                alt=""
                width="700px"
                height="700px"
                objectFit="contain"
              />
              <div className={styles.her}>
                <h2 className={styles.heroHeading2}>{hero.h2}</h2>
                <h1 className={styles.heroHeading}>{hero.h1}</h1>
                <p>{hero.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={styles.arrowContainer}
        onClick={() => handleArrow("r")}
        style={{ right: 0 }}
      >
        <Image
          src="/images/arrowr.png"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Featured;
