import styles from '@/styles/components/confirmationModal/confirmationModal.module.scss';

export default function ConfirmationModal({
    pending,
    mailStatus,
    handleClose,
}) {
    return (
        <div className={styles.main_container}>
            {(pending || mailStatus) && (
                <div className={styles.confirmation_modal_backdrop}>
                    <div className={styles.confirmation_modal_container}>
                        {pending && (
                            <div className={styles.loading_container}>
                                <h3>Hold on while we receive your request.</h3>
                                <div className={styles.loader}></div>
                            </div>
                        )}
                        {mailStatus === 'success' && (
                            <div className={styles.ok_container}>
                                <h3 className={styles.ok_header}>
                                    Thank you for your message!
                                </h3>
                                <p className={styles.ok_text}>
                                    We will get back to you shortly.
                                </p>
                                <button
                                    className={styles.exit_button}
                                    onClick={handleClose}
                                >
                                    Got it
                                </button>
                            </div>
                        )}
                        {mailStatus === 'failed' && (
                            <div className={styles.ok_container}>
                                <h3 className={styles.ok_header}>Whoops!</h3>
                                <p className={styles.ok_text}>
                                    Something went wrong.
                                </p>
                                <button
                                    className={styles.exit_button}
                                    onClick={handleClose}
                                >
                                    Try again
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
