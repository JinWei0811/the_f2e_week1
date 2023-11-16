import Image from "next/image";
import React from "react";
import styles from "./detail.module.scss";

export default function Detail(prop: any) {
  return (
    <div className={styles.detail}>
      <div className={styles.img}>
        <Image src={prop.imgPath} alt="" width={80} height={80} />
      </div>
      <div className={styles.content}>
        <span className="" dangerouslySetInnerHTML={{ __html: prop.content }}></span>
      </div>
    </div>
  );
}
