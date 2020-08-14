import React, { useCallback, useRef, useState } from 'react';
import {
    ActionList,
    Card, Frame,
    Icon,
    Loading,
    Navigation,
    TopBar,
    VisuallyHidden
} from '@shopify/polaris';
import {
    ArrowLeftMinor,
    HashtagMajorMonotone,
    HomeMajorMonotone,
    QuestionMarkMajorTwotone
} from '@shopify/polaris-icons';
import Router from './router'

const AppTopBar = () =>
{
    const skipToContentRef = useRef(null);

    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [isLoading] = useState(false);
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
                items: [{ content: 'Back to Shopify', icon: ArrowLeftMinor }],
            },
            {
                items: [{ content: 'Community forums' }],
            },
        ]}
        name="Dharma"
        detail="Jaded Pixel"
        initials="D"
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
          <Icon source={QuestionMarkMajorTwotone}/>
          <VisuallyHidden>Secondary menu</VisuallyHidden>
        </span>
        }
        open={isSecondaryMenuOpen}
        onOpen={toggleIsSecondaryMenuOpen}
        onClose={toggleIsSecondaryMenuOpen}
        actions={[
            {
                items: [{ content: 'Community forums' }],
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

    const loadingMarkup = isLoading ? <Loading/> : 'asdasdas';

    return (
      <Frame
        topBar={topBarMarkup}
        navigation={navigationMarkup}
        showMobileNavigation={mobileNavigationActive}
        onNavigationDismiss={toggleMobileNavigationActive}
        skipToContentTarget={skipToContentRef.current}
      >
          {loadingMarkup}
          <Router/>
      </Frame>
    );
}

export default AppTopBar;
