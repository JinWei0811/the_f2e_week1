import Navbar from "@/component/navbar/navbar";
import React from "react";
import styles from "./home.module.scss";
import Banner from "@/component/home/banner/banner";
import News from "@/component/home/news/news";
import Policy from "@/component/home/policy/policy";
import Donate from "@/component/home/donate/donate";
import Service from "@/component/home/service/service";
import Footer from "@/component/footer/footer";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.banner}>
        <Navbar parentStyles={styles}></Navbar>
        <Banner></Banner>
      </div>
      <div className={styles.news}>
        <News></News>
      </div>
      <div className={styles.policy}>
        <Policy></Policy>
      </div>
      <div className={styles.donate}>
        <Donate></Donate>
      </div>
      <div className={styles.services}>
        <Service></Service>
      </div>
      <div className={styles.footer}>
        <Footer></Footer>
      </div>
    </div>
  );
}
