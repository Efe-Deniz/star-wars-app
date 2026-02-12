import { useStarships } from '@/features/starships/hooks';
import { StarshipCard } from '@/features/starships/components/StarshipCard';
import { Button } from '@/components/ui/Button';
import { Spinner } from '@/components/ui/Spinner';
import styles from './StarshipList.module.css';

interface StarshipListProps {
    onStarshipClick?: (id: string) => void;
}

export const StarshipList = ({ onStarshipClick }: StarshipListProps) => {
    const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage, error } =
        useStarships();

    if (isLoading) {
        return (
            <div className={styles.centerContainer}>
                <Spinner size="large" />
                <p className={styles.loadingText}>Loading starships...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.centerContainer}>
                <div className={styles.errorBox}>
                    <h2 className={styles.errorTitle}>Error Loading Starships</h2>
                    <p className={styles.errorMessage}>
                        {error instanceof Error ? error.message : 'An error occurred'}
                    </p>
                    <Button onClick={() => window.location.reload()}>Reload Page</Button>
                </div>
            </div>
        );
    }

    if (!data?.starships || data.starships.length === 0) {
        return (
            <div className={styles.centerContainer}>
                <p className={styles.emptyText}>No starships found</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.listHeader}>
                <h2 className={styles.title}>Star Wars Starships</h2>
                <span className={styles.count}>
                    {data.starships.length} of {data.count}
                </span>
            </div>

            {/* Grid */}
            <div className={styles.grid}>
                {data.starships.map((starship) => (
                    <StarshipCard key={starship.id} starship={starship} onClick={onStarshipClick} />
                ))}
            </div>

            {/* Load More Button */}
            {hasNextPage && (
                <div className={styles.loadMoreContainer}>
                    <Button
                        onClick={() => fetchNextPage()}
                        loading={isFetchingNextPage}
                        disabled={isFetchingNextPage}
                        variant="primary"
                    >
                        {isFetchingNextPage ? 'Loading...' : 'Load More'}
                    </Button>
                </div>
            )}

            {/* End message */}
            {!hasNextPage && data.starships.length > 0 && (
                <div className={styles.endMessage}>
                    <p>You've seen all {data.count} starships! 🚀</p>
                </div>
            )}
        </div>
    );
};
