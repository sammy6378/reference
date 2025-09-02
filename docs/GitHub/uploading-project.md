# Uploading a Project to GitHub

To upload (push) your project to GitHub:
1. Create a new repository on GitHub.
2. On your computer, open a terminal in your project folder.
3. Initialize Git:
   ```bash
   git init
   ```
4. Add your files:
   ```bash
   git add .
   ```
5. Commit your changes:
   ```bash
   git commit -m "Initial commit"
   ```
6. Link your repo:
   ```bash
   git remote add origin https://github.com/username/repository.git
   ```
7. Push to GitHub:
   ```bash
   git push -u origin main
   ```
Replace the URL with your repository's URL.
