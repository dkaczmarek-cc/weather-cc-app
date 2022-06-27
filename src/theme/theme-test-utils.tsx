import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { ThemeProvider } from './ThemeProvider';

const customThemeRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: ThemeProvider, ...options });

export * from '@testing-library/react';
export { customThemeRender as render };