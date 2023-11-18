import React from "react";
import styles from "./banner.module.scss";
import Image from "next/image";

export default function Banner() {
  return (
    <div className={styles.donation_banner}>
      <div className={styles.title}>
        <span className="h2">
          您的小筆捐款是
          <br />
          每隻毛孩
          <br />
          未來的大大動力！
        </span>
      </div>
      <div className={styles.go_donation}>
        <span>前往捐款</span>
        <Image src={"/white-right-arrow.svg"} alt="" width={8} height={16}/>
      </div>
    </div>
  );
}
