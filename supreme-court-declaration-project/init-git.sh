#!/bin/bash

# Initialize Git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Supreme Court Declaration project"

echo "Git repository initialized successfully!"
echo "To connect to a remote repository, use:"
echo "git remote add origin <your-repository-url>"
echo "git push -u origin main"
