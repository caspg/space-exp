import constants from './constants'
import colors from './constants/colors'

const normalize = 'button,hr,input{overflow:visible}audio,canvas,progress,video{display:inline-block}progress,sub,sup{vertical-align:baseline}html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0} menu,article,aside,details,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{}button,select{text-transform:none}[type=submit], [type=reset],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none}/*# sourceMappingURL=normalize.min.css.map */'

const globalStyle = `
  ${normalize}

  body {
    padding-bottom: 100px;

    background-size: cover;
    background-color: ${colors.spaceBlue};

    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    font-weight: 400;
    line-height: 1.5em;
    color: ${colors.black222};
    font-size: 16px;
  }

  @media (min-width: ${constants.mobileMediaQuery}px) {
    body {
      font-size: 18px;
    }
  }

  .react-sharing-button__link {
    display: inline-block;
    text-decoration: none;
    color: #fff;
    margin: 0.5em;
    border-radius: 5px;
    transition: 50ms ease-out;
    padding: 0.5em 0.75em;
    line-height: 1.2em;
  }

  .react-sharing-button__icon {
    fill: #fff;
    stroke-width: 0;
    width: 1.2em;
    height: 1.2em;
    line-height: 1.2em;
    vertical-align: bottom;
  }

  .react-sharing-button__text {
    padding-left: 0.4em;
    line-height: 1.2em;
  }

  .react-sharing-button--facebook {
    background-color: #3b5998;
  }

  .react-sharing-button--facebook:hover {
    background-color: #2d4373;
  }

  .react-sharing-button--google {
    background-color: #dd4b39;
  }

  .react-sharing-button--google:hover {
    background-color: #c23321;
  }

  .react-sharing-button--pinterest {
    background-color: #bd081c;
  }

  .react-sharing-button--pinterest:hover {
    background-color: #8c0615;
  }

  .react-sharing-button--reddit {
    background-color: #5f99cf;
  }

  .react-sharing-button--reddit:hover {
    background-color: #3a80c1;
  }

  .react-sharing-button--twitter {
    background-color: #55acee;
  }

  .react-sharing-button--twitter:hover {
    background-color: #2795e9;
  }
`

export default globalStyle
