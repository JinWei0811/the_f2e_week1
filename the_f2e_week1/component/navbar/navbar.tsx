import React from "react";
import styles from "./navbar.module.scss"
import Image from "next/image";

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <Image
                    src={"/logo.png"}
                    alt="logo"
                    width={163}
                    height={66}
                >
                </Image>
            </div>
            <div className={styles.navItem}>
                <span className="h4">最新活動</span>
                <span className="h4">政策議題</span>
                <span className="h4">小額捐款</span>
            </div>

        </div>
    )
}