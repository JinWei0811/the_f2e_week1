import React from "react";
import styles from "./options.module.scss";
import Option from "./option/option";

export default function Options() {
  const options = [
    {
      title: "喵星人之友",
      money: "NT$600",
      num: "9957",
    },
    {
      title: "喵星大使",
      money: "NT$6,000",
      num: "2000",
    },
    {
      title: "喵星傳奇",
      money: "NT$60,000",
      num: "999",
    },
    {
      title: "喵星自我",
      money: "自訂",
      num: "0",
    },
  ];
  return (
    <div className={styles.options_container}>
      <div className={styles.total}>
        <span className={styles.money}>987,655,873</span>
        <span className={styles.num}>總金額</span>
      </div>
      <div className={styles.options_card}>
        {options.map((option, index) => (
          <Option
            key={index}
            title={option.title}
            money={option.money}
            num={option.num}
          ></Option>
        ))}
      </div>
    </div>
  );
}
