import React from 'react';
import styles from './SvgShowBox.module.css';

interface IProps {
  visibleTime: number;
  onTimeOver: () => void;
}

export const SvgShowBox: React.FC<IProps> = ({
  visibleTime,
  onTimeOver,
  children,
}) => {
  React.useEffect(() => {
    setTimeout(() => {
      onTimeOver();
    }, visibleTime);
    return () => {};
  }, []);
  return <div className={styles.container}>{children}</div>;
};
