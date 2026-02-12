import { axiosInstance } from '@/lib/axios';

import type { StarshipApiResponse, StarshipListResponse } from '@/features/starships/types';
import { transformStarship, transformStarships } from '@/features/starships/utils/transformers';
import type { Starship } from '@/features/starships/types';

const ENDPOINTS = {
    LIST: '/starships/',
    DETAIL: (id: string) => `/starships/${id}/`,
    SEARCH: '/starships/',
} as const;

export const fetchStarships = async (page: number = 1) => {
    const response = await axiosInstance.get<StarshipListResponse>(ENDPOINTS.LIST, {
        params: { page },
    });

    const { results, count, next, previous } = response.data;

    const transformedResults = transformStarships(results);

    return {
        results: transformedResults,
        count,
        next,
        previous,
    };
};

export const fetchStarship = async (id: string): Promise<Starship> => {
    const response = await axiosInstance.get<StarshipApiResponse>(ENDPOINTS.DETAIL(id));

    const transformedStarship = transformStarship(response.data);
    return transformedStarship;
};

export const searchStarships = async (query: string) => {
    if (!query.trim()) {
        return fetchStarships(1);
    }

    const response = await axiosInstance.get<StarshipListResponse>(ENDPOINTS.SEARCH, {
        params: { search: query },
    });
    const { results, count } = response.data;
    const transformedResults = transformStarships(results);
    return {
        results: transformedResults,
        count,
    };
};
