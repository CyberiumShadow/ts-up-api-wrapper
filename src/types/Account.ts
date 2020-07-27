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
