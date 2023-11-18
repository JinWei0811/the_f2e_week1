import React from "react";
import styles from "./navbar.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ parentStyles }: any) {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href={"/home"}>
          <Image src={"/logo.png"} alt="logo" width={163} height={66} />
        </Link>
      </div>
      <div className={styles.navItem}>
        <Link href={"/news"}>
          <span className={`h4 ${parentStyles.nav_news}`}>最新活動</span>
        </Link>
        <Link href={"/policy"}>
          <span className={`h4 ${parentStyles.nav_policy}`}>政策議題</span>
        </Link>
        <Link href={"/donation"}>
          <span className={`h4 ${parentStyles.nav_donation}`}>小額捐款</span>
        </Link>
      </div>
    </div>
  );
}
