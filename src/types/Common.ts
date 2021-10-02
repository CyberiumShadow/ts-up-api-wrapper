export interface NullableDataWithLink {
    data: {
        id: string;
        type: string;
    } | null;
    links?: {
        related: string;
    }
}

export interface DataWithLink {
    data: {
        id: string;
        type: string;
    }
    links?: {
        related: string;
    };
}