import type { AccountResource } from './Account';
import type { TransactionResource } from './Transaction';
import type { WebhookResource, WebhookEventResource, WebhookDeliveryLogResource } from './Webhook';

export interface APIResponse {
	data?: AccountResource | AccountResource[] | TransactionResource | TransactionResource[] | WebhookResource | WebhookEventResource | WebhookDeliveryLogResource[];
	errors?: ErrorObject[];
	meta?: {
		id: string;
		statusEmoji: string;
	}
	links?: {
		prev: string | null;
		next: string | null;
	}
}

export interface ErrorObject {
	status: string;
	title: string;
	detail: string;
	source?: {
		parameter?: string;
		pointer?: string;
	}
}
