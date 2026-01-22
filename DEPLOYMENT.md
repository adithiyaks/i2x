# Deploying to Vercel

Since your project is already pushed to GitHub, deploying to Vercel is very straightforward. You can choose one of the following methods:

## Method 1: Vercel Dashboard (Recommended)

This is the easiest way and sets up automatic deployments whenever you push changes to GitHub.

1.  **Log in** to these [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** and select **"Project"**.
3.  **Import Git Repository**:
    *   Select "Continue with GitHub".
    *   Find your repository `i2x` in the list and click **"Import"**.
4.  **Configure Project**:
    *   **Framework Preset**: Vercel should automatically detect this as **"Vite"**. If not, select "Vite" from the dropdown.
    *   **Root Directory**: Leave as `./`.
    *   **Build an Output Settings**:
        *   Build Command: `npm run build` (default)
        *   Output Directory: `dist` (default)
        *   Install Command: `npm install` (default)
5.  Click **"Deploy"**.

Vercel will build your project and provide you with a live URL (e.g., `i2x.vercel.app`) within a minute.

---

## Method 2: Vercel CLI

If you prefer using the terminal:

1.  **Install Vercel CLI**:
    ```bash
    npm i -g vercel
    ```

2.  **Login**:
    ```bash
    vercel login
    ```

3.  **Deploy**:
    Run the following command in your project root:
    ```bash
    vercel
    ```

4.  Follow the prompts:
    *   Set up and deploy? **Y**
    *   Which scope? (Select your account)
    *   Link to existing project? **N** (or Y if you already created it on the dashboard)
    *   Project name? **i2x**
    *   In which directory is your code located? **./**
    *   Auto-detect Project Settings? **Y**

5.  **Production Deployment**:
    When you are ready for a final production build (instead of a preview), run:
    ```bash
    vercel --prod
    ```

## Common Details for Vite

*   **Build Command**: `vite build` (or `npm run build`)
*   **Output Directory**: `dist`
*   **Environment Variables**: If you add API keys later, manage them in the Vercel Project Settings > Environment Variables.
