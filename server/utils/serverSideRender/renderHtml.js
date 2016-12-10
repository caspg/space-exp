module.exports = ({ content, styles, bootData }) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Space Experience</title>

    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,900" rel="stylesheet">
    <style>
      ${styles}
    </style>
  </head>
  <body>
    <div id="app">${content}</div>
    <div id="dupa"></div>

    <script>
     window.BOOT_DATA = ${bootData};
    </script>
    <script type="text/javascript" src="/bundles/app.bundle.js"></script>
  </body>
  </html>
`
