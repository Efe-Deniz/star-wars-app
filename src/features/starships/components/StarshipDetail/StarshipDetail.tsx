import { useStarshipDetail } from '@/features/starships/hooks';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Spinner } from '@/components/ui/Spinner';
import styles from './StarshipDetail.module.css';

/**
 * StarshipDetail Props
 */
interface StarshipDetailProps {
    id: string;
    onBack?: () => void;
}

export const StarshipDetail = ({ id, onBack }: StarshipDetailProps) => {
    const { data: starship, isLoading, error } = useStarshipDetail(id);

    if (isLoading) {
        return (
            <div className={styles.centerContainer}>
                <Spinner size="large" />
                <p className={styles.loadingText}>Loading starship details...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.centerContainer}>
                <div className={styles.errorBox}>
                    <h2 className={styles.errorTitle}>Error Loading Starship</h2>
                    <p className={styles.errorMessage}>
                        {error instanceof Error ? error.message : 'Starship not found'}
                    </p>
                    {onBack && <Button onClick={onBack}>Back to List</Button>}
                </div>
            </div>
        );
    }

    if (!starship) {
        return (
            <div className={styles.centerContainer}>
                <p className={styles.emptyText}>Starship not found</p>
                {onBack && <Button onClick={onBack}>Back to List</Button>}
            </div>
        );
    }

    const formatCrew = () => {
        const { min, max } = starship.crew;

        if (min === null && max === null) return 'Unknown';
        if (min === max) return min?.toLocaleString();

        return `${min?.toLocaleString()} - ${max?.toLocaleString()}`;
    };

    const formatNumber = (value: number | null) => {
        return value !== null ? value.toLocaleString() : 'Unknown';
    };

    const formatCurrency = (value: number | null) => {
        return value !== null ? `${value.toLocaleString()} credits` : 'Unknown';
    };

    return (
        <div className={styles.container}>
            {/* Back Button */}
            {onBack && (
                <Button onClick={onBack} variant="ghost" className={styles.backButton}>
                    ← Back to List
                </Button>
            )}

            {/* Header Card */}
            <Card className={styles.headerCard}>
                <div className={styles.header}>
                    <div>
                        <h1 className={styles.name}>{starship.name}</h1>
                        <p className={styles.model}>{starship.model}</p>
                    </div>
                    <span className={styles.class}>{starship.starshipClass}</span>
                </div>
                <p className={styles.manufacturer}>{starship.manufacturer}</p>
            </Card>

            {/* Details Grid */}
            <div className={styles.detailsGrid}>
                {/* Specifications */}
                <Card>
                    <h2 className={styles.sectionTitle}>Specifications</h2>
                    <div className={styles.infoGrid}>
                        <InfoItem label="Cost" value={formatCurrency(starship.costInCredits)} />
                        <InfoItem
                            label="Length"
                            value={
                                starship.length !== null
                                    ? `${formatNumber(starship.length)} m`
                                    : 'Unknown'
                            }
                        />
                        <InfoItem
                            label="Max Speed"
                            value={
                                starship.maxAtmospheringSpeed !== null
                                    ? `${formatNumber(starship.maxAtmospheringSpeed)} km/h`
                                    : 'N/A'
                            }
                        />
                        <InfoItem
                            label="Hyperdrive Rating"
                            value={starship.hyperdriveRating?.toString() ?? 'Unknown'}
                        />
                        <InfoItem label="MGLT" value={formatNumber(starship.mglt)} />
                    </div>
                </Card>

                {/* Capacity */}
                <Card>
                    <h2 className={styles.sectionTitle}>Capacity</h2>
                    <div className={styles.infoGrid}>
                        <InfoItem label="Crew" value={formatCrew()} />
                        <InfoItem label="Passengers" value={formatNumber(starship.passengers)} />
                        <InfoItem
                            label="Cargo Capacity"
                            value={
                                starship.cargoCapacity !== null
                                    ? `${formatNumber(starship.cargoCapacity)} kg`
                                    : 'Unknown'
                            }
                        />
                        <InfoItem label="Consumables" value={starship.consumables ?? 'Unknown'} />
                    </div>
                </Card>

                {/* Related */}
                <Card>
                    <h2 className={styles.sectionTitle}>Related</h2>
                    <div className={styles.infoGrid}>
                        <InfoItem label="Films" value={`${starship.filmIds.length} film(s)`} />
                        <InfoItem
                            label="Pilots"
                            value={
                                starship.pilotIds.length > 0
                                    ? `${starship.pilotIds.length} pilot(s)`
                                    : 'No known pilots'
                            }
                        />
                    </div>
                </Card>
            </div>
        </div>
    );
};

/**
 * InfoItem Component (Helper)
 */
interface InfoItemProps {
    label: string;
    value: string;
}

const InfoItem = ({ label, value }: InfoItemProps) => (
    <div className={styles.infoItem}>
        <span className={styles.infoLabel}>{label}</span>
        <span className={styles.infoValue}>{value}</span>
    </div>
);
