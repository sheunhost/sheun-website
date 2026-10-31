import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LazyMotion, domAnimation } from 'framer-motion';
import { ThemeProvider } from './components/ThemeProvider';
import { AppContent } from './App';

export function renderPage(url: string) {
  const helmetContext = {} as any;
  const html = renderToString(
    <React.StrictMode>
      <LazyMotion features={domAnimation}>
        <HelmetProvider context={helmetContext}>
          <ThemeProvider defaultTheme="light" storageKey="ui-theme">
            <MemoryRouter initialEntries={[url]}>
              <AppContent />
            </MemoryRouter>
          </ThemeProvider>
        </HelmetProvider>
      </LazyMotion>
    </React.StrictMode>
  );

  return { html, helmet: helmetContext.helmet };
}
