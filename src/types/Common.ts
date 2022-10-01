export interface NullableDataWithLink {
    data: DataObject | null;
    links?: RelatedLink
}

export interface DataWithLink {
    data: DataObject
    links?: RelatedLink;
}

export interface DataObject {
    data: {
        id: string;
        type: string;
    }
}

export interface MoneyObject {
    currencyCode: string;
    value: string;
    valueInBaseUnits: number;
}

export interface SelfLink {
    self: string;
}

export interface RelatedLink {
    related: string;
}

export interface IteratorLink {
    prev: string | null;
    next: string | null;
}