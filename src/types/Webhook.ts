export interface WebhookResource {
    id: string;
    type: 'webhooks';
    attributes: WebhookAttributes;
    links?: {
        self: string;
    };
    relationships: {
        logs: {
            links?: {
                related: string;
            };
        };
    };
};

export interface WebhookEventResource {
    id: string;
    type: 'webhooks-events';
    attributes: WebhookEventAttributes;
    links?: {
        self: string;
    };
    relationships: {
        webhook: {
            links?: {
                related: string;
            };
            data: {
                type: string;
                id: string;
            };
        };
        transaction: {
            links?: {
                related: string;
            };
            data: {
                type: string;
                id: string;
            };
        };
    };
};

export interface WebhookDeliveryLogResource {
    id: string;
    type: 'webhook-delivery-logs';
    attributes: WebhookDeliveryLogAttributes;
    links?: {
        self: string;
    };
    relationships: {
        webhookEvent: {
            data: {
                type: string;
                id: string;
            };
        };
    };
};

export interface WebhookAttributes {
    url: string;
    secretKey?: string;
    createdAt: Date;
};

export interface WebhookEventAttributes {
    eventType: WebhookEventType;
    createdAt: Date;
};

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
};

export enum WebhookEventType {
    created = 'TRANSACTION_CREATED',
    settled = 'TRANSACTION_SETTLED',
    deleted = 'TRANSACTION_DELETED',
    ping = 'PING'
};

export enum WebhookDeliveryStatus {
    delivered = 'DELIVERED',
    undeliverable = 'UNDELIVERABLE',
    bad_response_code = 'BAD_RESPONSE_CODE'
}
