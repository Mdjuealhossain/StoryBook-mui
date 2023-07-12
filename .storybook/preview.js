
import {
  ThemeProvider,
  createTheme,
} from '@mui/material/styles';

import {theme} from "../src/ThemingStory&Mui/createTheme"

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};



const withThemeProvider = (Story) => {
 
  return (
    <ThemeProvider theme={theme}>
        <Story />
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];