import { timingSafeEqual } from "crypto"
import { config } from "dotenv"
config()

export class apiAuth {
    public static authenticate(username: string, password: string): boolean {
        try {
            const isValidUsername = timingSafeEqual(
                Buffer.from(process.env.API_USERNAME || "default"),
                Buffer.from(username),
            )
            const isValidPassword = timingSafeEqual(
                Buffer.from(process.env.API_PASSWORD || "admin#1234"),
                Buffer.from(password),
            )
            if (isValidPassword && isValidUsername) return true
            return false
        } catch {
            return false
        }
    }
}
