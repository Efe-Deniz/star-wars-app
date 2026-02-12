import { Card } from '@/components/ui/Card';
import type { Starship } from '@/features/starships/types';
import styles from './StarshipCard.module.css';

interface StarshipCardProps {
    starship: Starship;
    onClick?: (id: string) => void;
}

export const StarshipCard = ({ starship, onClick }: StarshipCardProps) => {
    const handleClick = () => {
        onClick?.(starship.id);
    };
    const formatCrew = () => {
        const { min, max } = starship.crew;

        if (min === null && max === null) {
            return 'Unknown';
        }

        if (min === max) {
            return min?.toLocaleString();
        }

        return `${min?.toLocaleString()} - ${max?.toLocaleString()};`;
    };

    const formatSpeed = () => {
        if (starship.maxAtmospheringSpeed === null) {
            return 'N/A';
        }

        return `${starship.maxAtmospheringSpeed.toLocaleString()} km/h`;
    };

    return (
        <Card onClick={handleClick} hoverable className={styles.card}>
            <div className={styles.header}>
                <h3 className={styles.name}>{starship.name}</h3>
                <span className={styles.class}>{starship.starshipClass}</span>
            </div>
            <p className={styles.model}>{starship.model}</p>

            <div className={styles.stats}>
                <div className={styles.stat}>
                    <span className={styles.statLabel}>Max Speed</span>
                    <span className={styles.statValue}>{formatSpeed()}</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.statLabel}>Crew</span>
                    <span className={styles.statLValue}>{formatCrew()}</span>
                </div>
            </div>
            <div className={styles.footer}>
                <span className={styles.hint}>Click for details</span>
            </div>
        </Card>
    );
};
