import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 6 * 1000,
            gcTime: 10 * 60 * 1000,
            retry: 1,
            retryDelay: (attemprIndex) => Math.min(1000 * 2 ** attemprIndex, 30000),
            refetchOnWindowFocus: false,
            refetchOnReconnect: true,
            refetchOnMount: true,
        },
        mutations: {
            retry: 1,
        },
    },
});
