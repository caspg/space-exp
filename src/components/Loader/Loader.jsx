import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Loader = styled.div`
  border-radius: 50%;
  width: 8em;
  height: 8em;

  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }

  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #ffffff;
  transform: translateZ(0);
  animation: ${rotate360} 0.9s infinite linear;
`

export default Loader
