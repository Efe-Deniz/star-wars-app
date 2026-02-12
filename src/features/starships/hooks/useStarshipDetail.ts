import { useQuery } from '@tanstack/react-query';
import { fetchStarship } from '@/features/starships/api/starships.api';
import { starshipKeys } from '@/features/starships/api/queryKeys';

export const useStarshipDetail = (id: string) => {
    return useQuery({
        queryKey: starshipKeys.detail(id),
        queryFn: () => fetchStarship(id),
        enabled: !!id,
    });
};
