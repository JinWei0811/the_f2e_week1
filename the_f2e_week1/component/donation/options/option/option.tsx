import React from "react";
import styles from "./option.module.scss";

export default function Option(prop: any) {
  return (
    <div className={styles.option}>
      <div className={styles.title}>
        <div className={styles.rightline}></div>
        <span className="h3">{prop.title}</span>
        <div className={styles.leftline}></div>
      </div>
      <div className={styles.info}>
        <div className={styles.money_container}>
          <span className={styles.money}>{prop.money}</span>
          <span className={styles.tips}>每次捐款金額</span>
        </div>
        <div className={styles.devide}></div>
        <div className={styles.money_container}>
          <span className={styles.money}>{prop.num}</span>
          <span className={styles.tips}>贊助人數</span>
        </div>
      </div>
    </div>
  );
}
