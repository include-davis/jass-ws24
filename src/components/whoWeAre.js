// import React from "react"
import styles from '@/styles/components/whoweare/whoweare.module.scss';

const button = {
    message: 'Download our Constitution',
};

export function WhoWeAre({ data }) {
    console.log();
    const handleClick = () => {
        window.open(`${data.link}`, '_blank');
    };
    return (
        <div className={styles.intro}>
            <div className={styles.body}>
                <div className={styles.box}>
                    <h1 className={styles.title}>Who We Are</h1>

                    <div className={styles.paragraphscontainer}>
                        <div className={styles.paragraphbox}>
                            {data.english}
                        </div>
                        <div className={styles.paragraphbox}>
                            {data.japanese}
                        </div>
                    </div>

                    <button
                        className={styles.button}
                        id={styles.downloadButton}
                        onClick={handleClick}
                    >
                        {button.message}
                    </button>
                </div>
            </div>
        </div>
    );
}
