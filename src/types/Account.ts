import type { MoneyObject, RelatedLink, SelfLink } from "./Common";

export interface AccountResource {
	id: string;
	type: "accounts";
	links?: SelfLink;
	attributes: {
		displayName: string;
		accountType: AccountTypeEnum;
		balance: MoneyObject;
	};
	relationships: {
		transactions: {
			links?: RelatedLink;
		};
	};
}

export enum AccountTypeEnum {
	saver = "SAVER",
	transactional = "TRANSACTIONAL",
}
