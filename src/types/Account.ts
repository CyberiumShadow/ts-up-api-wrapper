import { MoneyObject } from "./Common";

export interface AccountResource {
	id: string;
	type: 'accounts';
	links?: {
		self: string
	};
	attributes: {
		displayName: string
		accountType: AccountTypeEnum
		balance: MoneyObject
	}
	relationships: {
		transactions: {
			links?: {
				related: string;
			}
		}
	}
}

export enum AccountTypeEnum {
	saver = 'SAVER',
	transactional = 'TRANSACTIONAL'
}