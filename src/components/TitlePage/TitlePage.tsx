import React from 'react';
import styles from './TitlePage.module.css';

interface IProps {
  onStart: () => any;
}

export const TitlePage: React.FC<IProps> = ({ onStart }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.headLine}>Wahrnehmungs Tests</h1>
        <div className={styles.time}>Zeitaufwand: 2min.</div>
        <div className={styles.assignment}>
          <p>Dir werden gleich für einen kurzen Moment Bilder gezeigt.</p>
          <p>Du musst beurteilen, ob ein Objekt aus der Reihe tanzt.</p>
        </div>
        <div className={styles.dataDisclaimer}>
          Die Daten werden alle lokal verarbeitet, am Ende kannst du mir deine
          Antworten per Mail oder einem Instant-Messenger deiner Wahl
          verschicken.
        </div>
      </div>

      <input
        className={styles.nextButton}
        type="submit"
        value="Start"
        onClick={onStart}
      />
    </div>
  );
};
