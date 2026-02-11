import styles from './Spinner.module.css';

interface SpinnerProps {
    //-size:Spinner boyutu
    //-color:spinner rengini alacak
    size: 'small' | 'medium' | 'large';
    color?: 'primary' | 'accent' | 'white';
}

//spinner componenti

export const Spinner = ({ size = 'medium', color = 'primary' }: SpinnerProps) => {
    //css classlarını birleştir
    const spinnerClasses = [styles.spinner, styles[size], styles[color]].join(' ');

    return (
        <div className={spinnerClasses} role="status" aria-label="Loading">
            <svg className={styles.svg} viewBox="0 0 50 50">
                <circle
                    className={styles.circle}
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    strokeWidth="4"
                />
            </svg>
            <span className={styles.srOnly}>Loading...</span>
        </div>
    );
};
