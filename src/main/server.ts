import env from './env'

(async () => {
  console.log('Starting application...')
  try {
    const app = (await import('./web/config/app')).default
    app.listen(env.app.port, () => console.log(`Server running at http://localhost:${env.app.port}`))
  } catch (error) {
    console.error(error)
  }
})()
