import { Tool } from "@modelcontextprotocol/sdk/types.js";

/* Tool definitions */
export const EDUBASE_API_TOOLS_EXAMS: Tool[] = [
	// GET /exams - List owned and managed exams
	{
		name: 'edubase_get_exams',
		description: "List owned and managed exams.",
		inputSchema: {
			type: 'object',
			properties: {},
			required: [],
		},
	},

	// GET /exam - Get/check exam
	{
		name: 'edubase_get_exam',
		description: "Get/check exam.",
		inputSchema: {
			type: 'object',
			properties: {
				exam: {
					type: 'string',
					description: 'exam identification string'
				},
			},
			required: ['exam'],
		},
	},

	// GET /exam:users - List all users on an exam
	{
		name: 'edubase_get_exam_users',
		description: "List all users on an exam.",
		inputSchema: {
			type: 'object',
			properties: {
				exam: {
					type: 'string',
					description: 'exam identification string'
				},
			},
			required: ['exam'],
		},
	},

	// POST /exam:users - Assign user(s) to an exam
	{
		name: 'edubase_post_exam_users',
		description: "Assign user(s) to an exam.",
		inputSchema: {
			type: 'object',
			properties: {
				exam: {
					type: 'string',
					description: 'exam identification string'
				},
				users: {
					type: 'string',
					description: 'comma-separated list of user identification strings'
				},
			},
			required: ['exam', 'users'],
		},
	},

	// DELETE /exam:users - Remove user(s) from an exam
	{
		name: 'edubase_delete_exam_users',
		description: "Remove user(s) from an exam.",
		inputSchema: {
			type: 'object',
			properties: {
				exam: {
					type: 'string',
					description: 'exam identification string'
				},
				users: {
					type: 'string',
					description: 'comma-separated list of user identification strings'
				},
			},
			required: ['exam', 'users'],
		},
	},
];

/* Output schema definitions */
export const EDUBASE_API_TOOLS_EXAMS_OUTPUT_SCHEMA: object = {
	// GET /exams - List owned and managed exams
	edubase_get_exams: {
		type: 'object',
		properties: {
			exams: {
				type: 'array',
				description: 'list of exams',
				items: {
					type: 'object',
					properties: {
						code: {
							type: 'string',
							description: 'exam identification string'
						},
						name: {
							type: 'string',
							description: 'title of the exam'
						},
						active: {
							type: 'boolean',
							description: 'exam is active'
						},
					},
				},
			},
		},
	},

	// GET /exam - Get/check exam
	edubase_get_exam: {
		type: 'object',
		properties: {
			exam: {
				type: 'string',
				description: 'exam identification string'
			},
			name: {
				type: 'string',
				description: 'title of the exam'
			},
			active: {
				type: 'boolean',
				description: 'exam is active'
			},
			status: {
				type: 'string',
				description: 'exam status (INACTIVE, ACTIVE, PAUSED, REVIEW, EXPIRED)'
			},
			start: {
				type: 'string',
				description: 'start date and time'
			},
			end: {
				type: 'string',
				description: 'end date and time'
			},
		},
	},

	// GET /exam:users - List all users on an exam
	edubase_get_exam_users: {
		type: 'object',
		properties: {
			users: {
				type: 'array',
				description: 'list of users on the exam',
				items: {
					type: 'object',
					properties: {
						code: {
							type: 'string',
							description: 'user identification string'
						},
						name: {
							type: 'string',
							description: 'name of the examinee'
						},
					},
				},
			},
		},
	},

	// POST /exam:users - Assign user(s) to an exam
	edubase_post_exam_users: {
		type: 'object',
		properties: {
			exam: {
				type: 'string',
				description: 'exam identification string'
			},
			status: {
				type: 'boolean',
				description: 'operation successful'
			},
			message: {
				type: 'string',
				description: 'status message'
			},
			count: {
				type: 'number',
				description: 'number of users added'
			},
		},
	},

	// DELETE /exam:users - Remove user(s) from an exam
	edubase_delete_exam_users: {
		type: 'object',
		properties: {
			exam: {
				type: 'string',
				description: 'exam identification string'
			},
			status: {
				type: 'boolean',
				description: 'operation successful'
			},
			message: {
				type: 'string',
				description: 'status message'
			},
			count: {
				type: 'number',
				description: 'number of users removed'
			},
		},
	},
};
