import React from "react";
import styles from "./donation.module.scss";
import Footer from "@/component/footer/footer";
import Navbar from "@/component/navbar/navbar";

export default function Page() {
  return (
    <div className={styles.donation}>
      <div className={styles.banner}>
        <Navbar></Navbar>
      </div>
      <div className={styles.options}></div>
      <Footer></Footer>
    </div>
  );
}
