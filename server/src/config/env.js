const { z } = require('zod');
const dotenv = require('dotenv');

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.string().transform((val) => parseInt(val, 10)).default('5000'),
  MONGO_URI: z.string().default('mongodb://127.0.0.1:27017/college_erp_db'),
  JWT_SECRET: z.string().default('super-secret-enterprise-jwt-key-2026-nexus'),
  JWT_EXPIRES_IN: z.string().default('15m'),
  JWT_REFRESH_SECRET: z.string().default('super-secret-refresh-jwt-key-2026-nexus'),
  JWT_REFRESH_EXPIRES_IN: z.string().default('7d'),
  CORS_ORIGIN: z.string().default('http://localhost:5173'),
});

const parseResult = envSchema.safeParse(process.env);

if (!parseResult.success) {
  console.error('❌ Environment Variable Validation Error:', parseResult.error.format());
  process.exit(1);
}

module.exports = parseResult.data;
