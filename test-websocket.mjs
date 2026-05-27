import { WebSocket } from 'ws';

const ws = new WebSocket('ws://127.0.0.1:3000/live');

ws.on('open', () => {
  console.log('Connected!');
  ws.close();
});

ws.on('error', (err) => {
  console.error('Error connecting:', err);
});

ws.on('unexpected-response', (req, res) => {
  console.error('Unexpected response:', res.statusCode);
});
