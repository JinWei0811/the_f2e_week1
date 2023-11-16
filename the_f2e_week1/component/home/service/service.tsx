import React from "react";
import styles from "./service.module.scss";
import Image from "next/image";

export default function Service() {
  return (
    <div className={styles.service}>
      <div className={styles.banner}>
        <div className={styles.right_line}></div>

        <div className={styles.title}>
          <span className="h2">您的聲音，我們的行動！</span>
          <span className="h6">
            親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。 <br />
            無論大小事，我都誠摯希望聽到您的建議。
            <br />
            分享您的想法，一同為我們的未來打造更美好！
          </span>
        </div>
        <div className={styles.left_line}></div>
      </div>
      <div className={styles.fields}>
        <span className="h6">姓名</span>
        <input placeholder="請輸入中文或英文姓名"></input>
        <span className="h6">Email</span>
        <input placeholder="請輸入mail帳戶"></input>
        <span className="h6">手機</span>
        <input placeholder="請輸入十位數字"></input>
        <span className="h6">建言</span>
        <textarea placeholder="請輸入您的建言"></textarea>
        <div className={styles.send}>
          <span>送出</span>
          <Image src={"/white-right-arrow.svg"} alt="" width={8} height={16} />
        </div>
      </div>
    </div>
  );
}
