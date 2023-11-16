import React from "react";
import styles from "./lastnews.module.scss";
import Image from "next/image";

export default function Lastnews() {
  return (
    <div className={styles.lastnews}>
      <span className="h1">最新消息</span>
      <div className={styles.search}>
        <input placeholder="請輸入關鍵字"></input>
        <span className={styles.imgcontainer}>
          <Image src={"/search.png"} alt="" width={16} height={16}></Image>
        </span>
      </div>
      <div className={styles.date}>
        <input placeholder="請選擇日期時間"></input>
        <span className={styles.imgcontainer}>
          <Image src={"/calendar.png"} alt="" width={16} height={16}></Image>
        </span>
      </div>
    </div>
  );
}
