//Temel button componenti

import styles from './Button.module.css';

/**
 * -children: Button içinde gösterilecek içerik->text,icon
 * -onClick->Tiklama event handler
 * -variant->Buton tipi
 * -disabled:Disable durumu
 * -loading->Yükleniyor durumu
 * -type->HTML buton type (button,submit,reset)
 */

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'ghost';
    disabled?: boolean;
    loading?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
    children,
    onClick,
    variant = 'primary',
    disabled = false,
    loading = false,
    type = 'button',
}: ButtonProps) => {
    //CSS class'larını birleştir
    const buttonClasses = [styles.button, styles[variant], loading && styles.loading]
        .filter(Boolean) //false değerleri filtrele yani çıkar
        .join(' '); //space ile birleştir

    return (
        <button
            type={type}
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled || loading}
        >
            {/**loading durumunda spinner göster */}
            {loading && <span className={styles.spinner}> 🔄 </span>}

            {/**buton içeriği */}
            <span className={styles.content}>{children}</span>
        </button>
    );
};
