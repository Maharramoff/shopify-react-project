import React from 'react';
import AppTopBar from './components/AppTopBar'
import { AppProvider } from '@shopify/polaris'
import enTranslations from '@shopify/polaris/locales/en.json';

const theme = {
    colors: {
        topBar: {
            background: '#357997',
        },
    },
    logo: {
        width: 124,
        topBarSource:
          'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999',
        url: 'http://jadedpixel.com',
        accessibilityLabel: 'Jaded Pixel',
    },
};

function App()
{
    return (
      <AppProvider
        theme={theme}
        i18n={enTranslations}
      >
          <AppTopBar/>
      </AppProvider>

    );
}

export default App;
