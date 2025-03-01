import { Tool } from "@modelcontextprotocol/sdk/types.js";

/* Tool definitions */
export const EDUBASE_API_TOOLS_QUIZES: Tool[] = [
	// GET /quiz:questions - List all questions in a Quiz set
	{
		name: 'edubase_get_quiz_questions',
		description: "List all questions in a Quiz set. Question groups and its questions are not listed.",
		inputSchema: {
			type: 'object',
			properties: {
				quiz: {
					type: 'string',
					description: 'Quiz identification string'
				},
			},
			required: ['quiz'],
		},
	},

	// POST /quiz:questions - Assign question(s) to a Quiz set
	{
		name: 'edubase_post_quiz_questions',
		description: "Assign question(s) to a Quiz set.",
		inputSchema: {
			type: 'object',
			properties: {
				quiz: {
					type: 'string',
					description: 'Quiz identification string'
				},
				questions: {
					type: 'string',
					description: 'comma-separated list of question identification strings'
				},
			},
			required: ['quiz', 'questions'],
		},
	},

	// DELETE /quiz:questions - Remove question(s) from a Quiz set
	{
		name: 'edubase_delete_quiz_questions',
		description: "Remove question(s) from a Quiz set.",
		inputSchema: {
			type: 'object',
			properties: {
				quiz: {
					type: 'string',
					description: 'Quiz identification string'
				},
				questions: {
					type: 'string',
					description: 'comma-separated list of question identification strings'
				},
			},
			required: ['quiz', 'questions'],
		},
	},
];

/* Output schema definitions */
export const EDUBASE_API_TOOLS_QUIZES_OUTPUT_SCHEMA: object = {
	// GET /quiz:questions - List all questions in a Quiz set
	edubase_get_quiz_questions: {
		type: 'object',
		properties: {
			quiz: {
				type: 'string',
				description: 'Quiz identification string'
			},
			questions: {
				type: 'array',
				description: 'list of questions in the quiz',
				items: {
					type: 'object',
					properties: {
						id: {
							type: 'string',
							description: 'external unique question identifier (if present)'
						},
						question: {
							type: 'string',
							description: 'question identification string'
						},
						active: {
							type: 'boolean',
							description: 'active question'
						},
					},
				},
			},
		},
	},

	// POST /quiz:questions - Assign question(s) to a Quiz set
	edubase_post_quiz_questions: {
		type: 'object',
		properties: {
			quiz: {
				type: 'string',
				description: 'Quiz identification string'
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
				description: 'number of questions added'
			},
		},
	},

	// DELETE /quiz:questions - Remove question(s) from a Quiz set
	edubase_delete_quiz_questions: {
		type: 'object',
		properties: {
			quiz: {
				type: 'string',
				description: 'Quiz identification string'
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
				description: 'number of questions removed'
			},
		},
	},
};
