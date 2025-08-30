# Deployment Guide

## Quick Deploy to GitHub

### Method 1: Using Command Line

1. **Open Command Prompt** (Windows + R, type `cmd`, press Enter)

2. **Navigate to the project directory:**
   ```bash
   cd "C:\Users\Ali.Ibrahimov\Desktop\Cursor - CV Generate"
   ```

3. **Initialize Git repository:**
   ```bash
   git init
   ```

4. **Add all files:**
   ```bash
   git add .
   ```

5. **Commit changes:**
   ```bash
   git commit -m "Initial commit: AI CV Generator with Vapi widget"
   ```

6. **Add remote repository:**
   ```bash
   git remote add origin https://github.com/aliibrahim7/01.git
   ```

7. **Push to GitHub:**
   ```bash
   git branch -M main
   git push -u origin main
   ```

### Method 2: Using GitHub Desktop

1. Download GitHub Desktop from [desktop.github.com](https://desktop.github.com/)
2. Sign in with your GitHub account
3. Click "Clone a repository from the Internet"
4. Select your repository: `aliibrahim7/01`
5. Choose local path: `C:\Users\Ali.Ibrahimov\Desktop\Cursor - CV Generate`
6. Copy all files to the cloned directory
7. Commit and push using GitHub Desktop interface

## Testing the Vapi Widget

1. **Open `test.html`** in your browser to test the Vapi widget
2. **Look for the "Create CV" button** in the bottom-right corner
3. **Check browser console** for any errors (F12 → Console tab)

## Troubleshooting

### If the Vapi widget is not visible:

1. **Check internet connection** - The widget requires loading from Vapi's servers
2. **Check browser console** for JavaScript errors
3. **Try a different browser** (Chrome, Firefox, Edge)
4. **Clear browser cache** and reload the page
5. **Check if the script is loading** - Look for network requests in browser dev tools

### Common Issues:

- **CORS errors**: Make sure you're serving the files from a web server, not just opening the HTML file directly
- **Script loading errors**: Check if the Vapi script URL is accessible
- **Widget not appearing**: Ensure the `vapi-widget` element is present in the HTML

## Files Included

- `index.html` - Main AI CV Generator application
- `test.html` - Simple test page for Vapi widget
- `README.md` - Project documentation
- Other configuration files for the project

## Vapi Widget Configuration

The widget is configured with:
- **Voice mode** enabled
- **Dark theme** with custom colors
- **Full-size** widget positioned at bottom-right
- **Custom branding** for CV creation
- **Real-time speech recognition** capabilities
