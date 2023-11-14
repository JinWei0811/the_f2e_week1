import React from "react";
import styles from "./news.module.scss";
import Card from "./cards/card";

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
      imgPath: "/product-02.png",
      date: "12/26",
      title: "掃街模式開啟！ <br> 帶著你的貓耳，來和我一起走！",
      content:
        "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。",
    },
    {
      key: "",
      imgPath: "/product-03.png",
      date: "12/26",
      title: "參與台北寵物論壇\n爭取貓咪友善環境",
      content:
        "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。",
    },
  ];

  return (
    <div className={styles.news}>
      <div className={styles.content}>
        {cardInfos.map((cardInfo, index) => (
          <Card
            key={index} // 使用索引作为 key
            index={index} // 传递 index 到 Card 组件
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
