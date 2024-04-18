import styles from '@/styles/pages/meetus/meetus.module.scss';

export default function MeetUs() {
    return (
      <div>
        
        <div className={styles.intro}>
        
          <h1>Meet Us!</h1>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        
          </div>

        <div className={styles.board}>
          <h1> Meet our Board Members </h1>

          <div className={styles.parent}>

            <div className={styles.child}>

              <div className={styles.childtop}>
                top
              </div>
              <div>
                bottom
              </div>

            </div>

            <div className={styles.child}>child 2</div>
            <div className={styles.child}>child 3</div>
          </div>

        </div>

      </div>
    );
  }
  