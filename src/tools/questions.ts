import { Tool } from "@modelcontextprotocol/sdk/types.js";

/* Tool definitions */
export const EDUBASE_API_TOOLS_QUESTIONS: Tool[] = [
	// GET /question - Check existing question
	{
		name: 'edubase_get_question',
		description: "Check existing question.",
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'external unique question identifier'
				},
			},
			required: ['id'],
		},
	},

	// POST /question - Publish or update a question
	{
		name: 'edubase_post_question',
		description: "Publish or update a question.",
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 
						"External unique question identifier for question management.\n" +
						"On repeated uploads, the questions are updated (rather then added) based on this value, which can be an arbitrary text.\n" +
						"If the question already exists at upload time with the same external identifier (in the given folder or Quiz set), the existing question will be updated instead of being added as a new one.\n" +
						"- Use cases:\n" +
						" - Integration with external systems\n" +
						" - Version control\n" +
						" - Batch updates\n" +
						" - Content synchronization\n" +
						"- Best practices:\n" +
						" - Use consistent naming conventions\n" +
						" - Include version, source or date information\n" +
						" - Consider hierarchical IDs for related content\n" +
						"Example:\n" +
						"- id=MATHEMATICS_ARITHMETIC_BASIC_ADDITION_STATIC_001\n" +
						"- type=numerical\n" +
						"- question=What is 2+2?\n" +
						"- answer=4"
				},
				type: {
					type: 'string',
					description: 'type of the question (generic, text, numerical, date/time, expression, choice, multiple-choice, order, matrix:generic, matrix, matrix:expression, set, set:text, true/false, free-text, file, reading)'
				},
				question: {
					type: 'string',
					description: 'question text'
				},
				answer: {
					type: 'string',
					description: 'single or multiple answers or true statements (separate multiple answers with &&&)'
				},
				answer_order: {
					type: 'string',
					description: 'whether the order of answers matters (+ for yes, - or blank for no) (default: no)'
				},
				answer_label: {
					type: 'string',
					description: 'text displayed in/above the input field during the test (separate multiple labels with &&&)'
				},
				answer_hide: {
					type: 'string',
					description: 'hide correct answers on results page (+ for yes, - or blank for no) (default: no)'
				},
				answer_indefinite: {
					type: 'string',
					description: 'allow any number of input fields to be entered by the user (+ for yes, - or blank for no) (default: no)'
				},
				answer_format: {
					type: 'string',
					description: 'how to display the answer on the results page (normal or code:language) (default: normal)'
				},
				answer_require: {
					type: 'string',
					description: 'number of answers required for maximum score'
				},
				subject: {
					type: 'string',
					description: 'subject'
				},
				category: {
					type: 'string',
					description: 'category'
				},
				path: {
					type: 'string',
					description: 'path where question will be stored in personal QuestionBase (default: /API)'
				},
				options: {
					type: 'string',
					description: 'incorrect options or false statements (separate multiple options with &&&)'
				},
				options_fix: {
					type: 'string',
					description: 'fix the order of answers and options (all, abc, first:N, last:N, answers)'
				},
				options_order: {
					type: 'string',
					description: 'configure custom order of answers and options (format: ANSWER:N or OPTION:N)'
				},
				points: {
					type: 'string',
					description: 'maximum points for a fully correct answer (default: 1)'
				},
				subscoring: {
					type: 'string',
					description: 'method for calculating partial credit (PROPORTIONAL, LINEAR_SUBSTRACTED:N, CUSTOM, NONE) (default: PROPORTIONAL)'
				},
				subpoints: {
					type: 'string',
					description: 'define specific point values for each answer in percentages (separate with &&&)'
				},
				penalty_scoring: {
					type: 'string',
					description: 'how penalty points should be applied (DEFAULT, PER_ANSWER, PER_QUESTION) (default: DEFAULT)'
				},
				penalty_points: {
					type: 'string',
					description: 'points deducted for completely incorrect answers'
				},
				hint_penalty: {
					type: 'string',
					description: 'point deduction for using hints (NONE, ONCE:N%, PER-HELP:N%) (default: NONE)'
				},
				solution_penalty: {
					type: 'string',
					description: 'point deduction for viewing steps of the solution (NONE, ONCE:N%) (default: NONE)'
				},
				video_penalty: {
					type: 'string',
					description: 'point deduction for video assistance used (NONE, ONCE:N%) (default: NONE)'
				},
				manual_scoring: {
					type: 'string',
					description: 'when to enable manual scoring (NO, NOT_CORRECT, ALWAYS) (default: NO)'
				},
				parameters: {
					type: 'string',
					description: 'parameter definitions for dynamic question generation (separate multiple parameters with &&&)'
				},
				parameters_sync: {
					type: 'string',
					description: 'synchronization of LIST parameters selection (+ for yes, - or blank for no) (default: no)'
				},
				expression_check: {
					type: 'string',
					description: 'define how expressions should be validated (RANDOM, EXPLICIT, COMPARE) (default: RANDOM)'
				},
				expression_variable: {
					type: 'string',
					description: 'specifies variable names used in expressions (separate multiple variables with &&&) (default: x)'
				},
				expression_decimals: {
					type: 'string',
					description: 'sets precision for decimal calculations (default: 2)'
				},
				expression_functions: {
					type: 'string',
					description: 'controls whether functions can be used in user inputs (+ for yes, - for no) (default: +)'
				},
				expression_random_type: {
					type: 'string',
					description: 'type of generated test values (INTEGER, FLOAT)'
				},
				expression_random_tries: {
					type: 'string',
					description: 'number of validation points (default: 5)'
				},
				expression_random_range: {
					type: 'string',
					description: 'define value generation ranges (format: [min-max])'
				},
				expression_random_inside: {
					type: 'string',
					description: 'require values within specific intervals (format: [start-end])'
				},
				expression_random_outside: {
					type: 'string',
					description: 'exclude values from specific intervals (format: [start-end])'
				},
				expression_explicit_goal: {
					type: 'string',
					description: 'define exact value pairs (format: [x;f(x)])'
				},
				expression_extended: {
					type: 'string',
					description: 'enable additional mathematical functions (+ to enable, - to disable)'
				},
				ai: {
					type: 'string',
					description: 'if set to any value, question will be marked as AI generated'
				},
			},
			required: ['id', 'type', 'question', 'answer'],
		},
	},

	// DELETE /question - Permanently delete a question
	{
		name: 'edubase_delete_question',
		description: "Permanently delete a Quiz question.",
		inputSchema: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					description: 'external unique question identifier'
				},
			},
			required: ['id'],
		},
	},
];

/* Output schema definitions */
export const EDUBASE_API_TOOLS_QUESTIONS_OUTPUT_SCHEMA: object = {
	// GET /question - Check existing question
	edubase_get_question: {
		type: 'object',
		properties: {
			id: {
				type: 'string',
				description: 'external unique question identifier'
			},
			type: {
				type: 'string',
				description: 'type of the question'
			},
			question: {
				type: 'string',
				description: 'question text'
			},
			answer: {
				type: 'string',
				description: 'single or multiple answers or true statements'
			},
			status: {
				type: 'boolean',
				description: 'question exists and is valid'
			},
			points: {
				type: 'number',
				description: 'maximum points for a fully correct answer'
			},
			subject: {
				type: 'string',
				description: 'subject'
			},
			category: {
				type: 'string',
				description: 'category'
			},
		},
	},

	// POST /question - Publish or update a question
	edubase_post_question: {
		type: 'object',
		properties: {
			id: {
				type: 'string',
				description: 'external unique question identifier'
			},
			status: {
				type: 'boolean',
				description: 'creation or update successful'
			},
			message: {
				type: 'string',
				description: 'status message'
			},
			validation: {
				type: 'array',
				description: 'validation issues if any',
				items: {
					type: 'object',
					properties: {
						field: {
							type: 'string',
							description: 'field with issue'
						},
						message: {
							type: 'string',
							description: 'validation message'
						},
						severity: {
							type: 'string',
							description: 'severity level (warning, error)'
						}
					}
				}
			},
		},
	},

	// DELETE /question - Permanently delete a question
	edubase_delete_question: {
		type: 'object',
		properties: {
			id: {
				type: 'string',
				description: 'external unique question identifier'
			},
			status: {
				type: 'boolean',
				description: 'deletion successful'
			},
			message: {
				type: 'string',
				description: 'status message'
			},
		},
	},
};
