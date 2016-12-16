import constants from './constants'
import colors from './constants/colors'

const globalStyle = `
  body {
    padding-bottom: 100px;

    background: url('/cover.jpg') no-repeat center center fixed;
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
