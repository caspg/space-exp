export const handleError = (res) => {
  res.status(500).json({
    message: 'There was some server error.',
  })
}
