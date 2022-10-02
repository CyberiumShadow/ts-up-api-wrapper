import type { DataObject, Nullable, RelatedLink, SelfLink } from "./Common";

export interface CategoryResource {
	id: string;
	type: "categories";
    attributes: CategoryAttributes;
    relationships: {
        parent: CategoryRelationship
        children: CategoryRelationship
    }
    links?: SelfLink
}

export interface CategoryAttributes {
    name: string
}

export interface CategoryRelationship {
    data: Nullable<CategoryDataObject>
    links?: RelatedLink
}

export interface CategoryDataObject extends DataObject {
        type: "categories"
}