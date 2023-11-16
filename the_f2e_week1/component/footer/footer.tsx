import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.navItem}>
        <Link href={"/home"}>
          <span className="h5">首頁</span>
        </Link>
        <Link href={"/news"}>
          <span className="h5">最新活動</span>
        </Link>
        <span className="h5">政策議題</span>
        <span className="h5">小額捐款</span>
      </div>
      <div className={styles.info}>
        <div className={styles.profile}>
          <Image src={"/location.png"} alt="" width={16} height={22.857} />
          <span className="h6">喵星區，毛茸茸大道88號，喵喵大樓3樓</span>
        </div>
        <div className={styles.profile}>
          <Image src={"/mail.png"} alt="" width={16} height={12.8} />
          <span className="h6">meowoffice@linmeow.tw</span>
        </div>
        <div className={styles.profile}>
          <Image src={"/phone.png"} alt="" width={16} height={16} />
          <span className="h6">(02) 888-5678 </span>
        </div>
      </div>
      <div className={styles.copyright}>
        <span>© 2023 喵立翰 版權所有。</span>
      </div>
    </div>
  );
}
