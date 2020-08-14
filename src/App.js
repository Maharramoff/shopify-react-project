import React from 'react';
import AppTopBar from './AppTopBar'
import { AppProvider } from '@shopify/polaris'
import enTranslations from '@shopify/polaris/locales/en.json';
import theme from './settings/theme'
import { BrowserRouter } from 'react-router-dom'

function App()
{
    return (
      <AppProvider
        theme={theme}
        i18n={enTranslations}
      >
          <BrowserRouter>
              <AppTopBar/>
          </BrowserRouter>
      </AppProvider>
    );
}

export default App;
