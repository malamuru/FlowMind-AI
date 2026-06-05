export function errorHandler(error, req, res, next) {
  console.error(error)

  res.status(500).json({
    error: error.message || 'Something went wrong on the server.'
  })
}