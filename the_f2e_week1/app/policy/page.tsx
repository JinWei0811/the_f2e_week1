import React from "react";
import styles from "./policy.module.scss";
import Navbar from "@/component/navbar/navbar";
import Footer from "@/component/footer/footer";
import Policy from "@/component/policy/policy";

export default function Page() {
  return (
    <div className={styles.policy}>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="content">
        <Policy></Policy>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
