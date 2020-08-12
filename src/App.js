import React from 'react';
import AppTopBar from './components/AppTopBar'
import { AppProvider } from '@shopify/polaris'
import enTranslations from '@shopify/polaris/locales/en.json';
import theme from './settings/theme'

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
