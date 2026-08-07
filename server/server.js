const app = require('./app');
const connectDB = require('./config/database');
const env = require('./src/config/env');

// Connect Database
connectDB();

const PORT = env.PORT;

const server = app.listen(PORT, () => {
  console.log(`🚀 NexusERP Enterprise Server running on port ${PORT} [${env.NODE_ENV}]`);
  console.log(`📑 OpenAPI Swagger Docs live at http://localhost:${PORT}/docs`);
});

// Handle unhandled promise rejections gracefully
process.on('unhandledRejection', (err) => {
  console.error('💥 UNHANDLED REJECTION! Shutting down server gracefully...', err);
  server.close(() => {
    process.exit(1);
  });
});