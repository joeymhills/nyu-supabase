export { default } from 'next-auth/middleware'

export const config = {
  matcher: [ '/app', '/admin', '/addAward', '/', '/unauthorized', ]
}
