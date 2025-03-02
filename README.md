<img src="https://static.edubase.net/media/brand/title/color.png" alt="EduBase logo" height="150" />

# EduBase MCP server

[![pre-commit.ci status](https://results.pre-commit.ci/badge/github/EduBase/MCP/main.svg)](https://results.pre-commit.ci/latest/github/EduBase/MCP/main)

This repository contains the **implementation of the Model Context Protocol** (MCP) server **for the EduBase platform**. It allows MCP clients (for example Claude Desktop) and LLMs to interact with your EduBase account and perform tasks on your behalf.

## What is EduBase?

EduBase is an innovative, modular, online educational platform that makes learning more enjoyable, simpler and interactive, suitable for educational institutions or enterprises.

### Why choose EduBase?

EduBase revolutionizes digital learning with its unique combination of features:

* **Advanced Quiz System** with parametrization allowing infinite variations of the same question, real-time cheating detection, beautiful LaTeX typesetting, advanced STEM-support and automatic grading
* **Unified Learning Environment** that centralizes all your educational content — videos, exams, documents, and SCORM modules — in one intuitive system
* **Enterprise-Grade Security** with features like SSO integration, fine-grained access controls, comprehensive auditing, and GDPR compliance
* **Integration** with your existing systems through LTI, comprehensive API, and custom integration options
* **AI-Assisted Tools**, such as EduBase Assistant, that can instantly transform your existing content into interactive quizzes and assessments, or translate your materials from one language to another

From higher education institutions to corporate training departments, EduBase scales to meet your specific needs while maintaining an intuitive user experience across all devices.

### Obtaining your API credentials

Once logged in, on your Dashboard, search for the Integrations menu, click "add integration" and choose the type "EduBase API".

<img src="https://shared.edubase.net/mcp/EduBase_Integration_page_with_API_credentials.png" alt="EduBase API credentials page" width="500" />

If you don't see this option, feel free to contact us to request access at [info@edubase.net](mailto:info@edubase.net).

## Tools

Each documented API endpoint is available as a separate tool, named `edubase_<method>_<endpoint>`. For example, the tool for the `GET /user` endpoint is named `edubase_get_user`. See our [developer documentation](https://developer.edubase.net) for more information.

## Usage with Claude Desktop

Add the following to your `claude_desktop_config.json`:

### node

```json
{
  "mcpServers": {
    "edubase": {
      "command": "node",
      "args": [
        "/path/to/dist/index.js"
      ],
      "env": {
        "EDUBASE_API_URL": "https://domain.edubase.net/api",
        "EDUBASE_API_APP": "your_integration_app_id",
        "EDUBASE_API_KEY": "your_integration_secret_key"
      }
    }
  }
}
```

### docker

```json
{
  "mcpServers": {
    "edubase": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "EDUBASE_API_URL",
        "-e",
        "EDUBASE_API_APP",
        "-e",
        "EDUBASE_API_KEY",
        "edubase/mcp"
      ],
      "env": {
        "EDUBASE_API_URL": "https://domain.edubase.net/api",
        "EDUBASE_API_APP": "your_integration_app_id",
        "EDUBASE_API_KEY": "your_integration_secret_key"
      }
    }
  }
}
```

## Contact

Website: [www.edubase.net](www.edubase.net)  
Developer Documentation: [developer.edubase.net](developer.edubase.net)  
Email: [info@edubase.net](mailto:info@edubase.net)
