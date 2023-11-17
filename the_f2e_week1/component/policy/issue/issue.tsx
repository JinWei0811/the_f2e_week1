import React from "react";
import styles from "./issue.module.scss";

export default function Issue(props: any) {
  let contents: [] = props.contents ? props.contents : [];
  return (
    <div className={styles.issue}>
      <div className={styles.index}>
        <span className="h1">{props.index + 1}</span>
      </div>
      <div className={styles.title}>
        <span dangerouslySetInnerHTML={{ __html: props.title }}></span>
      </div>
      <div className={styles.contents}>
        <ol>
          {contents.map((content, index) => (
            <li key={index}>
              <span className="h6">{content}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
