import type { StarshipApiResponse, Starship } from '@/features/starships/types';

export const extractIdFromUrl = (url: string): string => {
    const cleaned = url.endsWith('/') ? url.slice(0, -1) : url;

    const lastSlashIndex = cleaned.lastIndexOf('/');

    return cleaned.substring(lastSlashIndex + 1);
};

export const parseNumber = (value: string): number | null => {
    if (!value || value === 'unknown' || value === 'n/a') {
        return null;
    }
    const cleaned = value.replace(/,/g, '');
    const parsed = Number(cleaned);
    return isNaN(parsed) ? null : parsed;
};

export const parseCrewRange = (crew: string): { min: number | null; max: number | null } => {
    if (!crew || crew === 'unknown' || crew === 'n/a') {
        return { min: null, max: null };
    }

    if (crew.includes('-')) {
        const [minStr, maxStr] = crew.split('-');
        return {
            min: parseNumber(minStr.trim()),
            max: parseNumber(maxStr.trim()),
        };
    }

    const value = parseNumber(crew);
    return {
        min: value,
        max: value,
    };
};

export const extractIdFromUrls = (urls: string[]): string[] => {
    return urls.map(extractIdFromUrl);
};

export const transformStarship = (apiResponse: StarshipApiResponse): Starship => {
    return {
        id: extractIdFromUrl(apiResponse.url),
        name: apiResponse.name,
        model: apiResponse.model,
        manufacturer: apiResponse.manufacturer,
        costInCredits: parseNumber(apiResponse.cost_in_credits),
        starshipClass: apiResponse.starship_class,
        length: parseNumber(apiResponse.lenght),
        crew: parseCrewRange(apiResponse.crew),
        passengers: parseNumber(apiResponse.passengers),
        maxAtmospheringSpeed: parseNumber(apiResponse.max_atmosphering_speed),
        hyperdriveRating: parseNumber(apiResponse.hyperdrive_rating),
        mglt: parseNumber(apiResponse.MGLT),
        cargoCapacity: parseNumber(apiResponse.cargo_capacity),
        consumables: apiResponse.consumables === 'unknown' ? null : apiResponse.consumables,
        filmIds: extractIdFromUrls(apiResponse.films),
        pilotIds: extractIdFromUrls(apiResponse.pilots),
        created: new Date(apiResponse.created),
        edited: new Date(apiResponse.edited),
    };
};

export const transformStarships = (apiResponses: StarshipApiResponse[]): Starship[] => {
    return apiResponses.map(transformStarship);
};
