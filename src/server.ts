import { resolve } from 'node:path'
import Fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import reactify from '@cyb3rcore/reactify'
import * as renderer from '@cyb3rcore/reactify/renderer'

const server = Fastify({
  logger: {
    transport: { target: '@fastify/one-line-logger' },
  },
})

// Serve Sveltia CMS admin at /admin/
await server.register(fastifyStatic, {
  root: resolve(import.meta.dirname, 'client', 'admin'),
  prefix: '/admin/',
  decorateReply: false,
})

await server.register(reactify, {
  root: resolve(import.meta.dirname, '..'),
  dev: process.argv.includes('--dev'),
  renderer,
})

await server.vite.ready()
await server.listen({ port: 3000 })
