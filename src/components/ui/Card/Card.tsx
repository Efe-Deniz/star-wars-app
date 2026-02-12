import styles from './Card.module.css';

/**
 * -childeren:card içeriği->her şey olabilir
 * -onClick:tiklanabilir card için
 * -hoverable:Hover efekti olsun mu
 * -className:Ek css class
 */

interface CardProps {
    children: React.ReactNode;
    onClick?: () => void;
    hoverable?: boolean;
    className?: string;
}

export const Card = ({ children, onClick, hoverable, className }: CardProps) => {
    const cardClasses = [
        styles.card,
        hoverable && styles.hoverable,
        onClick && styles.clickable,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const Component = onClick ? 'button' : 'div';

    return (
        <Component
            className={cardClasses}
            onClick={onClick}
            // onClick yoksa button olmayacağı için sorun yok
            type={onClick ? 'button' : undefined}
        >
            {children}
        </Component>
    );
};
