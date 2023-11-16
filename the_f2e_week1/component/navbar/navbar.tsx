import React from "react";
import styles from "./navbar.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href={"/home"}>
          <Image src={"/logo.png"} alt="logo" width={163} height={66} />
        </Link>
      </div>
      <div className={styles.navItem}>
        <Link href={"/news"}>
          <span className="h4">最新活動</span>
        </Link>
        <span className="h4">政策議題</span>
        <span className="h4">小額捐款</span>
      </div>
    </div>
  );
}
