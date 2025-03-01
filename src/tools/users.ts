import { Tool } from "@modelcontextprotocol/sdk/types.js";

/* Tool definitions */
export const EDUBASE_API_TOOLS_USERS: Tool[] = [
	// GET /user - Get/check user
	{
		name: 'edubase_get_user',
		description: "Get/check user.",
		inputSchema: {
			type: 'object',
			properties: {
				user: {
					type: 'string',
					description: 'user identification string'
				},
			},
			required: ['user'],
		},
	},

	// POST /user - Create new user account
	{
		name: 'edubase_post_user',
		description: "Create new user account.",
		inputSchema: {
			type: 'object',
			properties: {
				username: {
					type: 'string',
					description: 'username (4-64 characters)'
				},
				password: {
					type: 'string',
					description: 'password (4-64 characters). If not provided, a random initial password is generated'
				},
				first_name: {
					type: 'string',
					description: 'first name (1-64 characters)'
				},
				last_name: {
					type: 'string',
					description: 'last name (1-64 characters)'
				},
				full_name: {
					type: 'string',
					description: 'override automatic full name (1-255 characters)'
				},
				display_name: {
					type: 'string',
					description: 'override automatic display name (1-255 characters)'
				},
				email: {
					type: 'string',
					description: 'valid email address'
				},
				phone: {
					type: 'string',
					description: 'valid phone number in format "+prefix number" without special characters'
				},
				gender: {
					type: 'string',
					description: 'gender ("male", "female", or "other")'
				},
				birthdate: {
					type: 'string',
					description: 'date of birth'
				},
				exam: {
					type: 'boolean',
					description: 'user is only allowed to login when accessing exams'
				},
				group: {
					type: 'string',
					description: 'name of the user group (requires admin permissions)'
				},
				template: {
					type: 'string',
					description: 'a template ID for the new account'
				},
				language: {
					type: 'string',
					description: 'desired account language'
				},
				timezone: {
					type: 'string',
					description: 'desired timezone'
				},
				color: {
					type: 'string',
					description: 'desired favorite color (default/branding/red/blue/yellow/green/purple)'
				},
				must_change_password: {
					type: 'boolean',
					description: 'user is forced to change password on first login'
				},
				notify: {
					type: 'boolean',
					description: 'notify user via email (or SMS)'
				},
			},
			required: ['username', 'first_name', 'last_name', 'email'],
		},
	},

	// DELETE /user - Delete user
	{
		name: 'edubase_delete_user',
		description: "Delete user.",
		inputSchema: {
			type: 'object',
			properties: {
				user: {
					type: 'string',
					description: 'user identification string'
				},
			},
			required: ['user'],
		},
	},

	// GET /user:name - Get user's name
	{
		name: 'edubase_get_user_name',
		description: "Get user's name.",
		inputSchema: {
			type: 'object',
			properties: {
				user: {
					type: 'string',
					description: 'user identification string'
				},
			},
			required: ['user'],
		},
	},

	// POST /user:name - Update a user's name
	{
		name: 'edubase_post_user_name',
		description: "Update a user's name.",
		inputSchema: {
			type: 'object',
			properties: {
				user: {
					type: 'string',
					description: 'user identification string'
				},
				first_name: {
					type: 'string',
					description: 'first name (1-64 characters)'
				},
				last_name: {
					type: 'string',
					description: 'last name (1-64 characters)'
				},
				full_name: {
					type: 'string',
					description: 'full name (1-255 characters)'
				},
				display_name: {
					type: 'string',
					description: 'display name (1-255 characters)'
				},
			},
			required: ['user', 'first_name', 'last_name'],
		},
	},

	// GET /user:group - Get user's group
	{
		name: 'edubase_get_user_group',
		description: "Get user's group.",
		inputSchema: {
			type: 'object',
			properties: {
				user: {
					type: 'string',
					description: 'user identification string'
				},
			},
			required: ['user'],
		},
	},

	// POST /user:group - Update a user's group
	{
		name: 'edubase_post_user_group',
		description: "Update a user's group.",
		inputSchema: {
			type: 'object',
			properties: {
				user: {
					type: 'string',
					description: 'user identification string'
				},
				group: {
					type: 'string',
					description: 'user group code'
				},
			},
			required: ['user', 'group'],
		},
	},

	// GET /user:login - Get latest valid login link for user
	{
		name: 'edubase_get_user_login',
		description: "Get latest valid login link for user.",
		inputSchema: {
			type: 'object',
			properties: {
				user: {
					type: 'string',
					description: 'user identification string'
				},
			},
			required: ['user'],
		},
	},

	// POST /user:login - Generate login link
	{
		name: 'edubase_post_user_login',
		description: "Generate login link. If a valid link with the same settings exists, it will be returned instead of creating a new one.",
		inputSchema: {
			type: 'object',
			properties: {
				user: {
					type: 'string',
					description: 'user identification string'
				},
				redirect: {
					type: 'string',
					description: 'redirect after a successful login (URI path or [{content_type}:{tag}])'
				},
				expires: {
					type: 'string',
					description: 'expiry in days (1-30) or YYYY-MM-DD'
				},
				logins: {
					type: 'number',
					description: 'total count the link can be used to login users'
				},
				template: {
					type: 'string',
					description: 'a template ID for the login link'
				},
				short: {
					type: 'boolean',
					description: 'generate shortened (eduba.se) link (only if feature is enabled on EduBase)'
				},
			},
			required: ['user'],
		},
	},

	// DELETE /user:login - Delete a previously generated login link
	{
		name: 'edubase_delete_user_login',
		description: "Delete a previously generated login link.",
		inputSchema: {
			type: 'object',
			properties: {
				user: {
					type: 'string',
					description: 'user identification string'
				},
				url: {
					type: 'string',
					description: 'generated login link to be invalidated'
				},
			},
			required: ['user', 'url'],
		},
	},

	// GET /user:search - Lookup user by email, username or code
	{
		name: 'edubase_get_user_search',
		description: "Lookup user by email, username or code.",
		inputSchema: {
			type: 'object',
			properties: {
				query: {
					type: 'string',
					description: 'query string'
				},
			},
			required: ['query'],
		},
	},

	// POST /user:assume - Assume user for next requests with assume token
	{
		name: 'edubase_post_user_assume',
		description: "Assume user for next requests with assume token.",
		inputSchema: {
			type: 'object',
			properties: {
				user: {
					type: 'string',
					description: 'user identification string, username or email address'
				},
				password: {
					type: 'string',
					description: 'password or user secret'
				},
			},
			required: ['user'],
		},
	},

	// DELETE /user:assume - Revoke assume token
	{
		name: 'edubase_delete_user_assume',
		description: "Revoke assume token.",
		inputSchema: {
			type: 'object',
			properties: {
				token: {
					type: 'string',
					description: 'assume token'
				},
			},
			required: ['token'],
		},
	},
];

/* Output schema definitions */
export const EDUBASE_API_TOOLS_USERS_OUTPUT_SCHEMA: object = {
	// GET /user - Get/check user
	edubase_get_user: {
		type: 'object',
		properties: {
			user: {
				type: 'string',
				description: 'user identification string'
			},
			name: {
				type: 'string',
				description: 'full name'
			},
			status: {
				type: 'boolean',
				description: 'user is enabled'
			},
			exam: {
				type: 'boolean',
				description: 'exam account'
			},
		},
	},

	// POST /user - Create new user account
	edubase_post_user: {
		type: 'object',
		properties: {
			user: {
				type: 'string',
				description: 'user identification string'
			},
			username: {
				type: 'string',
				description: 'username, only if exam=false'
			},
			password: {
				type: 'string',
				description: 'password, only if exam=false'
			},
		},
	},

	// GET /user:name - Get user's name
	edubase_get_user_name: {
		type: 'object',
		properties: {
			user: {
				type: 'string',
				description: 'the user identification string'
			},
			first_name: {
				type: 'string',
				description: 'first name'
			},
			last_name: {
				type: 'string',
				description: 'last name'
			},
			full_name: {
				type: 'string',
				description: 'full name'
			},
			display_name: {
				type: 'string',
				description: 'display name'
			},
		},
	},

	// POST /user:name - Update a user's name
	edubase_post_user_name: {
		type: 'object',
		properties: {
			user: {
				type: 'string',
				description: 'the user identification string'
			},
			success: {
				type: 'boolean',
				description: 'operation is successful'
			},
			changed: {
				type: 'boolean',
				description: 'name has been changed'
			},
		},
	},

	// GET /user:group - Get user's group
	edubase_get_user_group: {
		type: 'object',
		properties: {
			user: {
				type: 'string',
				description: 'the user identification string'
			},
			group: {
				type: 'string',
				description: 'user group code'
			},
		},
	},

	// POST /user:group - Update a user's group
	edubase_post_user_group: {
		type: 'object',
		properties: {
			user: {
				type: 'string',
				description: 'the user identification string'
			},
			success: {
				type: 'boolean',
				description: 'operation is successful'
			},
			changed: {
				type: 'boolean',
				description: 'name has been changed'
			},
		},
	},

	// GET /user:login - Get latest valid login link for user
	edubase_get_user_login: {
		type: 'object',
		properties: {
			user: {
				type: 'string',
				description: 'the user identification string'
			},
			url: {
				type: 'string',
				description: 'the login link'
			},
			valid: {
				type: 'string',
				description: 'validity (end of day) of the generated link'
			},
		},
	},

	// POST /user:login - Generate login link
	edubase_post_user_login: {
		type: 'object',
		properties: {
			user: {
				type: 'string',
				description: 'the user identification string'
			},
			url: {
				type: 'string',
				description: 'the login link'
			},
			valid: {
				type: 'string',
				description: 'validity of the generated link'
			},
			count: {
				type: 'number',
				description: 'maximum number the link can be used to login'
			},
		},
	},

	// GET /user:search - Lookup user by email, username or code
	edubase_get_user_search: {
		type: 'object',
		properties: {
			user: {
				type: 'string',
				description: 'user identification string'
			},
			exam: {
				type: 'boolean',
				description: 'exam account'
			},
		},
	},

	// POST /user:assume - Assume user for next requests with assume token
	edubase_post_user_assume: {
		type: 'object',
		properties: {
			user: {
				type: 'string',
				description: 'user identification string'
			},
			token: {
				type: 'string',
				description: 'assume token'
			},
			valid: {
				type: 'string',
				description: 'validity of the generated token'
			},
		},
	},
};
