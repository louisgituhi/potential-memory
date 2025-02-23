import { defineConfig } from "drizzle-kit"

export default defineConfig({
    schema: "./src/database/schema.ts",
    out: "./drizzle_migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.NEON_URL as string
    }
})