const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
const env = require('./src/config/env');
const errorHandler = require('./src/middlewares/errorHandler');
const setupSwagger = require('./src/swagger');

const studentRoutes = require('./src/modules/student/student.routes');
const authRoutes = require('./src/modules/auth/auth.routes');

const app = express();

// Security Headers
app.use(helmet());

// CORS Whitelist
app.use(
  cors({
    origin: env.CORS_ORIGIN,
    credentials: true,
  })
);

// Rate Limiting Protection
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200, // Limit each IP to 200 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests, please try again later.' },
});
app.use(limiter);

// Middleware Payload Body Parsers
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Setup Swagger OpenApi Docs
setupSwagger(app);

// Root Health Route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'NexusERP Enterprise API v2.4 Running 🚀',
    docs: '/docs',
    timestamp: new Date().toISOString(),
  });
});

// Versioned API Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/students', studentRoutes);

// Global Error Handler
app.use(errorHandler);

module.exports = app;