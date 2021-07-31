export class ServerError extends Error {
  constructor (stack: string) {
    super('Internal server error')
    this.name = 'ServerError'
    this.stack = stack
  }
}

export class AccessDeniedError extends Error {
  constructor (status: string) {
    super('Access denied')
    this.name = `${status}`
  }
}
