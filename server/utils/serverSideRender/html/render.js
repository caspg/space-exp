const defaultMeta = require('./defaultMeta')

module.exports = ({ content, styles, bootData, meta = defaultMeta }) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name='description' content='${meta.description}'/>
    <title>${meta.title}</title>

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${meta.title}">
    <meta name="twitter:description" content="${meta.description}">
    <meta name="twitter:image" content="${meta.image}">

    <meta name="og:image" content="${meta.image}">

    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,900" rel="stylesheet">
    <style type="text/css">
      ${styles}
    </style>
  </head>
  <body>
    <div id="app">${content}</div>

    <noscript>
      <h3 style="color:#444;text-align:center;padding:20px;border: 1px solid #222;margin:30px;background:#eeeeee;">
        JavaScript is required to enjoy this website fully :(.
      </h3>
    </noscript>

    <script>
     window.BOOT_DATA = ${bootData};
    </script>
    <script type="text/javascript" src="/bundles/vendor.bundle.js"></script>
    <script type="text/javascript" src="/bundles/app.bundle.js"></script>
  </body>
  </html>
`
