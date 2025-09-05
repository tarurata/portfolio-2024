# How to Create New Workflows

This guide explains how to create and customize GitHub Actions workflows for your portfolio project.

## Quick Start

### 1. Creating a Basic Workflow

Create a new file in `.github/workflows/` with a `.yml` extension:

```bash
touch .github/workflows/my-workflow.yml
```

### 2. Basic Workflow Structure

```yaml
name: My Custom Workflow

on:
  push:
    branches: [ main ]

jobs:
  my-job:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Your custom step
      run: echo "Hello, World!"
```

## Common Workflow Patterns

### 1. Running on Different Events

```yaml
on:
  # On every push to main
  push:
    branches: [ main ]
  
  # On pull requests to main
  pull_request:
    branches: [ main ]
  
  # Manual trigger
  workflow_dispatch:
  
  # Scheduled (every day at 2 AM UTC)
  schedule:
    - cron: '0 2 * * *'
  
  # On new releases
  release:
    types: [published]
```

### 2. Using Environment Variables

```yaml
env:
  NODE_ENV: production
  API_URL: https://api.example.com

jobs:
  example:
    runs-on: ubuntu-latest
    steps:
    - name: Use environment variable
      run: echo "API URL is $API_URL"
      
    - name: Set job-specific env
      env:
        CUSTOM_VAR: "job-specific value"
      run: echo "Custom: $CUSTOM_VAR"
```

### 3. Using Secrets

```yaml
steps:
- name: Deploy with secret
  env:
    API_KEY: ${{ secrets.API_KEY }}
    DATABASE_URL: ${{ secrets.DATABASE_URL }}
  run: |
    echo "Deploying with API key..."
    # Your deployment commands here
```

**To add secrets:**
1. Go to your GitHub repository
2. Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Add your secret name and value

### 4. Matrix Builds

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [16, 18, 20]
        os: [ubuntu-latest, windows-latest, macos-latest]
    
    steps:
    - name: Test on Node ${{ matrix.node-version }}
      run: echo "Testing on Node.js ${{ matrix.node-version }}"
```

### 5. Conditional Steps

```yaml
steps:
- name: Only on main branch
  if: github.ref == 'refs/heads/main'
  run: echo "This is the main branch"

- name: Only on PRs
  if: github.event_name == 'pull_request'
  run: echo "This is a pull request"

- name: Only if previous step succeeded
  if: success()
  run: echo "Previous steps were successful"
```

## Real-World Examples

### 1. Custom Deployment Workflow

```yaml
name: Deploy to Staging

on:
  push:
    branches: [ develop ]

jobs:
  deploy-staging:
    runs-on: ubuntu-latest
    environment: staging
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build for staging
      run: npm run build
      env:
        NODE_ENV: staging
        NEXT_PUBLIC_API_URL: ${{ secrets.STAGING_API_URL }}
    
    - name: Deploy to staging server
      run: |
        # Your deployment commands
        echo "Deploying to staging..."
```

### 2. Code Quality Workflow

```yaml
name: Code Quality Check

on:
  pull_request:
    branches: [ main ]

jobs:
  quality:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Check code formatting
      run: npx prettier --check .
    
    - name: Run linting
      run: npm run lint
    
    - name: Type checking
      run: npm run typecheck
    
    - name: Check for security vulnerabilities
      run: npm audit --audit-level=moderate
```

### 3. Notification Workflow

```yaml
name: Notify Team

on:
  push:
    branches: [ main ]

jobs:
  notify:
    runs-on: ubuntu-latest
    
    steps:
    - name: Notify Slack
      uses: 8398a7/action-slack@v3
      with:
        status: custom
        webhook_url: ${{ secrets.SLACK_WEBHOOK }}
        custom_payload: |
          {
            text: "New deployment to production!",
            attachments: [{
              color: 'good',
              fields: [{
                title: 'Repository',
                value: '${{ github.repository }}',
                short: true
              }, {
                title: 'Commit',
                value: '${{ github.sha }}',
                short: true
              }]
            }]
          }
```

## Advanced Features

### 1. Reusable Workflows

Create a reusable workflow in `.github/workflows/reusable-build.yml`:

```yaml
name: Reusable Build

on:
  workflow_call:
    inputs:
      node-version:
        required: true
        type: string
      environment:
        required: false
        type: string
        default: 'production'

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js ${{ inputs.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: ${{ inputs.node-version }}
    
    - name: Build
      run: npm run build
      env:
        NODE_ENV: ${{ inputs.environment }}
```

Use it in another workflow:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build:
    uses: ./.github/workflows/reusable-build.yml
    with:
      node-version: '20'
      environment: 'production'
```

### 2. Composite Actions

Create a custom action in `.github/actions/setup/action.yml`:

```yaml
name: 'Setup Node.js and Dependencies'
description: 'Setup Node.js and install npm dependencies'

inputs:
  node-version:
    description: 'Node.js version'
    required: false
    default: '20'

runs:
  using: 'composite'
  steps:
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: ${{ inputs.node-version }}
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
      shell: bash
```

Use it in workflows:

```yaml
steps:
- uses: actions/checkout@v4
- uses: ./.github/actions/setup
  with:
    node-version: '18'
```

## Best Practices

### 1. Security
- Never commit secrets to the repository
- Use `secrets` context for sensitive data
- Limit permissions with `permissions` key
- Pin action versions to specific commits

### 2. Performance
- Use caching for dependencies
- Minimize job execution time
- Use `continue-on-error` for non-critical steps
- Parallelize independent jobs

### 3. Maintainability
- Use descriptive names for workflows and jobs
- Add comments for complex logic
- Keep workflows focused on single responsibilities
- Document required secrets and environment variables

### 4. Testing
- Test workflows in feature branches
- Use `workflow_dispatch` for manual testing
- Monitor workflow execution and costs

## Troubleshooting

### Common Issues

1. **Workflow not triggering**
   - Check the file syntax with a YAML validator
   - Ensure the file is in `.github/workflows/`
   - Check branch protection rules

2. **Dependencies installation fails**
   - Use `npm ci` instead of `npm install`
   - Check Node.js version compatibility
   - Clear cache or use different cache key

3. **Build fails in CI but works locally**
   - Check environment variables
   - Ensure all dependencies are in `package.json`
   - Check for differences in Node.js versions

4. **Secrets not working**
   - Verify secret names match exactly (case-sensitive)
   - Check if secrets are available in the environment
   - Use `github.repository` context for debugging

### Debugging Tips

```yaml
- name: Debug information
  run: |
    echo "Repository: ${{ github.repository }}"
    echo "Branch: ${{ github.ref }}"
    echo "Event: ${{ github.event_name }}"
    echo "Actor: ${{ github.actor }}"
    echo "Working directory: $(pwd)"
    echo "Node version: $(node --version)"
    echo "NPM version: $(npm --version)"
    ls -la
```

## Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [GitHub Actions Marketplace](https://github.com/marketplace?type=actions)
- [Community Actions](https://github.com/sdras/awesome-actions)