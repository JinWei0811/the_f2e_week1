import React from "react";
import styles from "./option.module.scss";

export default function Option(prop: any) {
  return (
    <div className={styles.option}>
      <div className={styles.title}>
        <span className={`h3`}>{prop.title}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.money}>
          <span className={styles.num}>{prop.money}</span>
          <span className={styles.word}>每次捐款金額</span>
        </div>
        <div className={styles.people}>
          <span className={styles.num}>{prop.people_num}</span>
          <span className={styles.word}>贊助人數</span>
        </div>
      </div>
    </div>
  );
}
