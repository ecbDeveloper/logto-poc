import fastify from "fastify";
import { authMiddleware } from "./src/middleware";

import cors from '@fastify/cors';

const app = fastify()

app.register(cors, { origin: '*' })

app.get('/', (request, reply) => {
	reply.send('pong');
});

app.get('/protected', { preHandler: authMiddleware }, (request, reply) => {
	return reply.status(200).send({ message: 'User authorized!' })
})

app.listen({ port: 3030, host: '127.0.0.1' }, (err, address) => {
	if (err) {
		console.error(err)
		process.exit(1)
	}
	console.log(`Server listening at ${address}`)
})