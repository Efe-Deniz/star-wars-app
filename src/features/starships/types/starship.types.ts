export interface Starship {
    id: string;
    name: string;
    model: string;
    manufacturer: string;
    costInCredits: number | null;
    starshipClass: string;
    length: number | null;
    crew: {
        min: number | null;
        max: number | null;
    };
    passengers: number | null;

    maxAtmospheringSpeed: number | null;
    hyperdriveRating: number | null;
    mglt: number | null;

    cargoCapacity: number | null;
    consumables: string | null;

    filmIds: string[];
    pilotIds: string[];

    created: Date;
    edited: Date;
}

export interface StarshipListItem {
    id: string;
    name: string;
    model: string;
    starshipClass: string;
    maxAtmospheringSpeed: number | null;
    crew: {
        min: number | null;
        max: number | null;
    };
}

export interface StarshipPaginationInfo {
    conut: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    currentPage: number;
}
