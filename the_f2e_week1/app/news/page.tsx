import React from "react";
import styles from "./news.module.scss";
import Navbar from "@/component/navbar/navbar";
import Lastnews from "@/component/news/lastnews/lastnews";
import Newscard from "@/component/news/newscard/newscard";
import Footer from "@/component/footer/footer";

export default function News() {
  return (
    <div>
      <div className={styles.header}>
        <Navbar parentStyles={styles}></Navbar>
        <div className={styles.lastnews}>
          <Lastnews></Lastnews>
        </div>
      </div>
      <div className={styles.newscards}>
        <Newscard></Newscard>
      </div>
      <div className={styles.footer}>
        <Footer></Footer>
      </div>
    </div>
  );
}
