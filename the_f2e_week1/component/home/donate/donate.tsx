import React from "react";
import styles from "./donate.module.scss";
import Option from "./option/option";
import Image from "next/image";
import Link from "next/link";

export default function Donate() {
  const options = [
    {
      title: "喵星人之友",
      money: "NT$600",
      people_num: "9957",
    },
    {
      title: "喵星大使",
      money: "NT$6,000",
      people_num: "2000",
    },
    {
      title: "喵星傳奇",
      money: "NT$60,000",
      people_num: "999",
    },
    {
      title: "喵星自我",
      money: "自訂",
      people_num: "0",
    },
  ];
  return (
    <div className={styles.donate}>
      <div className={styles.title}>
        <span className="h2">
          您的小筆捐款 <br /> 是每隻毛孩未來的大大動力！
        </span>
        <span className="h6">目前小額贊助總金額：987,655,873</span>
      </div>
      <div className={styles.container}>
        <div className={styles.options}>
          {options.map((option, index) => (
            <Option
              key={index}
              title={option.title}
              money={option.money}
              people_num={option.people_num}
            ></Option>
          ))}
        </div>
      </div>
      <Link href={"/donation"}>
        <div className={styles.active}>
          <span className="h6">前往捐款</span>
          <Image src={"/white-right-arrow.svg"} alt="" width={8} height={16} />
        </div>
      </Link>
    </div>
  );
}
