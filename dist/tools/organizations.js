/* Tool definitions */
export const EDUBASE_API_TOOLS_ORGANIZATIONS = [
    // GET /organizations - List owned and managed organizations
    {
        name: 'edubase_get_organizations',
        description: "List owned and managed organizations.",
        inputSchema: {
            type: 'object',
            properties: {},
            required: [],
        },
    },
    // GET /organization - Get/check organization
    {
        name: 'edubase_get_organization',
        description: "Get/check organization.",
        inputSchema: {
            type: 'object',
            properties: {
                organization: {
                    type: 'string',
                    description: 'organization identification string'
                },
            },
            required: ['organization'],
        },
    },
    // GET /organization:members - List all members in an organization
    {
        name: 'edubase_get_organization_members',
        description: "List all members in an organization.",
        inputSchema: {
            type: 'object',
            properties: {
                organization: {
                    type: 'string',
                    description: 'organization identification string'
                },
            },
            required: ['organization'],
        },
    },
    // POST /organization:members - Assign user(s) to an organization
    {
        name: 'edubase_post_organization_members',
        description: "Assign user(s) to an organization. Updates memberships if already member of the organization.",
        inputSchema: {
            type: 'object',
            properties: {
                organization: {
                    type: 'string',
                    description: 'organization identification string'
                },
                users: {
                    type: 'string',
                    description: 'comma-separated list of user identification strings'
                },
                department: {
                    type: 'string',
                    description: 'optional name of department'
                },
                permission_organization: {
                    type: 'string',
                    description: 'optional permission level to organization (member / teacher / supervisor / admin) (default: member)'
                },
                permission_content: {
                    type: 'string',
                    description: 'optional permission level to contents in organization (none / view / control / modify / grant / admin) (default: none)'
                },
                notify: {
                    type: 'boolean',
                    description: 'notify users (default: false)'
                },
            },
            required: ['organization', 'users'],
        },
    },
    // DELETE /organization:members - Remove user(s) from an organization
    {
        name: 'edubase_delete_organization_members',
        description: "Remove user(s) from an organization.",
        inputSchema: {
            type: 'object',
            properties: {
                organization: {
                    type: 'string',
                    description: 'organization identification string'
                },
                users: {
                    type: 'string',
                    description: 'comma-separated list of user identification strings'
                },
            },
            required: ['organization', 'users'],
        },
    },
    // POST /organizations:members - Assign user(s) to organization(s)
    {
        name: 'edubase_post_organizations_members',
        description: "Assign user(s) to organization(s). Updates memberships if already member of an organization.",
        inputSchema: {
            type: 'object',
            properties: {
                organizations: {
                    type: 'string',
                    description: 'comma-separated list of organization identification strings'
                },
                users: {
                    type: 'string',
                    description: 'comma-separated list of user identification strings'
                },
                department: {
                    type: 'string',
                    description: 'optional name of department'
                },
                permission_organization: {
                    type: 'string',
                    description: 'optional permission level to organization (member / teacher / supervisor / admin) (default: member)'
                },
                permission_content: {
                    type: 'string',
                    description: 'optional permission level to contents in organization (none / view / control / modify / grant / admin) (default: none)'
                },
                notify: {
                    type: 'boolean',
                    description: 'notify users (default: false)'
                },
            },
            required: ['organizations', 'users'],
        },
    },
    // GET /user:organizations - List all organizations a user is member of
    {
        name: 'edubase_get_user_organizations',
        description: "List all organizations a user is member of.",
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
    // POST /user:organizations - Assign user to organization(s)
    {
        name: 'edubase_post_user_organizations',
        description: "Assign user to organization(s). Updates membership if already member of an organization.",
        inputSchema: {
            type: 'object',
            properties: {
                user: {
                    type: 'string',
                    description: 'user identification string'
                },
                organizations: {
                    type: 'string',
                    description: 'comma-separated list of organization identification strings'
                },
                department: {
                    type: 'string',
                    description: 'optional name of department'
                },
                permission_organization: {
                    type: 'string',
                    description: 'optional permission level to organization (member / teacher / supervisor / admin) (default: member)'
                },
                permission_content: {
                    type: 'string',
                    description: 'optional permission level to contents in organization (none / view / control / modify / grant / admin) (default: none)'
                },
                notify: {
                    type: 'boolean',
                    description: 'notify user (default: false)'
                },
            },
            required: ['user', 'organizations'],
        },
    },
    // DELETE /user:organizations - Remove user from organization(s)
    {
        name: 'edubase_delete_user_organizations',
        description: "Remove user from organization(s).",
        inputSchema: {
            type: 'object',
            properties: {
                user: {
                    type: 'string',
                    description: 'user identification string'
                },
                organizations: {
                    type: 'string',
                    description: 'comma-separated list of organization identification strings'
                },
            },
            required: ['user', 'organizations'],
        },
    },
];
/* Output schema definitions */
export const EDUBASE_API_TOOLS_ORGANIZATIONS_OUTPUT_SCHEMA = {
    // GET /organizations - List owned and managed organizations
    edubase_get_organizations: {
        type: 'object',
        properties: {
            organizations: {
                type: 'array',
                description: 'list of organizations',
                items: {
                    type: 'object',
                    properties: {
                        code: {
                            type: 'string',
                            description: 'organization identification string'
                        },
                        name: {
                            type: 'string',
                            description: 'title of the organization'
                        },
                    },
                },
            },
        },
    },
    // GET /organization - Get/check organization
    edubase_get_organization: {
        type: 'object',
        properties: {
            organization: {
                type: 'string',
                description: 'organization identification string'
            },
            name: {
                type: 'string',
                description: 'title of the organization'
            },
        },
    },
    // GET /organization:members - List all members in an organization
    edubase_get_organization_members: {
        type: 'object',
        properties: {
            members: {
                type: 'array',
                description: 'list of members',
                items: {
                    type: 'object',
                    properties: {
                        code: {
                            type: 'string',
                            description: 'user identification string'
                        },
                        name: {
                            type: 'string',
                            description: 'name of the member'
                        },
                        department: {
                            type: 'string',
                            description: 'name of the department (if member)'
                        },
                        permission: {
                            type: 'object',
                            description: 'permission levels',
                            properties: {
                                organization: {
                                    type: 'string',
                                    description: 'permission level to organization'
                                },
                                content: {
                                    type: 'string',
                                    description: 'permission level to contents in organization'
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    // POST /organization:members - Assign user(s) to an organization
    edubase_post_organization_members: {
        type: 'object',
        properties: {
            organization: {
                type: 'string',
                description: 'organization identification string'
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
                description: 'number of users added or updated'
            },
        },
    },
    // DELETE /organization:members - Remove user(s) from an organization
    edubase_delete_organization_members: {
        type: 'object',
        properties: {
            organization: {
                type: 'string',
                description: 'organization identification string'
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
    // POST /organizations:members - Assign user(s) to organization(s)
    edubase_post_organizations_members: {
        type: 'object',
        properties: {
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
                description: 'number of users added or updated across all organizations'
            },
        },
    },
    // GET /user:organizations - List all organizations a user is member of
    edubase_get_user_organizations: {
        type: 'object',
        properties: {
            user: {
                type: 'string',
                description: 'user identification string'
            },
            organizations: {
                type: 'array',
                description: 'list of organizations',
                items: {
                    type: 'object',
                    properties: {
                        code: {
                            type: 'string',
                            description: 'organization identification string'
                        },
                        name: {
                            type: 'string',
                            description: 'title of the organization'
                        },
                        link: {
                            type: 'string',
                            description: 'link to the organization manager page'
                        },
                        department: {
                            type: 'string',
                            description: 'name of the department (if member)'
                        },
                        permission: {
                            type: 'object',
                            description: 'permission levels',
                            properties: {
                                organization: {
                                    type: 'string',
                                    description: 'permission level to organization'
                                },
                                content: {
                                    type: 'string',
                                    description: 'permission level to contents in organization'
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    // POST /user:organizations - Assign user to organization(s)
    edubase_post_user_organizations: {
        type: 'object',
        properties: {
            user: {
                type: 'string',
                description: 'user identification string'
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
                description: 'number of organizations the user was added to or updated in'
            },
        },
    },
    // DELETE /user:organizations - Remove user from organization(s)
    edubase_delete_user_organizations: {
        type: 'object',
        properties: {
            user: {
                type: 'string',
                description: 'user identification string'
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
                description: 'number of organizations the user was removed from'
            },
        },
    },
};
