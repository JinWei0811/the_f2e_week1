import React from "react";
import styles from "./donation.module.scss";
import Footer from "@/component/footer/footer";
import Navbar from "@/component/navbar/navbar";
import Banner from "@/component/donation/banner/banner";
import Options from "@/component/donation/options/options";

export default function Page() {
  return (
    <div className={styles.donation}>
      <div className={styles.banner}>
        <Navbar parentStyles={styles}></Navbar>
        <Banner></Banner>
      </div>
      <div className={styles.options}>
        <Options></Options>
      </div>
      <Footer></Footer>
    </div>
  );
}
