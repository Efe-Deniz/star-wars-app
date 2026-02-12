export const starshipKeys = {
    all: ['starships'] as const,
    lists: () => [...starshipKeys.all, 'list'] as const,
    list: (page: number) => [...starshipKeys.lists(), { page }] as const,
    details: () => [...starshipKeys.all, 'detail'] as const,
    detail: (id: string) => [...starshipKeys.details(), id] as const,
    searches: () => [...starshipKeys.all, 'search'] as const,
    search: (query: string) => [...starshipKeys.searches(), query] as const,
};
