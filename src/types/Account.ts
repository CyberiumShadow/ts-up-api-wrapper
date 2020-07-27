export interface AccountResponse {
	data?: AccountResource;
	errors?: Array<ErrorObject>[];
}

export interface AccountResource {
	id: string;
	type: 'accounts';
	links?: {
		self: string
	};
	relationships: {
		transactions: {
			links?: {
				related: string;
			}
		}
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
