export default ({markup, css}) => {
    return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<!--<meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://fonts.googleapis.com 'unsafe-eval'; style-src 'self' 'unsafe-inline' 'unsafe-eval'; media-src *; script-src 'self' http://localhost:3000">-->
<title>MERN Skeleton</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
<div id="root">${markup}</div>
<style id="jss-server-side">${css}</style>
<script type="text/javascript" src="/dist/bundle.js"></script>
</body>
</html>`
}