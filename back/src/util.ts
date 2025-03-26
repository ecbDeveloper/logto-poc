import { IncomingHttpHeaders } from 'http';

export function extractBearerTokenFromHeaders({ authorization }: IncomingHttpHeaders): string {
    if (!authorization) {
        throw new Error('Authorization header is missing');
    }

    if (!authorization.startsWith('Bearer')) {
        throw new Error('Authorization header is not in the Bearer scheme');
    }

    return authorization.slice(7);
};