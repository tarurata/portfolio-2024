# GitHub Actions Workflows

This directory contains GitHub Actions workflows for the portfolio project. These workflows automate various aspects of development, testing, and deployment.

## Available Workflows

### 1. CI Workflow (`ci.yml`)
**Trigger:** Push to `main`/`develop` branches, Pull requests to `main`

**What it does:**
- Tests the build process on Node.js 18 and 20
- Runs TypeScript type checking
- Executes ESLint for code quality
- Builds the Next.js application
- Runs tests (if available)
- Uploads build artifacts

**Usage:**
This workflow runs automatically on every push and PR. Ensure your code passes all checks before merging.

### 2. Deploy Workflow (`deploy.yml`)
**Trigger:** Push to `main` branch, Manual trigger

**What it does:**
- Builds the application for production
- Deploys to Vercel
- Comments deployment URL on PRs

**Required Secrets:**
- `VERCEL_TOKEN`: Your Vercel deployment token
- `VERCEL_ORG_ID`: Your Vercel organization ID
- `VERCEL_PROJECT_ID`: Your Vercel project ID

**Setup:**
1. Go to Vercel dashboard → Settings → Tokens → Create new token
2. Add the token to GitHub repository secrets
3. Get org and project IDs from Vercel project settings

### 3. Code Quality Workflow (`code-quality.yml`)
**Trigger:** Push to `main`/`develop` branches, Pull requests to `main`

**What it does:**
- Runs Prettier format checking
- Executes ESLint with SARIF output for GitHub integration
- Performs bundle analysis on PRs
- Runs security audits
- Checks license compliance

**Features:**
- Integrates with GitHub's security tab
- Provides bundle size analysis
- Automated security vulnerability detection

### 4. Dependency Updates Workflow (`dependency-updates.yml`)
**Trigger:** Weekly schedule (Sundays 2 AM UTC), Manual trigger, Pull requests

**What it does:**
- Reviews dependencies on PRs
- Creates automated PRs for dependency updates
- Checks for outdated packages
- Applies security fixes

**Features:**
- Automated weekly dependency updates
- Security vulnerability fixes
- Dependency review on PRs

### 5. Performance Testing Workflow (`performance.yml`)
**Trigger:** Pull requests to `main`, Manual trigger

**What it does:**
- Runs Lighthouse performance tests
- Checks accessibility compliance
- Analyzes bundle size changes
- Provides performance reports

**Features:**
- Lighthouse CI integration
- Accessibility testing with axe-core
- Bundle size tracking

## Workflow Configuration

### Environment Variables
Some workflows may need environment variables:

```yaml
env:
  NEXT_SKIP_FONT_OPTIMIZATION: true  # Helps with build in CI
  NODE_ENV: production               # For production builds
```

### Required Secrets
Add these to your GitHub repository settings:

```
Repository Settings → Secrets and variables → Actions
```

- `VERCEL_TOKEN` - For deployment workflow
- `VERCEL_ORG_ID` - For deployment workflow  
- `VERCEL_PROJECT_ID` - For deployment workflow

### Branch Protection Rules
Consider setting up branch protection rules in GitHub:

1. Go to Settings → Branches
2. Add rule for `main` branch
3. Enable:
   - Require status checks to pass
   - Require branches to be up to date
   - Require review from code owners

## Customization

### Adding New Workflows

1. Create a new `.yml` file in `.github/workflows/`
2. Follow the existing pattern:
   ```yaml
   name: Workflow Name
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     job-name:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout code
           uses: actions/checkout@v4
         # Add your steps here
   ```

### Modifying Existing Workflows

- **Node.js versions**: Update the `matrix.node-version` in CI workflow
- **Branches**: Modify the `on.push.branches` and `on.pull_request.branches`
- **Schedule**: Change the `cron` expression in dependency updates
- **Performance thresholds**: Adjust Lighthouse scores in `lighthouserc.json`

### Common Customizations

**Add npm scripts:**
```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

**Add more linting rules:**
```yaml
- name: Run additional linting
  run: |
    npx tsc --noEmit
    npx prettier --check .
    npm run lint:css
```

## Troubleshooting

### Common Issues

**Build fails due to fonts:**
- The `NEXT_SKIP_FONT_OPTIMIZATION: true` environment variable is set to handle this

**Tests not running:**
- The CI workflow checks if test scripts exist before running them

**Deployment fails:**
- Verify Vercel secrets are correctly set
- Check Vercel project configuration

**Performance tests fail:**
- Adjust Lighthouse thresholds in `lighthouserc.json`
- Ensure the application starts correctly

### Debugging Workflows

1. Check the Actions tab in your GitHub repository
2. Click on the failed workflow run
3. Expand the failed step to see detailed logs
4. Use `echo` statements for debugging:
   ```yaml
   - name: Debug step
     run: |
       echo "Current directory: $(pwd)"
       echo "Node version: $(node --version)"
       echo "NPM version: $(npm --version)"
   ```

## Best Practices

1. **Keep workflows simple**: One responsibility per workflow
2. **Use caching**: Cache node_modules and build artifacts
3. **Fail fast**: Use `continue-on-error: false` for critical steps
4. **Document changes**: Update this README when adding new workflows
5. **Test locally**: Use `act` to test workflows locally before pushing
6. **Monitor costs**: Be aware of GitHub Actions minutes usage

## Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Vercel GitHub Integration](https://vercel.com/docs/concepts/git/vercel-for-github)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)