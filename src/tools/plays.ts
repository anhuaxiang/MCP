import { Tool } from "@modelcontextprotocol/sdk/types.js";

/* Tool definitions */
export const EDUBASE_API_TOOLS_PLAYS: Tool[] = [
	// GET /quiz:results:play - Get detailed results for a specific Quiz play
	{
		name: 'edubase_get_quiz_play_results',
		description: "Get detailed results for a specific Quiz play.",
		inputSchema: {
			type: 'object',
			properties: {
				play: {
					type: 'string',
					description: 'Quiz play identification string'
				},
			},
			required: ['play'],
		},
	},

	// GET /quiz:results:user - Get user results for a specific Quiz set
	{
		name: 'edubase_get_quiz_results_user',
		description: "Get user results for a specific Quiz set.",
		inputSchema: {
			type: 'object',
			properties: {
				quiz: {
					type: 'string',
					description: 'Quiz set identification string'
				},
				user: {
					type: 'string',
					description: 'user identification string'
				},
			},
			required: ['quiz', 'user'],
		},
	},

	// GET /exam:results:user - Get user results for a specific exam
	{
		name: 'edubase_get_exam_results_user',
		description: "Get user results for a specific exam.",
		inputSchema: {
			type: 'object',
			properties: {
				exam: {
					type: 'string',
					description: 'exam identification string'
				},
				user: {
					type: 'string',
					description: 'user identification string'
				},
			},
			required: ['exam', 'user'],
		},
	},
];

/* Output schema definitions */
export const EDUBASE_API_TOOLS_PLAYS_OUTPUT_SCHEMA: object = {
	// GET /quiz:results:play - Get detailed results for a specific Quiz play
	edubase_get_quiz_play_results: {
		type: 'object',
		properties: {
			play: {
				type: 'string',
				description: 'Quiz play identification string'
			},
			user: {
				type: 'string',
				description: 'user identification string'
			},
			time_start: {
				type: 'string',
				description: 'start time'
			},
			time_end: {
				type: 'string',
				description: 'end time'
			},
			questions_total: {
				type: 'number',
				description: 'total number of questions asked'
			},
			questions_correct: {
				type: 'number',
				description: 'number of correctly answered questions'
			},
			points_total: {
				type: 'number',
				description: 'total points'
			},
			points_correct: {
				type: 'number',
				description: 'total points scored'
			},
			valid: {
				type: 'boolean',
				description: 'result is valid'
			},
			questions: {
				type: 'array',
				description: 'list of question results',
				items: {
					type: 'object',
					properties: {
						index: {
							type: 'string',
							description: 'question index'
						},
						id: {
							type: 'string',
							description: 'external unique question identifier (if present)'
						},
						question: {
							type: 'string',
							description: 'question identification string'
						},
						time_answer: {
							type: 'number',
							description: 'number of seconds spent on question (if available)'
						},
						points_maximum: {
							type: 'number',
							description: 'maximum points'
						},
						points: {
							type: 'number',
							description: 'points scored'
						},
					},
				},
			},
		},
	},

	// GET /quiz:results:user - Get user results for a specific Quiz set
	edubase_get_quiz_results_user: {
		type: 'object',
		properties: {
			results: {
				type: 'array',
				description: 'list of quiz play results',
				items: {
					type: 'object',
					properties: {
						play: {
							type: 'string',
							description: 'Quiz play identification string'
						},
						user: {
							type: 'string',
							description: 'user identification string'
						},
						time_start: {
							type: 'string',
							description: 'start time'
						},
						time_end: {
							type: 'string',
							description: 'end time'
						},
						questions_total: {
							type: 'number',
							description: 'total number of questions asked'
						},
						questions_correct: {
							type: 'number',
							description: 'number of correctly answered questions'
						},
						points_total: {
							type: 'number',
							description: 'total points'
						},
						points_correct: {
							type: 'number',
							description: 'total points scored'
						},
						valid: {
							type: 'boolean',
							description: 'result is valid'
						},
					},
				},
			},
		},
	},

	// GET /exam:results:user - Get user results for a specific exam
	edubase_get_exam_results_user: {
		type: 'object',
		properties: {
			results: {
				type: 'array',
				description: 'list of exam attempt results',
				items: {
					type: 'object',
					properties: {
						play: {
							type: 'string',
							description: 'Quiz play identification string'
						},
						user: {
							type: 'string',
							description: 'user identification string'
						},
						time_start: {
							type: 'string',
							description: 'start time'
						},
						time_end: {
							type: 'string',
							description: 'end time'
						},
						questions_total: {
							type: 'number',
							description: 'total number of questions asked'
						},
						questions_correct: {
							type: 'number',
							description: 'number of correctly answered questions'
						},
						points_total: {
							type: 'number',
							description: 'total points'
						},
						points_correct: {
							type: 'number',
							description: 'total points scored'
						},
						attempt: {
							type: 'number',
							description: 'index of attempt'
						},
						valid: {
							type: 'boolean',
							description: 'result is valid'
						},
					},
				},
			},
		},
	},
};
