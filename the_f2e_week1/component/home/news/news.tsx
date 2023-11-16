import React from "react";
import styles from "./news.module.scss";
import Card from "./cards/card";
import Image from "next/image";
import Link from "next/link";

export default function News() {
  const cardInfos = [
    {
      key: "",
      imgPath: "/product-01.png",
      date: "12/26",
      title: "參與台北寵物論壇 <br> 爭取貓咪友善環境",
      content:
        "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。",
    },
    {
      key: "",
      imgPath: "/product-04.png",
      date: "12/26",
      title: "掃街模式開啟！ <br> 帶著你的貓耳，來和我一起走！",
      content:
        "街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。",
    },
    {
      key: "",
      imgPath: "/product-02.png",
      date: "12/26",
      title: "收容所模特兒大比拼！",
      content:
        "今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！",
    },
  ];

  return (
    <div className={styles.news}>
      <div className={styles.upper_arrow}>
        <Image src="/upper-arrow.svg" alt="" width={207} height={207} />
      </div>
      <div className={styles.lastest}>
        <span className="h2">最新消息</span>
      </div>
      <div className={styles.more}>
        <Link href={"/news"}>
          <span className="h5">MORE</span>
          <Image src="/right-arrow.png" alt="" width={8} height={16} />
        </Link>
      </div>
      <div className={styles.content}>
        {cardInfos.map((cardInfo, index) => (
          <Card
            key={index}
            index={index}
            imgPath={cardInfo.imgPath}
            date={cardInfo.date}
            title={cardInfo.title}
            content={cardInfo.content}
          />
        ))}
      </div>
    </div>
  );
}
