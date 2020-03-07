[![Netlify Status](https://api.netlify.com/api/v1/badges/8c932fd2-3d4c-4763-b728-6f0b50abbebe/deploy-status)](https://app.netlify.com/sites/sjdco-2020/deploys)

# SJDco 2020 (Static, Gatsby/Netlify)

Port to Gatsby and Netlify/NetlifyCMS of my 2020 online portfolio.

## 🏃 Running

To simply get the dev site up and running, do the following:

1. Install node modules:
    ```
    npm install
    ```
2. Run the dev server:
    ```
    npm run start
    ```

## 🌏 NetlifyCMS locally

You can optionally run the NetlifyCMS (CMS used to edit content for this site) locally on your computer. This allows you to make bulk changes and experiment without cluttering your git history with a commit for every change.

To run NetlifyCMS locally:

1. Start the NetlifyCMS proxy server on your local machine

    ```shell
    npx netlify-cms-proxy-server
    ```

2. Change `static/admin/config.yml` to have the following value:
    ```yml
    local_backend: true
    ```
3. Finally, start the dev server as normal:

    ```
    npm run start
    ```

4. You will now be able to access NetlifyCMS by navigating your local server to `/admin`

## 🚀 Deploying

Deployments are completely handled by netlify - to push to production server, simply commit into the master branch.
