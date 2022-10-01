import type { DataObject, DataWithLink, RelatedLink, SelfLink } from "./Common";

export interface WebhookResource {
	id: string;
	type: "webhooks";
	attributes: WebhookAttributes;
	links?: SelfLink;
	relationships: {
		logs: {
			links?: RelatedLink;
		};
	};
}

export interface WebhookEventResource {
	id: string;
	type: "webhooks-events";
	attributes: WebhookEventAttributes;
	links?: SelfLink;
	relationships: {
		webhook: DataWithLink;
		transaction: DataWithLink;
	};
}

export interface WebhookDeliveryLogResource {
	id: string;
	type: "webhook-delivery-logs";
	attributes: WebhookDeliveryLogAttributes;
	links?: SelfLink;
	relationships: {
		webhookEvent: {
			data: DataObject;
		};
	};
}

export interface WebhookAttributes {
	url: string;
	description?: string;
	secretKey?: string;
	createdAt: Date;
}

export interface WebhookDeliveryLogAttributes {
	request: {
		body: string;
	};
	response: {
		statusCode: number;
		body: string;
	} | null;
	deliveryStatus: WebhookDeliveryStatus;
	createdAt: Date;
}

export interface WebhookEventAttributes {
	eventType: WebhookEventType;
	createdAt: Date;
}

export enum WebhookEventType {
	created = "TRANSACTION_CREATED",
	settled = "TRANSACTION_SETTLED",
	deleted = "TRANSACTION_DELETED",
	ping = "PING",
}

export enum WebhookDeliveryStatus {
	delivered = "DELIVERED",
	undeliverable = "UNDELIVERABLE",
	bad_response_code = "BAD_RESPONSE_CODE",
}
