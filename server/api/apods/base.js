export const handleError = (res) => { // eslint-disable-line import/prefer-default-export
  res.status(500).json({
    message: 'There was some server error.',
  })
}
