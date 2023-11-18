import React from "react";
import styles from "./policy.module.scss";
import Detail from "./detail/detail";
import Image from "next/image";
import Link from "next/link";

export default function Policy() {
  const details = [
    {
      imgPath: "/medical.png",
      content: "為毛孩子謀福利！<br> 推動寵物醫療保障方案",
    },
    {
      imgPath: "/rest.png",
      content: "打造休閒天堂！ <br> 推廣寵物休閒與娛樂場所",
    },
    {
      imgPath: "/promotion.png",
      content: "推廣寵物飼養教育 <br> 讓愛更加專業",
    },
  ];

  return (
    <div className={styles.policy}>
      <div className={styles.title}>
        <span className="h2">政策議題</span>
      </div>
      <div className={styles.content}>
        {details.map((detail, index) => (
          <Detail
            key={index}
            imgPath={detail.imgPath}
            content={detail.content}
          ></Detail>
        ))}
      </div>
      <div className={styles.more}>
        <Link href={"/policy"}>
          <span className="h5">MORE</span>
          <Image src={"/right-arrow.png"} alt="" width={8} height={16} />
        </Link>
      </div>
    </div>
  );
}
