// Most typings here are pulled from https://github.com/epetousis/up-webhook-ingester/blob/master/src/upbank/transaction.d.ts

import { NullableDataWithLink, DataWithLink, MoneyObject } from './Common';

export interface TransactionResource {
	id: string;
	type: 'transactions';
	attributes: TransactionAttributes;
	links?: {
		self: string
	};
	relationships: {
		account: DataWithLink
		transferAccount: NullableDataWithLink
		category: NullableDataWithLink
		parentCategory: NullableDataWithLink
		tags: DataWithLink
	}
}

export interface TransactionAttributes {
	status: TransactionStatus;
	rawText: string | null;
	description: string;
	message: string | null;
	holdInfo: HoldInfoObject | null;
	roundUp: RoundUpObject | null;
	cashback: CashbackObject | null;
	amount: MoneyObject;
	foreignAmount: MoneyObject | null;
	settledAt: Date | null;
	createdAt: Date;
}

export enum TransactionStatus {
    held = 'HELD',
    settled = 'SETTLED'
}

export interface HoldInfoObject {
    amount:        MoneyObject;
    foreignAmount: MoneyObject | null;
}

export interface RoundUpObject {
    amount:        MoneyObject;
    boostPortion: MoneyObject | null;
}

export interface CashbackObject {
    description: string;
    amount:      MoneyObject;
}
