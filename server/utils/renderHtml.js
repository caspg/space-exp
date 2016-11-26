const globalStyle = require('styles/global').default

module.exports = ({ content, styles }) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,900" rel="stylesheet">
    <style>
      ${globalStyle}
      ${styles}
    </style>
  </head>
  <body>
    <div id="app">
      ${content}
    </div>

    <script type="text/javascript" src="/bundles/app.bundle.js"></script>
  </body>
  </html>
`
