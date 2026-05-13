import app from '../app';

const PORT = parseInt(process.env.PORT || '3000', 10);

app.listen(PORT, () => {
  console.log(`
  ╔════════════════════════════════════════╗
  ║      🎙️  Broadcast Hub Server          ║
  ║                                        ║
  ║    Server running on port ${PORT}        ║
  ║    Environment: ${process.env.NODE_ENV || 'development'}     ║
  ║                                        ║
  ║    Local: http://localhost:${PORT}      ║
  ╚════════════════════════════════════════╝
  `);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing HTTP server');
  process.exit(0);
});
