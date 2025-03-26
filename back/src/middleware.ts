import { createRemoteJWKSet, jwtVerify } from "jose";
import { extractBearerTokenFromHeaders } from "./util";
import { FastifyReply, FastifyRequest } from "fastify";
import 'dotenv/config';


if (!process.env.JWKS_URL) {
    throw new Error("JWKS_URL não está definida nas variáveis de ambiente.");
}

const jwks = createRemoteJWKSet(new URL(process.env.JWKS_URL));

export const authMiddleware = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const token = extractBearerTokenFromHeaders(request.headers);
        if (!token) {
            return reply.status(401).send({ error: 'Token não fornecido' });
        }

        const { payload } = await jwtVerify(token, jwks,
            {
                issuer: process.env.JWT_ISSUER,
                audience: process.env.JWT_AUDIENCE,
            }
        );

        const { sub, scope } = payload;
        if (sub) {
            request.user = sub
        }

        if (!scope || !scope.includes('read:page')) {
            return reply.status(403).send({ message: 'Unauthorized!' });
        }
    } catch (err) {
        if (err instanceof TypeError) {
            return reply.status(500).send({ error: err.message })
        }
        return reply.status(500).send({ error: err })
    }

} 