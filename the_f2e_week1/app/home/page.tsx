import Navbar from "@/component/navbar/navbar";
import React from "react";
import styles from './home.module.scss'
import Banner from "@/component/banner/banner";

export default function Home() {
    return <div className={styles.home}>
        <div>
            <Navbar></Navbar>
        </div>
        <div className={styles.banner}>
            <Banner></Banner>
        </div>
    </div>;

}