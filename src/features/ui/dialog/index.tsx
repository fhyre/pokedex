import { ReactNode } from 'react';
import styles from './dialog.module.scss';

export function Dialog({ children, setModalVisible }: DialogProps) {
  return (
    <dialog
      className={styles.container}
      onClick={() => {
        setModalVisible(false);
      }}
    >
      {children}
    </dialog>
  );
}

type DialogProps = {
  children: ReactNode;
  setModalVisible: (status: boolean) => void;
};
