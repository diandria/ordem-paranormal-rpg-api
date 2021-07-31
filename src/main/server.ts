
(async () => {
  console.log('Starting application...')
  try {
    const app = (await import('./config/app')).default
    app.listen(5050, () => console.log('Server running at http://localhost:5050'))
  } catch (error) {
    console.error(error)
  }
  console.log('Success!')
})()
