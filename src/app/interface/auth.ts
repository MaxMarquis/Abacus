export interface UserCredentials {
	email: string;
	username: string;
	password: string;
}

export interface User {
	readonly token: string;
	readonly email: string;
	readonly username: string;
	readonly _id: string;
}

export interface UserDTO {
	success: boolean;
	data: {
		token: string;
		user: {
			authId: string;
			authToken: string;
			authType: string;
			avatar: {
				url: string | null,
				alt: string | null,
				name: string | null,
			};
			createdAt: string;
			email: string;
			firstname: string;
			lastname: string;
			readonly password: string;
			updatedAt: string;
			username: string;
			_id: string;
			[key: string]: unknown;
		}
	}
}