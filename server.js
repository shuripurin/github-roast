import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

// Serve static files (your HTML)
app.use(express.static(__dirname));

// Proxy /api/claude → Anthropic API, injecting your key server-side
app.use('/api/claude', createProxyMiddleware({
  target: 'https://api.anthropic.com',
  changeOrigin: true,
  pathRewrite: { '^/api/claude': '/v1/messages' },
  on: {
    proxyReq: (proxyReq) => {
      proxyReq.setHeader('x-api-key', process.env.ANTHROPIC_API_KEY || '');
      proxyReq.setHeader('anthropic-version', '2023-06-01');
    }
  }
}));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`\n✦ GitHub Autopsy running at http://localhost:${PORT}\n`);
});
