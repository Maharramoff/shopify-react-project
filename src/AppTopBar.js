import React, { useCallback, useRef, useState } from 'react';
import {
    ActionList,
    Card,
    Frame,
    Icon,
    Navigation,
    TopBar,
    VisuallyHidden
} from '@shopify/polaris';
import {
    HashtagMajorMonotone,
    HomeMajorMonotone, LogOutMinor,
    SettingsMajorMonotone
} from '@shopify/polaris-icons';
import Router from './router'

const AppTopBar = () =>
{
    const skipToContentRef = useRef(null);

    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [mobileNavigationActive, setMobileNavigationActive] = useState(false);

    const toggleIsUserMenuOpen = useCallback(
      () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
      [],
    );

    const toggleIsSecondaryMenuOpen = useCallback(
      () => setIsSecondaryMenuOpen((isSecondaryMenuOpen) => !isSecondaryMenuOpen),
      [],
    );

    const toggleMobileNavigationActive = useCallback(
      () =>
        setMobileNavigationActive(
          (mobileNavigationActive) => !mobileNavigationActive,
        ),
      [],
    );

    const handleSearchResultsDismiss = useCallback(() =>
    {
        setIsSearchActive(false);
        setSearchValue('');
    }, []);

    const handleSearchChange = useCallback((value) =>
    {
        setSearchValue(value);
        setIsSearchActive(value.length > 0);
    }, []);

    const userMenuMarkup = (
      <TopBar.UserMenu
        actions={[
            {
                items: [{ content: 'Log out', icon: LogOutMinor }],
            },
        ]}
        name="Maharramov"
        detail="Software Engineer"
        initials="M"
        open={isUserMenuOpen}
        onToggle={toggleIsUserMenuOpen}
      />
    );

    const searchResultsMarkup = (
      <Card>
          <ActionList
            items={[
                { content: 'Shopify help center' },
                { content: 'Community forums' },
            ]}
          />
      </Card>
    );

    const searchFieldMarkup = (
      <TopBar.SearchField
        onChange={handleSearchChange}
        value={searchValue}
        placeholder="Search"
        showFocusBorder
      />
    );

    const secondaryMenuMarkup = (
      <TopBar.Menu
        activatorContent={
            <span>
          <Icon source={SettingsMajorMonotone}/>
          <VisuallyHidden>Secondary menu</VisuallyHidden>
        </span>
        }
        open={isSecondaryMenuOpen}
        onOpen={toggleIsSecondaryMenuOpen}
        onClose={toggleIsSecondaryMenuOpen}
        actions={[
            {
                items: [{ content: 'Settings' }],
            },
        ]}
      />
    );

    const navigationMarkup = (
      <Navigation location="/">
          <Navigation.Section
            items={[
                {
                    url: '../',
                    label: 'Notes',
                    icon: HomeMajorMonotone,
                },
            ]}
          />

          <Navigation.Section
            separator
            items={[
                {
                    url: '/label/laravel',
                    label: 'Laravel',
                    icon: HashtagMajorMonotone,
                    badge: '15',
                },
                {
                    url: '/label/javascript',
                    label: 'Javascript',
                    icon: HashtagMajorMonotone,
                    badge: '22',
                },
            ]}
          />
      </Navigation>
    );

    const topBarMarkup = (
      <TopBar
        showNavigationToggle
        userMenu={userMenuMarkup}
        secondaryMenu={secondaryMenuMarkup}
        searchResultsVisible={isSearchActive}
        searchField={searchFieldMarkup}
        searchResults={searchResultsMarkup}
        onSearchResultsDismiss={handleSearchResultsDismiss}
        onNavigationToggle={toggleMobileNavigationActive}
      />
    );

    return (
      <Frame
        topBar={topBarMarkup}
        navigation={navigationMarkup}
        showMobileNavigation={mobileNavigationActive}
        onNavigationDismiss={toggleMobileNavigationActive}
        skipToContentTarget={skipToContentRef.current}
      >
          <Router/>
      </Frame>
    );
}

export default AppTopBar;
