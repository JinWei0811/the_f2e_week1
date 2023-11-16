import React from "react";
import styles from "./newscard.module.scss";
import Card from "@/component/home/news/cards/card";
import Image from "next/image";

export default function Newscard() {
  const cards = [
    {
      date: "12/26",
      title: "參與台北寵物論壇 <br/> 爭取貓咪友善環境",
      imgPath: "/product-01.png",
      content:
        "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。",
    },
    {
      date: "12/26",
      title: "掃街模式開啟！ <br/> 帶著你的貓耳，來和我一起走！",
      imgPath: "/product-04.png",
      content:
        "街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。",
    },
    {
      date: "12/26",
      title: "收容所模特兒大比拼！",
      imgPath: "/product-02.png",
      content:
        "今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！",
    },
    {
      date: "12/26",
      title: "貓星登場！",
      imgPath: "/product-03.png",
      content:
        "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。",
    },
  ];

  return (
    <div className={styles.newscard}>
      <div className={styles.infos}>
        <div className={styles.info}>
          <span className={styles.num}>1</span>
          <span className={styles.word}>分享</span>
        </div>
        <div className={styles.info}>
          <span className={styles.num}>2</span>
          <span className={styles.word}>收藏</span>
        </div>
        <div className={styles.info}>
          <span className={styles.num}>8</span>
          <span className={styles.word}>人數</span>
        </div>
      </div>
      <div className={styles.cards}>
        {cards.map((card, index) => (
          <Card
            index={index}
            date={card.date}
            title={card.title}
            imgPath={card.imgPath}
            content={card.content}
          ></Card>
        ))}
      </div>
      <div className={styles.pagination}>
        <Image src={"/left-arrow.png"} alt="" width={8} height={14} />
        <span>1</span>
        <Image src={"/right-arrow.png"} alt="" width={8} height={14} />
      </div>
    </div>
  );
}
