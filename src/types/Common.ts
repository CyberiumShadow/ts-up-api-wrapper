export type Nullable<T> = T | null;

export interface NullableDataWithLink {
	data: Nullable<DataObject>;
	links?: RelatedLink;
}

export interface DataWithLink {
	data: DataObject;
	links?: RelatedLink;
}

export interface DataObject {
		id: string;
		type: string;
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
	prev: Nullable<string>;
	next: Nullable<string>;
}
