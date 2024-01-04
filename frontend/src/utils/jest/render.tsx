// React
import { ReactElement } from 'react';

// Providers
import { ThemeProvider } from 'styled-components';

// Next
import { render } from '@testing-library/react';

// Themes
import { defaulTheme } from '../../styles/themes/default';

const customWithTheme = (ui: ReactElement) =>
    render(<ThemeProvider theme={defaulTheme}>{ui}</ThemeProvider>);

export * from '@testing-library/react';
export { customWithTheme };
