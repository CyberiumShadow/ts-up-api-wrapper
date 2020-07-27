import fetch from 'node-fetch';
import { ApiURL } from '../util/Constants';

const headers = {
	Authorization: `Bearer ${process.env.UP_PAT}`
}

export const getAllAccounts = async (): Promise<any> => {

}

export const getAccount = async (): Promise<any> => {

}

export const getAllTransactions = async (): Promise<any> => {

}

export const getTransaction = async (): Promise<any> => {

}

export const getTransactionByAccount = async (): Promise<any> => {

}

export const getAllWebhooks = async (): Promise<any> => {

}

export const createWebhook = async (): Promise<any> => {

}

export const getWebhook = async (): Promise<any> => {

}

export const deleteWebhook = async (): Promise<any> => {

}

export const pingWebhook = async (): Promise<any> => {

}

export const getWebhookLogs = async (): Promise<any> => {

}

export const ping = async (): Promise<any> => {

}
