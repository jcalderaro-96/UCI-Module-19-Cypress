import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import db from './config/connection.js';
import routes from './routes/index.js';

await db();

const PORT = process.env.PORT || 3001;
const app = express();

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === 'production') {
  // Serve static assets correctly
  const clientDistPath = path.join(__dirname, '../client/dist');
  app.use(express.static(clientDistPath));

  // For any other route, serve the index.html in dist
  app.get('*', (_req, res) => {
    res.sendFile(path.join(clientDistPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
