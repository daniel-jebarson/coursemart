'use client'
import React from 'react'
import styles from './gallery.module.css'


const Modal = ({ children, show, onClose, title }) => {
    return (
      show && (
        <>
          <div className={styles.modalbackdrop} onClick={onClose} />
          <div className={`${styles.modalwrapper} ${show ? "active" : ""}`}>
            <div className={styles.modalcontent}>
              <div className={styles.modalheader}>
                <div className={styles.modaltitle}>{title}</div>
                <div onClick={onClose} className={styles.modalclose}>
                  X
                </div>
              </div>
              <div className={styles.modalbody}>{children}</div>
            </div>
          </div>
        </>
      )
    );
  };

export default Modal