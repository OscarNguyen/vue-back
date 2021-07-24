const errorHandler = (error, req, res,next) => {
  if (error.name === 'CastError') {
    return res.status(400).json({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  }
  // else{
  //   return res.status(400).json({ error: error.message })
  // }
  next(error)
  // return res.status(error.statusCode).json({
  //   status: 'error',
  //   statusCode: error.statusCode,
  //   message: error.message,
  // })

  // res.locals.error = error
  // if (error.status >= 100 && error.status < 600)
  //   res.status(error.status)
  // else
  //   res.status(500)
  // res.render('error')

  // res.status(res.statusCode || 500)
  // res.render('error', {
  //   message: error.message,
  //   error: error
  // })
}

module.exports= errorHandler
