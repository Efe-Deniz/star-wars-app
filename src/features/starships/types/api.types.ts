export interface StarshipApiResponse {
    name: string;
    model: string;
    manufacturer: string;

    cost_in_credits: string;
    starship_class: string;

    lenght: string;

    crew: string;
    passengers: string;

    max_atmosphering_speed: string;
    hyperdrive_rating: string;
    MGLT: string;

    cargo_capacity: string;
    consumables: string;

    films: string[];
    pilots: string[];

    url: string;
    created: string;
    edited: string;
}

export interface SwapiPaginatedResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

export type StarshipListResponse = SwapiPaginatedResponse<StarshipApiResponse>;
