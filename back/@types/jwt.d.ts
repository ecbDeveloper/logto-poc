import 'jose'

declare module 'jose' {
    interface JWTPayload {
        scope?: string
    }
}