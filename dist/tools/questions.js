/* Tool definitions */
export const EDUBASE_API_TOOLS_QUESTIONS = [
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
                    description: "External unique question identifier for question management.\n" +
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
                    description: "Type of the question.\n" +
                        "EduBase supports various question types to accommodate different assessment needs:\n" +
                        "- Basic Types:\n" +
                        " - GENERIC: Strict matching including spaces and punctuation\n" +
                        " - TEXT: Basic text input with flexible matching (ignores spaces and punctuation)\n" +
                        " - FREE-TEXT: Extended text response with semi-automatic grading\n" +
                        " - READING: Non-assessed text display for complex question groups\n" +
                        "- Choice-Based Types:\n" +
                        " - CHOICE: Single correct answer selection\n" +
                        " - MULTIPLE-CHOICE: Multiple correct answers\n" +
                        " - ORDER: Sequence arrangement (arrange items in correct order)\n" +
                        " - TRUE/FALSE: Statement evaluation (true statements in ANSWER, false in OPTIONS)\n" +
                        "- Numerical Types:\n" +
                        " - NUMERIC: Numerical value validation with fractions, constants, intervals\n" +
                        " - DATE/TIME: Calendar date validation with adjustable precision\n" +
                        " - EXPRESSION: Mathematical expression evaluation\n" +
                        "- Advanced Types:\n" +
                        " - MATRIX/MATRIX:EXPRESSION: Matrix evaluation (format: [a;b|c;d] for 2x2)\n" +
                        " - SET/SET:TEXT: Unordered collection validation\n" +
                        " - FILE: File submission evaluation\n" +
                        "Example:\n" +
                        "type=numerical"
                },
                question: {
                    type: 'string',
                    description: "The main question text that will be displayed to the test taker.\n" +
                        "Supports rich formatting options:\n" +
                        "- LaTeX Support (requires QUESTION_FORMAT=LATEX):\n" +
                        " - Inline: $$...$$\n" +
                        " - Block: $$$$...$$$$\n" +
                        "- Parameters: Use curly braces {parameter_name} (defined in PARAMETERS field)\n" +
                        "- Quick expressions: Use ~~~expression~~~ for simple parameter calculations, e.g., area of a circle is ~~~{r}*{r}*pi~~~\n" +
                        "- Style formatting with EduTags:\n" +
                        " - Bold: [[B]]...[[/B]]\n" +
                        " - Italic: [[I]]...[[/I]]\n" +
                        " - Underline: [[U]]...[[/U]]\n" +
                        " - Subscript: [[SUB]]...[[/SUB]], Superscript: [[SUP]]...[[/SUP]]\n" +
                        " - Code: [[CODE]]...[[/CODE]], [[CODEBLOCK]]...[[/CODEBLOCK]]\n" +
                        " - Colors: [[COLOR:{color}]]...[[/COLOR]], [[BACKGROUND:{color}]]...[[/BACKGROUND]]\n" +
                        "- Tables: Use [[..]] format with semicolons for columns, vertical bars for rows, e.g., [[Header 1; Header 2 | Data 1; Data 2]]\n" +
                        "- Answer placeholders: [[___]] (3 underscores), for fill-in-the-gaps\n" +
                        "Example:\n" +
                        "question=Calculate the area of a circle with radius {r} using $$A = \\pi r^2$$"
                },
                answer: {
                    type: 'string',
                    description: "The correct answer(s) for the question.\n" +
                        "- For multiple answers, separate with triple-and operator (\"&&&\")\n" +
                        "- Parameters can be used in curly braces {param_name}\n" +
                        "- Usage by question type:\n" +
                        " - CHOICE: The correct option\n" +
                        " - MULTIPLE-CHOICE: All correct options\n" +
                        " - TEXT/NUMERICAL/EXPRESSION: Expected response(s)\n" +
                        " - ORDER: Items in correct sequence\n" +
                        " - TRUE/FALSE: True statements (false statements go in OPTIONS)\n" +
                        " - MATRIX types: Use format [a;b|c;d] for matrices\n" +
                        " - SET types: Unordered collection of elements\n" +
                        "Example:\n" +
                        "answer=Paris\n" +
                        "answer=sin(x)^2+cos(x)^2"
                },
                answer_order: {
                    type: 'string',
                    description: "Controls whether the sequence of multiple answers matters.\n" +
                        "- Plus sign (+) to indicate YES\n" +
                        "- Blank field or minus sign (-) indicates NO (default)\n" +
                        "- When using answer_label, this is automatically activated\n" +
                        "- Essential for questions where sequence is important (e.g., steps in a process)\n" +
                        "Example:\n" +
                        "answer_order=+\n" +
                        "Example API call:\n" +
                        "id=europe_cities_population\n" +
                        "type=text\n" +
                        "question=List the following European cities in descending order by population (largest first)\n" +
                        "answer=London &&& Madrid &&& Paris\n" +
                        "answer_order=+"
                },
                answer_label: {
                    type: 'string',
                    description: "Text displayed in/above the input field during the test.\n" +
                        "- Separate multiple labels with triple-and operators (\"&&&\")\n" +
                        "- Automatically activates the answer_order function\n" +
                        "- Perfect for multi-part questions where each part needs clear labeling\n" +
                        "- Useful for creating pairing/matching questions\n" +
                        "Example:\n" +
                        "answer_label=a) Distance (km) &&& b) Time (hours) &&& c) Speed (km/h)\n" +
                        "Example API call:\n" +
                        "id=basic_math\n" +
                        "type=numerical\n" +
                        "question=Given the number 16:\\n\\na) What is double this number?\\n\\nb) What is half of this number?\\n\\nc) What is this number plus 10?\n" +
                        "answer=32 &&& 8 &&& 26\n" +
                        "answer_label=a) Double &&& b) Half &&& c) Plus 10\n" +
                        "points=3"
                },
                answer_hide: {
                    type: 'string',
                    description: "Controls whether correct answers are hidden on the results page.\n" +
                        "- Plus sign (+) to indicate YES\n" +
                        "- Blank field or minus sign (-) indicates NO (default)\n" +
                        "- Useful for test security and preventing answer sharing\n" +
                        "- Critical for reusable questions and practice tests\n" +
                        "Example:\n" +
                        "answer_hide=+\n" +
                        "Example API call:\n" +
                        "id=uk_countries\n" +
                        "type=text\n" +
                        "question=Name any of the countries within the United Kingdom!\n" +
                        "answer=England &&& Northern Ireland &&& Scotland &&& Wales\n" +
                        "answer_require=1\n" +
                        "answer_hide=+"
                },
                answer_indefinite: {
                    type: 'string',
                    description: "Allows users to add any number of input fields using + and - buttons.\n" +
                        "- Plus sign (+) to indicate YES\n" +
                        "- Blank field or minus sign (-) indicates NO (default)\n" +
                        "- Answer labels will not appear when this is enabled\n" +
                        "- Ideal for brainstorming exercises or questions with variable number of answers\n" +
                        "Example:\n" +
                        "answer_indefinite=+\n" +
                        "Example API call:\n" +
                        "id=name_countries\n" +
                        "type=text\n" +
                        "question=Name as many European countries as you can think of.\n" +
                        "answer=France &&& Germany &&& Italy &&& Spain &&& United Kingdom &&& ...\n" +
                        "answer_indefinite=+"
                },
                answer_format: {
                    type: 'string',
                    description: "Defines how to display the answer on the results page.\n" +
                        "- Only applicable for FREE-TEXT questions\n" +
                        "- Format: type or type:value\n" +
                        "- Available types:\n" +
                        " - normal: standard text (default)\n" +
                        " - code: with syntax highlighting (specify language after colon)\n" +
                        "Example:\n" +
                        "answer_format=code:python\n" +
                        "answer_format=code:sql\n" +
                        "Example API call:\n" +
                        "id=sql_basics\n" +
                        "type=free-text\n" +
                        "question=Write a SQL query to select all columns from the \"users\" table where the age is greater than 18.\n" +
                        "answer=SELECT * FROM users WHERE age > 18\n" +
                        "answer_format=code:sql"
                },
                answer_require: {
                    type: 'string',
                    description: "Number of answers required for maximum score.\n" +
                        "- Not applicable for CHOICE and FREE-TEXT questions\n" +
                        "- Perfect for questions with multiple valid answers where only a subset needs to be provided\n" +
                        "- Useful when asking students to provide any X examples from a larger set\n" +
                        "Example:\n" +
                        "answer_require=3\n" +
                        "Example API call:\n" +
                        "id=uk_countries\n" +
                        "type=text\n" +
                        "question=Name any one of the countries within the United Kingdom!\n" +
                        "answer=England &&& Northern Ireland &&& Scotland &&& Wales\n" +
                        "answer_require=1"
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
export const EDUBASE_API_TOOLS_QUESTIONS_OUTPUT_SCHEMA = {
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
