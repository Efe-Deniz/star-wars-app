import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchStarships } from '@/features/starships/api/starships.api';
import { starshipKeys } from '@/features/starships/api/queryKeys';

export const useStarships = () => {
    return useInfiniteQuery({
        queryKey: starshipKeys.lists(),
        queryFn: ({ pageParam }) => fetchStarships(pageParam),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            if (!lastPage.next) {
                return undefined;
            }
            return allPages.length + 1;
        },
        select: (data) => ({
            pages: data.pages,
            pageParams: data.pageParams,
            starships: data.pages.flatMap((page) => page.results),
            count: data.pages[0]?.count ?? 0,
        }),
    });
};
