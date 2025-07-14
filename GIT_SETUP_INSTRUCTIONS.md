# Git Setup Instructions for ForgeAsh Technologies

## Prerequisites
1. Make sure you have git installed on your local machine
2. Have your GitHub credentials ready (username and personal access token)

## Step 1: Clean up existing git repository (if needed)
```bash
# Remove lock files if they exist
rm -f .git/config.lock .git/index.lock

# Check current git status
git status
```

## Step 2: Set up the remote repository
```bash
# Add the GitHub repository as remote origin
git remote add origin https://github.com/rashwincrush/Forgeash.git

# Or if origin already exists, update it
git remote set-url origin https://github.com/rashwincrush/Forgeash.git

# Verify the remote is set correctly
git remote -v
```

## Step 3: Prepare files for commit
```bash
# Add all files to staging
git add .

# Check what will be committed
git status
```

## Step 4: Create commit with meaningful message
```bash
# Commit with descriptive message
git commit -m "feat: Complete ForgeAsh Technologies website with gradient palette selector

- Implemented professional website with AI solutions focus
- Added animated gradient background palette selector (6 themes)
- Integrated subliminal wealth programming system
- Created responsive design with orbital animations
- Built contact system with database integration
- Added theme switching with smooth transitions
- Maintained professional branding throughout"
```

## Step 5: Push to GitHub
```bash
# Push to main branch (create if doesn't exist)
git push -u origin main

# If the repository already has content, you might need to pull first
git pull origin main --rebase
git push -u origin main
```

## Alternative: Force push if you want to overwrite remote
```bash
# Only use if you're sure you want to overwrite the remote repository
git push -f origin main
```

## Troubleshooting

### If you get authentication errors:
1. Make sure you're using a Personal Access Token instead of password
2. Use this format: `https://username:token@github.com/rashwincrush/Forgeash.git`

### If you get "repository not found" error:
1. Make sure the repository exists on GitHub
2. Check if the repository is public or you have access
3. Verify the repository URL is correct

### If you get merge conflicts:
```bash
# Pull the latest changes first
git pull origin main

# Resolve any conflicts in the files
# Then commit the resolved files
git add .
git commit -m "resolve: Merge conflicts"
git push origin main
```

## Project Structure
The project includes:
- Full-stack React + Express application
- PostgreSQL database integration
- Professional gradient theming system
- Subliminal programming elements
- Responsive design components
- Advanced animation systems

## Dependencies
All necessary dependencies are included in package.json:
- React 18 with TypeScript
- Express.js backend
- Tailwind CSS for styling
- Radix UI components
- TanStack Query for data fetching
- Drizzle ORM for database operations