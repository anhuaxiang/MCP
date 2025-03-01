<img src="https://static.edubase.net/media/brand/title/color.png" height="150" />

# EduBase MCP server

[![pre-commit.ci status](https://results.pre-commit.ci/badge/github/EduBase/MCP/main.svg)](https://results.pre-commit.ci/latest/github/EduBase/MCP/main)

This repository contains the **implementation of the Model Context Protocol** (MCP) server **for the EduBase platform**. It allows MCP clients (for example Claude Desktop) and LLMs to interact with your EduBase account and perform tasks on your behalf.

## What is EduBase? Briefly, in one sentence:

EduBase is an innovative, modular, online educational platform that makes learning more enjoyable, simpler and interactive, suitable for educational institutions or enterprises.

## Tools

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
