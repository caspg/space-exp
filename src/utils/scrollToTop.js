const scrollToTop = (nextState) => {
  const { location } = nextState
  if (location.action === 'PUSH' && location.pathname !== '/') {
    window.scrollTo(0, 0)
  }
}

export default scrollToTop
