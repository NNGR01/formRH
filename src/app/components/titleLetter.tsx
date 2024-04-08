import React from "react";
import styles from "../styles/page.module.css";

interface TitleLetterProps {
    letter : string,
    title: string
}

const TitleLetter:React.FC<TitleLetterProps> = ({letter, title}) => {
    return (
        <div className={styles.titleComponent}>
        <h4 className={styles.titleLetter}>{letter}</h4>
        <h4 className="text-black">
          {title}
        </h4>
      </div>
    )
};

export default TitleLetter;