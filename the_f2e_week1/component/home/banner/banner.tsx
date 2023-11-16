import React from "react";
import styles from './banner.module.scss';


export default function Banner() {
    return <div className={styles.banner}>
        <div className={styles.slogan}>
            <span className={`h1`}>台灣的明天，喵先鋪路！</span>
            <span className={`h1`}>為喵星人，護台灣！</span>
        </div>
        <div className={styles.advocate}>
            <div className={styles.card}>
                <span className="h1">喵立翰</span>
                <span className="h5">MIAO LI-HAN</span>
                <span className="h5">立法委員候選人</span>
            </div>
            <div className={styles.content}>
                <span className="h4">主張</span>
                <div className={styles.line}></div>
                <span className="h6">我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。</span>
                <span className="h6">因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。</span>
            </div>
        </div>
    </div>
}