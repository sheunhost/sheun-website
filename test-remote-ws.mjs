import { WebSocket } from 'ws';

const wsUrl = process.env.VITE_APP_URL ? process.env.VITE_APP_URL.replace('http', 'ws') + '/live' : 'ws://127.0.0.1:3000/live';

const ws = new WebSocket('wss://ais-dev-rf7uytp4lgxj3vnpi7vqdn-30629454067.europe-west3.run.app/live');

ws.on('open', () => {
  console.log('Connected to WSS remotely!');
  ws.close();
});

ws.on('error', (err) => {
  console.error('Error connecting remotely:', err);
});
