import fetch from 'node-fetch';
import { ApiURL } from '../util/Constants';

import type { Response } from 'node-fetch';

const headers = {
	Authorization: `Bearer ${process.env.UP_PAT}`
}

export const getAllAccounts = async (): Promise<any> => {
	// TODO: Implement pagination as per API
	const response: Response = await fetch(`${ApiURL}/accounts`, { headers });

	return response.json();
}

export const getAccount = async (id: string): Promise<any> => {
	const response: Response = await fetch(`${ApiURL}/accounts/${id}`, { headers });

	return response.json();
}

export const getAllTransactions = async (): Promise<any> => {
	// TODO: Implement pagination as per API
	const response: Response = await fetch(`${ApiURL}/transactions`, { headers });

	return response.json();

}

export const getTransaction = async (id: string): Promise<any> => {
	const response: Response = await fetch(`${ApiURL}/transactions/${id}`, { headers });

	return response.json();

}

export const getTransactionByAccount = async (accountID: string): Promise<any> => {
	// TODO: Implement pagination as per API
	const response: Response = await fetch(`${ApiURL}/accounts/${accountID}/transactions`, { headers });

	return response.json();
}

export const getAllWebhooks = async (): Promise<any> => {
	// TODO: Implement pagination as per API
	const response: Response = await fetch(`${ApiURL}/webhooks`, { headers });

	return response.json();

}

export const createWebhook = async (url: string): Promise<any> => {
	const response: Response = await fetch(`${ApiURL}/webhooks`, {
		method: 'POST', headers, body: JSON.stringify({
			data: {
				attributes: {
					url
				}
			}
		})
	});

	return response.json();
}

export const getWebhook = async (webHookID: string): Promise<any> => {
	const response: Response = await fetch(`${ApiURL}/webhooks/${webHookID}`, { headers });

	return response.json();
}

export const deleteWebhook = async (webHookID: string): Promise<number> => {
	const response: Response = await fetch(`${ApiURL}/webhooks/${webHookID}`, { headers });

	return response.status;
}

export const pingWebhook = async (webHookID: string): Promise<any> => {
	const response: Response = await fetch(`${ApiURL}/webhooks/${webHookID}/ping`, { method: 'POST', headers });

	return response.json();
}

export const getWebhookLogs = async (webHookID: string): Promise<any> => {
	// TODO: Implement pagination as per API
	const response: Response = await fetch(`${ApiURL}/webhooks/${webHookID}/logs`, { headers });

	return response.json();

}

export const ping = async (): Promise<any> => {
	const response: Response = await fetch(`${ApiURL}/util/ping`);

	return response.json();
}
