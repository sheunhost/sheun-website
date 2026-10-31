import { StrictMode } from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/ThemeProvider';
import App from './App';
import './index.css';

const container = document.getElementById('root')!;
const rootContent = (
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider defaultTheme="light" storageKey="ui-theme">
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
);

if (container.hasChildNodes()) {
  hydrateRoot(container, rootContent);
} else {
  createRoot(container).render(rootContent);
}
