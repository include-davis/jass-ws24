// import React from "react"
import styles from "@/styles/components/whoweare/whoweare.module.scss"

const button = {
  message:'Download our Constitution'
}

const paragraph1 = {
  text:"​The Japanese American Student Society or JASS (est. 1982) is a student organization at the University of California Davis with an eye to service, social, and cultural happenings. We deal primarily with the Japanese American community, but that doesn’t mean you have to be Japanese to join; anyone with an interest in Japanese culture and community can join our group! Everyone is welcome!"
}

const paragraph2 = {
  text:'私たち Japanese American Student Society (通称 JASS) は1982年に設立された、日系コミュニティーを中心に活動する生徒達の集まりです。日本人、日系人、日本の文化等に興味のある方、どんな方でも大歓迎です！是非ミーティングやイベントに足を運んでみてください​'
}

export default function Components() {
    return (
      <div class={styles.intro}>
        <div class={styles.body}>
          
            <div class={styles.box}>
            <h1 class={styles.title}>Who We Are</h1>

            <div class={styles.paragraphscontainer}>
               <div class={styles.paragraphbox}>
                 {paragraph1.text}
                </div>
               <div class={styles.paragraphbox}>
                 {paragraph2.text}
                </div>
             </div>

             <button class={styles.button} id={styles.downloadButton}>
                 {button.message}
               </button>

            </div>
          
        </div>
      </div>
    );
  }
  