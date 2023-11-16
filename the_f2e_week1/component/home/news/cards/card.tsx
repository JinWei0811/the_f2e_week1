import React from "react";
import styles from "./card.module.scss";
import Image from "next/image";

export default function Card(props: any) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <div className={styles.serial}>
          <span className={`h1`}>{props.index + 1}</span>
          <span className={`h6`}>{props.date}</span>
        </div>
        <div className={styles.content}>
          <span
            dangerouslySetInnerHTML={{ __html: props.title }}
          ></span>
        </div>
      </div>
      <div className={styles.img}>
        <Image
          src={props.imgPath}
          alt="img"
          height={344.55}
          width={525}
        ></Image>
        <div className={styles.feature}>
          <Image src={"/heart.png"} alt="like" width={20} height={20}></Image>
          <Image src={"/share.png"} alt="share" width={20} height={20}></Image>
        </div>
      </div>
      <div className={styles.detail}>
        <span className="h6">{props.content}</span>
      </div>
    </div>
  );
}
