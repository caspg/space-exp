const defaultMeta = require('./defaultMeta')

const googleAnalytics = `
  <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-89508214-1', 'auto');
  ga('send', 'pageview');
  window.ga = ga

  </script>
`

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

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="/manifest.json">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="theme-color" content="#ffffff">

    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,900" rel="stylesheet" media="none" onload="if(media!='all')media='all'">
    <noscript><link href="https://fonts.googleapis.com/css?family=Roboto:300,400,900" rel="stylesheet"></noscript>

    <style type="text/css">
      ${styles}
    </style>

    ${(process.env.NODE_ENV === 'production') ? googleAnalytics : ''}
  </head>
  <body>
    <div id="app">${content}</div>

    <script>
     window.BOOT_DATA = ${bootData};
    </script>
    <script type="text/javascript" src="/bundles/vendor.bundle.js"></script>
    <script type="text/javascript" src="/bundles/app.bundle.js"></script>
  </body>
  </html>
`
