import Navbar from "@/component/navbar/navbar";
import React from "react";
import styles from "./home.module.scss";
import Banner from "@/component/banner/banner";
import News from "@/component/news/news";

export default function Home() {
  return (
    <div className={styles.home}>
      <div>
        <Navbar></Navbar>
      </div>
      <div className={styles.banner}>
        <Banner></Banner>
      </div>
      <div className={styles.news}>
        <News></News>
      </div>
    </div>
  );
}
