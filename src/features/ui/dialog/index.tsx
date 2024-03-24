import { ReactNode } from 'react';
import styles from './dialog.module.scss';

export function Dialog({ children, setModalVisible }: IDialogProps) {
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

interface IDialogProps {
  children: ReactNode;
  setModalVisible: (status: boolean) => void;
}
