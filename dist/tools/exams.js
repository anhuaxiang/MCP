/* Tool definitions */
export const EDUBASE_API_TOOLS_EXAMS = [
    // GET /exams - List owned and managed exams
    {
        name: 'edubase_get_exams',
        description: "List owned and managed exams.",
        inputSchema: {
            type: 'object',
            properties: {
                search: {
                    type: 'string',
                    description: 'search string to filter results'
                },
                limit: {
                    type: 'number',
                    description: 'limit number of results (default, in search mode: 16)'
                },
                page: {
                    type: 'number',
                    description: 'page number (default: 1), not used in search mode!'
                },
            },
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
    // POST /exam - Create a new exam from an existing Quiz set
    {
        name: 'edubase_post_exam',
        description: "Create a new exam from an existing Quiz set.",
        inputSchema: {
            type: 'object',
            properties: {
                language: {
                    type: 'string',
                    description: 'desired exam language'
                },
                title: {
                    type: 'string',
                    description: 'title of the exam'
                },
                type: {
                    type: 'string',
                    description: "Type of the exam. (default: exam)\n" +
                        "- exam: regular exam\n" +
                        "- championship: exam with championship features enabled\n" +
                        "- homework: homework assignment, can be paused and continued during the exam period\n" +
                        "- survey: survey (optionally anonymous) with no grading"
                },
                quiz: {
                    type: 'string',
                    description: 'the Quiz set (specified using the quiz identification string) the exam is attached to'
                },
                open: {
                    type: 'string',
                    description: 'exam start time (in YYYY-mm-dd HH:ii:ss format)'
                },
                close: {
                    type: 'string',
                    description: 'exam end time (in YYYY-mm-dd HH:ii:ss format)'
                },
            },
            required: ['title', 'quiz', 'open', 'close'],
        },
    },
    // DELETE /exam - Remove/archive exam
    {
        name: 'edubase_delete_exam',
        description: "Remove/archive exam.",
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
export const EDUBASE_API_TOOLS_EXAMS_OUTPUT_SCHEMA = {
    // GET /exams - List owned and managed exams
    edubase_get_exams: {
        type: 'array',
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
            quiz: {
                type: 'string',
                description: "Quiz identification string.\n" +
                    "- The Quiz set the exam is attached to"
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
    // GET /exam - Get/check exam
    edubase_post_exam: {
        type: 'object',
        properties: {
            exam: {
                type: 'string',
                description: 'exam identification string'
            },
        },
    },
    // DELETE /exam - Remove/archive exam
    edubase_delete_exam: {},
    // GET /exam:users - List all users on an exam
    edubase_get_exam_users: {
        type: 'array',
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
    // POST /exam:users - Assign user(s) to an exam
    edubase_post_exam_users: {},
    // DELETE /exam:users - Remove user(s) from an exam
    edubase_delete_exam_users: {},
};
